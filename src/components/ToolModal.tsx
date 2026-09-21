import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Copy,
  Check,
  RotateCw,
  Layers,
  FileText,
  NotebookPen,
  Lightbulb,
  RefreshCw,
  Code2,
  Calculator,
  SpellCheck,
  Compass,
} from 'lucide-react';
import { runTool } from '../lib/offlineAiEngine';

export interface ToolDef {
  id: string;
  label: string;
  description: string;
  placeholder: string;
  defaultInput?: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export const ALL_TOOLS: Record<string, ToolDef> = {
  summarizer: {
    id: 'summarizer',
    label: 'Text Summarizer',
    description: 'Compress long articles, essays, or notes into key bullet takeaways.',
    placeholder: 'Paste or type text to summarize...',
    defaultInput: 'Artificial intelligence allows computers to learn patterns from data rather than following static rules. On-device AI executes models directly on local hardware without sending private data to cloud servers. This drastically reduces latency, enhances user privacy, and enables applications to function fully in offline environments where network access is unavailable.',
    Icon: FileText,
  },
  generator: {
    id: 'generator',
    label: 'Content Generation',
    description: 'Generate structured outlines, essays, or creative drafts.',
    placeholder: 'Enter a topic, headline, or prompt...',
    defaultInput: 'The future of decentralized offline applications',
    Icon: Sparkles,
  },
  rewriter: {
    id: 'rewriter',
    label: 'Rewriting & Paraphrasing',
    description: 'Rephrase sentences into professional, concise, or engaging styles.',
    placeholder: 'Paste sentence to rewrite...',
    defaultInput: 'We need to fix the bug because users are very mad about the slow speed.',
    Icon: RefreshCw,
  },
  flashcard: {
    id: 'flashcard',
    label: 'Flash Card Generator',
    description: 'Turn study topics or chapters into active recall questions and answers.',
    placeholder: 'Enter subject or concept (e.g., Photosynthesis, React Hooks)...',
    defaultInput: 'Cellular Respiration in Biology',
    Icon: Layers,
  },
  notes: {
    id: 'notes',
    label: 'Study Notes',
    description: 'Organize complex ideas into clean study guides with review prompts.',
    placeholder: 'Enter study topic or chapter title...',
    defaultInput: 'Newtonian Classical Mechanics',
    Icon: NotebookPen,
  },
  explain: {
    id: 'explain',
    label: 'Explain It Simply',
    description: 'Break down complex technical concepts using plain language and analogies.',
    placeholder: 'What concept would you like explained simply?',
    defaultInput: 'Quantum computing and qubits',
    Icon: Lightbulb,
  },
  code_explainer: {
    id: 'code_explainer',
    label: 'Code Explainer',
    description: 'Analyze code snippets and get plain-English explanations of logic.',
    placeholder: 'Paste code snippet here...',
    defaultInput: 'const memoized = useMemo(() => computeHeavy(a, b), [a, b]);',
    Icon: Code2,
  },
  math_solver: {
    id: 'math_solver',
    label: 'Math Assistant',
    description: 'Step-by-step problem solver for algebra, geometry, and calculus.',
    placeholder: 'Enter formula or problem (e.g. 2x^2 + 5x - 3 = 0)...',
    defaultInput: 'Solve: 2x^2 + 5x - 3 = 0',
    Icon: Calculator,
  },
};

const BLUE = '#0066FF';
const CARD = 'bg-white dark:bg-[#131F33]';
const CARD_SHADOW =
  'shadow-[0_8px_24px_-6px_rgba(71,85,105,0.16),0_2px_6px_rgba(71,85,105,0.06)] dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.6)] dark:ring-1 dark:ring-white/[0.06]';
const TILE = 'bg-[#EAF3FF] text-[#0066FF] dark:bg-[#12305C] dark:text-[#6AA6FF]';
const TEXT = 'text-slate-900 dark:text-slate-50';
const MUTED = 'text-slate-500 dark:text-slate-400';

interface ToolModalProps {
  toolId: string;
  onClose: () => void;
  onOpenTool: (id: string) => void;
}

export const ToolModal: React.FC<ToolModalProps> = ({ toolId, onClose, onOpenTool }) => {
  const isCatalog = toolId === 'more_writing' || toolId === 'more_exam' || toolId === 'catalog';
  const tool = ALL_TOOLS[toolId] || ALL_TOOLS['summarizer'];

  const [input, setInput] = useState(tool.defaultInput || '');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    if (!input.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const output = runTool(tool.id, input);
      setResult(output);
      setLoading(false);
    }, 280);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard?.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="tool-dialog-title"
        className={`relative flex max-h-[90dvh] sm:max-h-[90vh] w-full max-w-sm flex-col overflow-hidden rounded-[26px] sm:rounded-[32px] p-4 sm:p-5 ${CARD} ${CARD_SHADOW}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2.5">
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${TILE}`}>
              <tool.Icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <h2 id="tool-dialog-title" className={`text-[16px] font-bold leading-tight ${TEXT}`}>
                {isCatalog ? 'AI Tool Directory' : tool.label}
              </h2>
              <p className={`text-[11.5px] ${MUTED}`}>100% Offline Toolkit</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {isCatalog ? (
          <div className="no-scrollbar mt-2 flex-1 overflow-y-auto space-y-2.5">
            <p className={`text-[12.5px] ${MUTED}`}>Choose any tool to run locally on your device:</p>
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {Object.values(ALL_TOOLS).map((t) => (
                <button
                  key={t.id}
                  onClick={() => onOpenTool(t.id)}
                  className={`flex flex-col items-start rounded-2xl p-3 text-left transition active:scale-95 hover:bg-slate-50 dark:hover:bg-white/[0.04] ${CARD} ${CARD_SHADOW}`}
                >
                  <span className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${TILE}`}>
                    <t.Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className={`text-[12.5px] font-bold leading-tight ${TEXT}`}>{t.label}</span>
                  <span className={`mt-1 line-clamp-2 text-[10.5px] ${MUTED}`}>{t.description}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="no-scrollbar mt-1 flex-1 overflow-y-auto space-y-3 pr-0.5">
            <p className={`text-[12px] leading-relaxed ${MUTED}`}>{tool.description}</p>

            <div>
              <label htmlFor="tool-input-field" className={`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${MUTED}`}>
                Input text
              </label>
              <textarea
                id="tool-input-field"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={3}
                placeholder={tool.placeholder}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 p-3 text-[13px] font-medium text-slate-800 outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100"
              />
            </div>

            <button
              onClick={handleRun}
              disabled={loading || !input.trim()}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-full text-[14px] font-bold text-white transition active:scale-[0.98] disabled:opacity-40"
              style={{
                background: BLUE,
                boxShadow: '0 8px 16px -4px rgba(0,102,255,0.4)',
              }}
            >
              {loading ? (
                <>
                  <RotateCw className="h-4 w-4 animate-spin" /> Processing Offline...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" /> Run {tool.label}
                </>
              )}
            </button>

            {result && (
              <div className="mt-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-3 dark:border-white/[0.06] dark:bg-white/[0.04]">
                <div className="mb-2 flex items-center justify-between">
                  <span className={`text-[11.5px] font-bold ${TEXT}`}>Result</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#0066FF] dark:text-[#6AA6FF]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" /> Copy output
                      </>
                    )}
                  </button>
                </div>
                <div className={`whitespace-pre-wrap text-[12.5px] leading-relaxed ${TEXT}`}>{result}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
