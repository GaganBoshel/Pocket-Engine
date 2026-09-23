import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy initialization of GoogleGenAI client
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    models: ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3.1-pro-preview", "gemini-3.8-flash"],
  });
});

interface ChatTurn {
  role: "user" | "model";
  content: string;
}

function resolveModel(taskType?: string, model?: string): string {
  if (model && ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3.8-flash", "gemini-3.1-pro-preview"].includes(model)) {
    return model;
  }
  if (taskType === "fast") {
    return "gemini-3.1-flash-lite";
  }
  if (taskType === "complex") {
    // Prefer gemini-3.5-flash first to avoid free-tier 429 quota exhaustion on 3.1-pro-preview
    return "gemini-3.5-flash";
  }
  return "gemini-3.5-flash";
}

// Standard multi-turn chat endpoint
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { messages, systemInstruction, taskType, model, searchGrounding } = req.body as {
      messages: ChatTurn[];
      systemInstruction?: string;
      taskType?: "fast" | "general" | "complex";
      model?: string;
      searchGrounding?: boolean;
    };

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array is required" });
    }

    const ai = getGenAI();
    // When search grounding is requested, gemini-3.5-flash is required
    let targetModel = searchGrounding ? "gemini-3.5-flash" : resolveModel(taskType, model);

    // Format multi-turn conversation history for Gemini SDK
    const formattedContents = messages.map((m) => ({
      role: m.role === "user" ? ("user" as const) : ("model" as const),
      parts: [{ text: m.content || "" }],
    }));

    const config: any = {
      systemInstruction: systemInstruction || undefined,
    };
    if (searchGrounding) {
      config.tools = [{ googleSearch: {} }];
    }

    try {
      const response = await ai.models.generateContent({
        model: targetModel,
        contents: formattedContents,
        config,
      });

      const reply = response.text || "";
      // Extract search grounding metadata if present
      const candidate = response.candidates?.[0];
      const groundingChunks = candidate?.groundingMetadata?.groundingChunks || [];
      const webSources = groundingChunks
        .map((c: any) => c.web)
        .filter(Boolean)
        .map((w: any) => ({ title: w.title || w.uri, uri: w.uri }));

      return res.json({ reply, model: targetModel, sources: webSources });
    } catch (primaryError: any) {
      console.warn(`Primary generation with model ${targetModel} failed:`, primaryError.message);
      // Fallback 1: If search grounding was enabled, retry with gemini-3.5-flash standard (without search tool)
      if (searchGrounding) {
        try {
          const retryWithoutSearch = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: formattedContents,
            config: {
              systemInstruction: systemInstruction || undefined,
            },
          });
          return res.json({
            reply: retryWithoutSearch.text || "",
            model: "gemini-3.5-flash",
            sources: [],
            note: "Completed with standard Gemini 3.5 Flash",
          });
        } catch (searchRetryErr: any) {
          console.warn("Search retry fallback failed:", searchRetryErr.message);
        }
      }

      // Fallback 2: Try ultra-reliable gemini-3.1-flash-lite
      try {
        const liteResponse = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents: formattedContents,
          config: {
            systemInstruction: systemInstruction || undefined,
          },
        });
        return res.json({
          reply: liteResponse.text || "",
          model: "gemini-3.1-flash-lite",
          sources: [],
          note: "Served via Gemini 3.1 Flash Lite",
        });
      } catch (liteErr: any) {
        console.warn("Flash lite fallback failed:", liteErr.message);
      }

      // Fallback 3: Try gemini-3.8-flash
      try {
        const fallback38 = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: formattedContents,
          config: {
            systemInstruction: systemInstruction || undefined,
          },
        });
        return res.json({
          reply: fallback38.text || "",
          model: "gemini-3.8-flash",
          sources: [],
        });
      } catch (f38Err: any) {
        throw primaryError;
      }
    }
  } catch (error: any) {
    console.error("Gemini API chat error:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate response from Gemini API",
    });
  }
});

