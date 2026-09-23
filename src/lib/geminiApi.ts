import { BotId, ChatMessage, GeminiModelId, TaskType } from '../types';

export interface ModelOption {
  id: GeminiModelId;
  name: string;
  badge: string;
  taskType: TaskType;
  description: string;
}

export const GEMINI_MODELS: ModelOption[] = [
  {
    id: 'gemini-3.5-flash',
    name: 'Gemini 3.5 Flash',
    badge: 'General',
    taskType: 'general',
    description: 'Balanced speed and intelligence for general tasks and explanations.',
  },
  {
    id: 'gemini-3.1-flash-lite',
    name: 'Gemini 3.1 Flash Lite',
    badge: 'Fast',
    taskType: 'fast',
    description: 'Ultra-fast low-latency responses for rapid questions and quick edits.',
  },
  {
    id: 'gemini-3.1-pro-preview',
    name: 'Gemini 3.1 Pro',
    badge: 'Complex',
    taskType: 'complex',
    description: 'High-capability reasoning for complex STEM, deep coding, and logic.',
  },
  {
    id: 'gemini-3.8-flash',
    name: 'Gemini 3.8 Flash',
    badge: 'Flagship Flash',
    taskType: 'general',
    description: 'Next-gen multimodal flash model with advanced context awareness.',
  },
];

export const BOT_SYSTEM_INSTRUCTIONS: Record<
  BotId,
  { roleTitle: string; systemInstruction: string; defaultModel: GeminiModelId }
> = {
  gemini: {
    roleTitle: 'Gemini Universal Intelligence',
    systemInstruction:
      'You are the Gemini Chatbot, an advanced, friendly, and highly capable multi-turn AI assistant powered by Google Gemini. You provide comprehensive, insightful, and nuanced answers across all topics, maintaining context smoothly over multi-turn conversations. Adapt your tone to be helpful, concise when appropriate, and deeply analytical when requested.',
    defaultModel: 'gemini-3.5-flash',
  },
  code: {
    roleTitle: 'Senior Software Engineer & Coding Mentor',
    systemInstruction:
      'You are Code Guru, an expert senior programmer, software engineer, and computer science tutor. You write clean, idiomatic, and bug-free code with modern best practices. Provide concise explanations, well-commented code snippets with appropriate language tags, time/space complexity analysis, and expected output. Help debug issues methodically across all programming languages (C, C++, Python, JavaScript, TypeScript, Java, HTML/CSS, SQL).',
    defaultModel: 'gemini-3.1-pro-preview',
  },
  tutor: {
    roleTitle: 'Academic Science & Exam Tutor',
    systemInstruction:
      'You are Personal Tutor, a knowledgeable, encouraging academic educator specializing in Science, Physics, Chemistry, Health & Physical Education, Social Studies, and Mathematics. Explain difficult concepts using clear analogies, step-by-step reasoning, bulleted takeaways, formula breakdowns, and review questions to test understanding.',
    defaultModel: 'gemini-3.5-flash',
  },
  assistant: {
    roleTitle: 'Productivity & Executive Companion',
    systemInstruction:
      'You are Personal Assistant, a proactive, organized, and helpful productivity companion. You assist with planning, summarizing, drafting professional communications, daily task breakdown, critical thinking, and general problem solving with high accuracy and clarity.',
    defaultModel: 'gemini-3.1-flash-lite',
  },
};

/**
 * Stream a multi-turn chat interaction with Gemini via SSE
 */
export async function streamGeminiChat(
  messages: ChatMessage[],
  botId: BotId,
  model: GeminiModelId,
  onChunk: (chunk: string, fullText: string) => void,
  abortSignal?: AbortSignal,
  searchGrounding?: boolean
): Promise<{ text: string; modelUsed: string; sources?: Array<{ title: string; uri: string }> }> {
  const roleConfig = BOT_SYSTEM_INSTRUCTIONS[botId] || BOT_SYSTEM_INSTRUCTIONS.gemini;

  // Format conversation history for multi-turn Gemini format
  const chatTurns = messages
    .filter((m) => m.text && m.text.trim().length > 0)
    .map((m) => ({
      role: m.from === 'user' ? 'user' : 'model',
      content: m.text,
    }));

  if (chatTurns.length === 0) {
    throw new Error('Conversation history is empty');
  }

  const response = await fetch('/api/gemini/chat/stream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: chatTurns,
      systemInstruction: roleConfig.systemInstruction,
      model,
      searchGrounding: Boolean(searchGrounding),
    }),
    signal: abortSignal,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Gemini API request failed with status ${response.status}`);
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error('Streaming response body is not readable');
  }

  const decoder = new TextDecoder();
  let accumulatedText = '';
  let modelUsed = model;
  let collectedSources: Array<{ title: string; uri: string }> | undefined;
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data: ')) continue;
      const dataStr = trimmed.slice(6);
      if (!dataStr) continue;

      try {
        const parsed = JSON.parse(dataStr);
        if (parsed.error) {
          throw new Error(parsed.error);
        }
        if (parsed.model) {
          modelUsed = parsed.model;
        }
        if (parsed.sources) {
          collectedSources = parsed.sources;
        }
        if (parsed.chunk) {
          accumulatedText += parsed.chunk;
          onChunk(parsed.chunk, accumulatedText);
        }
        if (parsed.done) {
          if (parsed.sources) {
            collectedSources = parsed.sources;
          }
        }
      } catch (err: any) {
        if (err.message && !err.message.includes('JSON')) {
          throw err;
        }
      }
    }
  }

  return { text: accumulatedText, modelUsed, sources: collectedSources };
}

/**
 * Standard non-streaming Gemini chat request
 */
export async function sendGeminiChat(
  messages: ChatMessage[],
  botId: BotId,
  model: GeminiModelId,
  searchGrounding?: boolean
): Promise<{ text: string; modelUsed: string; sources?: Array<{ title: string; uri: string }> }> {
  const roleConfig = BOT_SYSTEM_INSTRUCTIONS[botId] || BOT_SYSTEM_INSTRUCTIONS.gemini;

  const chatTurns = messages
    .filter((m) => m.text && m.text.trim().length > 0)
    .map((m) => ({
      role: m.from === 'user' ? 'user' : 'model',
      content: m.text,
    }));

  const response = await fetch('/api/gemini/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: chatTurns,
      systemInstruction: roleConfig.systemInstruction,
      model,
      searchGrounding: Boolean(searchGrounding),
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Gemini API request failed with status ${response.status}`);
  }

  const data = await response.json();
  return {
    text: data.reply || '',
    modelUsed: data.model || model,
    sources: data.sources,
  };
}