// Streaming multi-turn chat endpoint with Server-Sent Events (SSE)
app.post("/api/gemini/chat/stream", async (req, res) => {
  try {
    const { messages, systemInstruction, taskType, model, searchGrounding } = req.body as {
      messages: ChatTurn[];
      systemInstruction?: string;
      taskType?: "fast" | "general" | "complex";
      model?: string;
      searchGrounding?: boolean;
    };

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array is required" });
    }

    const ai = getGenAI();
    // When search grounding is requested, gemini-3.5-flash is required
    let targetModel = searchGrounding ? "gemini-3.5-flash" : resolveModel(taskType, model);

    const formattedContents = messages.map((m) => ({
      role: m.role === "user" ? ("user" as const) : ("model" as const),
      parts: [{ text: m.content || "" }],
    }));

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const config: any = {
      systemInstruction: systemInstruction || undefined,
    };
    if (searchGrounding) {
      config.tools = [{ googleSearch: {} }];
    }

    try {
      const responseStream = await ai.models.generateContentStream({
        model: targetModel,
        contents: formattedContents,
        config,
      });

      let collectedSources: Array<{ title: string; uri: string }> = [];

      for await (const chunk of responseStream) {
        const text = chunk.text;
        const candidate = chunk.candidates?.[0];
        if (candidate?.groundingMetadata?.groundingChunks) {
          const sources = candidate.groundingMetadata.groundingChunks
            .map((c: any) => c.web)
            .filter(Boolean)
            .map((w: any) => ({ title: w.title || w.uri, uri: w.uri }));
          if (sources.length > 0) {
            collectedSources = sources;
          }
        }

        if (text) {
          res.write(`data: ${JSON.stringify({ chunk: text, model: targetModel })}\n\n`);
        }
      }

      res.write(
        `data: ${JSON.stringify({
          done: true,
          model: targetModel,
          sources: collectedSources.length > 0 ? collectedSources : undefined,
        })}\n\n`
      );
      res.end();
    } catch (streamError: any) {
      console.warn(`Primary stream with model ${targetModel} failed:`, streamError.message);
      let streamSucceeded = false;

      // Fallback 1: If search grounding was enabled and failed (e.g. 429 on tools), retry with 3.5-flash standard
      if (searchGrounding) {
        try {
          const fallbackStream = await ai.models.generateContentStream({
            model: "gemini-3.5-flash",
            contents: formattedContents,
            config: {
              systemInstruction: systemInstruction || undefined,
            },
          });
          for await (const chunk of fallbackStream) {
            const text = chunk.text;
            if (text) {
              res.write(`data: ${JSON.stringify({ chunk: text, model: "gemini-3.5-flash" })}\n\n`);
            }
          }
          res.write(`data: ${JSON.stringify({ done: true, model: "gemini-3.5-flash" })}\n\n`);
          res.end();
          streamSucceeded = true;
          return;
        } catch (searchRetryErr: any) {
          console.warn("Search streaming retry failed:", searchRetryErr.message);
        }
      }

      // Fallback 2: Stream using gemini-3.1-flash-lite (highest rate limit allowance)
      if (!streamSucceeded) {
        try {
          const liteStream = await ai.models.generateContentStream({
            model: "gemini-3.1-flash-lite",
            contents: formattedContents,
            config: {
              systemInstruction: systemInstruction || undefined,
            },
          });
          for await (const chunk of liteStream) {
            const text = chunk.text;
            if (text) {
              res.write(`data: ${JSON.stringify({ chunk: text, model: "gemini-3.1-flash-lite" })}\n\n`);
            }
          }
          res.write(`data: ${JSON.stringify({ done: true, model: "gemini-3.1-flash-lite" })}\n\n`);
          res.end();
          streamSucceeded = true;
          return;
        } catch (liteErr: any) {
          console.warn("Flash lite streaming fallback failed:", liteErr.message);
        }
      }

      // Fallback 3: Stream using gemini-3.8-flash
      if (!streamSucceeded) {
        try {
          const f38Stream = await ai.models.generateContentStream({
            model: "gemini-3.8-flash",
            contents: formattedContents,
            config: {
              systemInstruction: systemInstruction || undefined,
            },
          });
          for await (const chunk of f38Stream) {
            const text = chunk.text;
            if (text) {
              res.write(`data: ${JSON.stringify({ chunk: text, model: "gemini-3.8-flash" })}\n\n`);
            }
          }
          res.write(`data: ${JSON.stringify({ done: true, model: "gemini-3.8-flash" })}\n\n`);
          res.end();
          streamSucceeded = true;
          return;
        } catch (f38Err: any) {
          throw streamError;
        }
      }
    }
  } catch (error: any) {
    console.error("Gemini API streaming error:", error);
    if (!res.headersSent) {
      return res.status(500).json({
        error: error.message || "Failed to stream response from Gemini API",
      });
    }
    res.write(`data: ${JSON.stringify({ error: error.message || "Streaming failed" })}\n\n`);
    res.end();
  }
});

// Vite middleware & static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
