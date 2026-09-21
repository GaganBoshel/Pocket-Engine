import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Send,
  MoreVertical,
  RotateCcw,
  Sparkles,
  Copy,
  Check,
  Cpu,
  Trash2,
  BookOpen,
  Code2,
  Terminal,
  ExternalLink,
  Wifi,
  WifiOff,
  GraduationCap,
} from 'lucide-react';
import { BotId, ChatMessage, ChatSession } from '../types';
import { generateOfflineResponse, streamTokens } from '../lib/offlineAiEngine';
import { CourseQAModal } from './CourseQAModal';
import { TutorQAModal } from './TutorQAModal';
import { CourseQA } from '../data/computerCourseQA';
import { TutorQA } from '../data/tutorAssistantQA';

interface ActiveChatViewProps {
  chat: ChatSession;
  botInfo: { name: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }> };
  isOnline: boolean;
  onBack: () => void;
  onUpdateChat: (updated: ChatSession) => void;
  onDeleteChat?: (id: number | string) => void;
}

const BLUE = '#0066FF';
const CARD = 'bg-white dark:bg-[#131F33]';
const CARD_SHADOW =
  'shadow-[0_8px_24px_-6px_rgba(71,85,105,0.16),0_2px_6px_rgba(71,85,105,0.06)] dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.6)] dark:ring-1 dark:ring-white/[0.06]';
const TILE = 'bg-[#EAF3FF] text-[#0066FF] dark:bg-[#12305C] dark:text-[#6AA6FF]';
const TEXT = 'text-slate-900 dark:text-slate-50';
const MUTED = 'text-slate-500 dark:text-slate-400';
const ACCENT = 'text-[#0066FF] dark:text-[#6AA6FF]';

const SUGGESTIONS: Record<BotId, string[]> = {
  code: [
    'Q1: What is a computer?',
    'Q51: What is HTML?',
    'Q126: What is JavaScript?',
    'Q170: What is C?',
    'Q283: What is Python?',
    'Q398: How do you check even or odd in C?',
    'Q400: How do you calculate factorial?',
    'Q416: How do you add numbers in Excel?',
  ],
  tutor: [
    'Q1: What is science?',
    'Q4: What is photosynthesis?',
    'Q101: What is physics?',
    'Q116: State Newton’s first law of motion',
    'Q201: What is chemistry?',
    'Q237: What is an acid?',
    'Q301: What is health?',
    'Q365: What are the 3Rs?',
    'Q401: What is society?',
    'Q406: What is a constitution?',
  ],
  assistant: [
    'Q1: What is science?',
    'Q4: What is photosynthesis?',
    'Q101: What is physics?',
    'Q116: State Newton’s first law of motion',
    'Q201: What is chemistry?',
    'Q237: What is an acid?',
    'Q301: What is health?',
    'Q365: What are the 3Rs?',
    'Q401: What is society?',
    'Q406: What is a constitution?',
  ],
};

export const ActiveChatView: React.FC<ActiveChatViewProps> = ({
  chat,
  botInfo,
  isOnline,
  onBack,
  onUpdateChat,
  onDeleteChat,
}) => {
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showTutorModal, setShowTutorModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const streamAbortRef = useRef({ aborted: false });

  const { name, Icon } = botInfo;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat.messages, streamingText]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend ?? inputText).trim();
    if (!query || isGenerating) return;

    setInputText('');
    const userMsg: ChatMessage = { from: 'user', text: query, timestamp: 'Now' };
    const updatedMessages = [...chat.messages, userMsg];

    // Optimistically update title if it's the first user message
    const updatedTitle = chat.title === 'New conversation' ? query.slice(0, 36) : chat.title;

    const interimChat: ChatSession = {
      ...chat,
      title: updatedTitle,
      messages: updatedMessages,
      time: 'Just now',
    };
    onUpdateChat(interimChat);

    setIsGenerating(true);
    setStreamingText('');
    streamAbortRef.current = { aborted: false };

    // Generate local offline response with online status awareness
    const fullResponse = generateOfflineResponse(query, chat.bot, isOnline);

    await streamTokens(
      fullResponse,
      (currentChunk) => {
        setStreamingText(currentChunk);
      },
      () => {
        const aiMsg: ChatMessage = { from: 'ai', text: fullResponse, timestamp: 'Now' };
        onUpdateChat({
          ...interimChat,
          messages: [...updatedMessages, aiMsg],
        });
        setStreamingText('');
        setIsGenerating(false);
      },
      streamAbortRef.current
    );
  };

  const copyMessage = (text: string, idx: number) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1600);
  };

  const clearChat = () => {
    onUpdateChat({
      ...chat,
      messages: [],
    });
    setShowMenu(false);
  };

  const handleSelectCourseQuestion = (question: CourseQA) => {
    handleSend(`Q${question.id}: ${question.q}`);
  };

  const handleSelectTutorQuestion = (question: TutorQA) => {
    handleSend(`Q${question.id}: ${question.q}`);
  };

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-4 dark:border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <button
            onClick={onBack}
            aria-label="Back to conversations"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition active:scale-95 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2.2} />
          </button>

          <div className="flex items-center gap-2">
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${TILE}`}>
              <Icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div>
              <h2 className={`text-[14.5px] font-bold leading-tight ${TEXT}`}>{name}</h2>
              <div className="flex items-center gap-1.5 text-[11px]">
                {isOnline ? (
                  <span className="flex items-center gap-1 font-medium text-[#0066FF] dark:text-[#6AA6FF]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" /> Online Enhanced
                  </span>
                ) : (
                  <span className="flex items-center gap-1 font-medium text-amber-600 dark:text-amber-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Offline Code Output
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Toolbar */}
        <div className="relative flex items-center gap-1.5">
          {chat.bot === 'code' && (
            <button
              onClick={() => setShowCourseModal(true)}
              title="Open 441 Computer Course Q&A Library"
              className="flex h-8 items-center gap-1.5 rounded-full bg-[#EAF3FF] px-2.5 text-[11.5px] font-bold text-[#0066FF] transition active:scale-95 hover:bg-[#D9EAFE] dark:bg-[#12305C] dark:text-[#6AA6FF]"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>441 Q&A</span>
            </button>
          )}

          {(chat.bot === 'tutor' || chat.bot === 'assistant') && (
            <button
              onClick={() => setShowTutorModal(true)}
              title="Open 520 Revision Q&A Library (Science, Physics, Chemistry, HPE, Social Studies)"
              className="flex h-8 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 text-[11.5px] font-bold text-emerald-700 transition active:scale-95 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-400"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>520 Q&A</span>
            </button>
          )}

          <button
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Conversation options"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          >
            <MoreVertical className="h-4 w-4" />
          </button>

          {showMenu && (
            <div className={`absolute right-0 top-11 z-30 w-48 rounded-2xl p-1.5 ${CARD} ${CARD_SHADOW}`}>
              {chat.bot === 'code' && (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCourseModal(true);
                  }}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[13px] font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  <BookOpen className="h-4 w-4 text-[#0066FF]" /> 441 Course Library
                </button>
              )}
              {(chat.bot === 'tutor' || chat.bot === 'assistant') && (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowTutorModal(true);
                  }}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[13px] font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  <GraduationCap className="h-4 w-4 text-emerald-600" /> 520 Revision Library
                </button>
              )}
              <button
                onClick={clearChat}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[13px] font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
              >
                <RotateCcw className="h-4 w-4 text-slate-400" /> Clear messages
              </button>
              {onDeleteChat && (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    onDeleteChat(chat.id);
                  }}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[13px] font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4" /> Delete conversation
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="no-scrollbar flex-1 overflow-y-auto px-3.5 py-4">
        {chat.messages.length === 0 && !streamingText ? (
          <div className="flex flex-col items-center justify-center pt-6 text-center">
            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${TILE}`}>
              <Icon className="h-7 w-7" strokeWidth={2} />
            </span>
            <h3 className={`mt-3 text-[16px] font-bold ${TEXT}`}>Chat with {name}</h3>
            <p className={`mt-1 max-w-[290px] text-[12.5px] leading-relaxed ${MUTED}`}>
              {chat.bot === 'code'
                ? 'All 441 questions & answers from the Computer Course loaded. Fully workable in offline mode with code output!'
                : 'Loaded with all 520 questions across General Science, Physics, Chemistry, HPE & Social Studies. Works 100% offline without internet!'}
            </p>

            {chat.bot === 'code' && (
              <button
                onClick={() => setShowCourseModal(true)}
                className="mt-4 flex items-center gap-2 rounded-2xl bg-[#0066FF] px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition active:scale-95 hover:bg-[#0055D4]"
              >
                <BookOpen className="h-4 w-4" />
                <span>Browse 441 Course Q&A Library</span>
              </button>
            )}

            {(chat.bot === 'tutor' || chat.bot === 'assistant') && (
              <button
                onClick={() => setShowTutorModal(true)}
                className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition active:scale-95 hover:bg-emerald-700"
              >
                <GraduationCap className="h-4 w-4" />
                <span>Browse 520 Revision Q&As</span>
              </button>
            )}

            {/* Quick Suggestion Chips */}
            <div className="mt-5 flex w-full flex-col gap-2">
              <span className={`text-left text-[11.5px] font-semibold uppercase tracking-wider ${MUTED}`}>
                Suggested prompts {chat.bot === 'code' ? '(Course Q&A)' : '(Revision Q&A)'}
              </span>
              {(SUGGESTIONS[chat.bot] || []).map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  className={`flex items-center gap-2.5 rounded-2xl p-3 text-left text-[13px] font-medium transition active:scale-[0.98] hover:bg-slate-50 dark:hover:bg-white/[0.04] ${CARD} ${CARD_SHADOW}`}
                >
                  <Sparkles className={`h-4 w-4 shrink-0 ${ACCENT}`} />
                  <span className={TEXT}>{s}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 pb-24">
            {chat.messages.map((m, idx) => (
              <div key={idx} className="group relative flex flex-col">
                <div
                  className={`max-w-[94%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed shadow-xs ${
                    m.from === 'user'
                      ? 'ml-auto rounded-br-md bg-[#0066FF] text-white font-medium'
                      : `mr-auto rounded-bl-md ${CARD} ${TEXT} border border-slate-100 dark:border-white/[0.06]`
                  }`}
                >
                  {m.from === 'user' ? (
                    <div className="whitespace-pre-wrap">{m.text}</div>
                  ) : (
                    <FormattedMessage text={m.text} isOnline={isOnline} />
                  )}
                </div>

                {m.from === 'ai' && (
                  <button
                    onClick={() => copyMessage(m.text, idx)}
                    aria-label="Copy response"
                    className="mr-auto mt-1 flex items-center gap-1 pl-1 text-[11px] text-slate-400 opacity-75 hover:opacity-100 dark:text-slate-500"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy answer</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            ))}

            {/* Active Streaming Message */}
            {streamingText && (
              <div
                className={`mr-auto max-w-[94%] rounded-2xl rounded-bl-md border border-slate-100 px-3.5 py-2.5 text-[13.5px] leading-relaxed shadow-xs dark:border-white/[0.06] ${CARD} ${TEXT}`}
              >
                <FormattedMessage text={streamingText} isOnline={isOnline} />
                <span className="inline-block h-3.5 w-1.5 animate-pulse rounded-full bg-[#0066FF] ml-1" />
              </div>
            )}

            {isGenerating && !streamingText && (
              <div
                className={`mr-auto flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-slate-100 px-4 py-3 dark:border-white/[0.06] ${CARD}`}
              >
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#0066FF]" style={{ animationDelay: '0ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#0066FF]" style={{ animationDelay: '150ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#0066FF]" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Floating Chat Input Bar */}
      <div className="sticky bottom-3 inset-x-0 px-3 pt-1">
        <div
          className={`flex h-14 items-center gap-2 rounded-full py-1.5 pl-4 pr-1.5 focus-within:ring-2 focus-within:ring-[#0066FF]/40 ${CARD} ${CARD_SHADOW}`}
        >
          {chat.bot === 'code' && (
            <button
              onClick={() => setShowCourseModal(true)}
              title="Open 441 Course Q&A"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#EAF3FF] hover:text-[#0066FF] dark:bg-white/[0.06] dark:text-slate-300 dark:hover:text-[#6AA6FF]"
            >
              <BookOpen className="h-4 w-4" />
            </button>
          )}

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={
              chat.bot === 'code'
                ? isOnline
                  ? 'Ask any code question or Q1-Q441...'
                  : 'Ask code question (Outputs code & result)...'
                : `Ask ${name}...`
            }
            className="flex-1 bg-transparent text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
          />

          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim() || isGenerating}
            aria-label="Send message"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition disabled:opacity-40"
            style={{
              background: BLUE,
              boxShadow: inputText.trim() ? '0 4px 12px rgba(0, 102, 255, 0.4)' : 'none',
            }}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 441 Course Q&A Library Modal */}
      <CourseQAModal
        isOpen={showCourseModal}
        onClose={() => setShowCourseModal(false)}
        onSelectQuestion={handleSelectCourseQuestion}
        isOnline={isOnline}
      />

      {/* 520 Revision Q&A Library Modal for Personal Tutor & Assistant */}
      <TutorQAModal
        isOpen={showTutorModal}
        onClose={() => setShowTutorModal(false)}
        onSelectQuestion={handleSelectTutorQuestion}
        isOnline={isOnline}
        botModeName={name}
      />
    </div>
  );
};

/**
 * Custom lightweight Markdown & Code parser component
 */
interface FormattedMessageProps {
  text: string;
  isOnline: boolean;
}

const FormattedMessage: React.FC<FormattedMessageProps> = ({ text, isOnline }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Split text into code blocks and normal paragraphs
  const parts = text.split(/(```[\s\S]*?```)/g);

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard?.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1600);
  };

  return (
    <div className="space-y-2 text-[13.5px] leading-relaxed">
      {parts.map((part, idx) => {
        if (!part) return null;

        // Code block check
        if (part.startsWith('```') && part.endsWith('```')) {
          const match = part.match(/^```(\w+)?\n([\s\S]*?)```$/);
          const lang = match ? match[1] || 'code' : 'code';
          const codeContent = match ? match[2] : part.slice(3, -3);

          const isTerminalOutput =
            lang === 'text' ||
            codeContent.includes('===') ||
            codeContent.includes('Output') ||
            codeContent.includes('Trace');

          return (
            <div
              key={idx}
              className={`my-2 overflow-hidden rounded-xl border ${
                isTerminalOutput
                  ? 'border-emerald-500/20 bg-[#0B1520] dark:bg-[#070E17]'
                  : 'border-slate-800 bg-[#0F172A]'
              }`}
            >
              {/* Code/Terminal Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90 px-3 py-1.5 text-[11px] font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  {isTerminalOutput ? (
                    <>
                      <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="font-semibold text-emerald-400">Terminal Output</span>
                    </>
                  ) : (
                    <>
                      <Code2 className="h-3.5 w-3.5 text-[#6AA6FF]" />
                      <span className="uppercase text-slate-400">{lang}</span>
                    </>
                  )}
                </span>
                <button
                  onClick={() => copyCode(codeContent, idx)}
                  className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code body */}
              <pre
                className={`no-scrollbar overflow-x-auto p-3 font-mono text-[12px] leading-snug ${
                  isTerminalOutput ? 'text-emerald-300' : 'text-slate-100'
                }`}
              >
                {codeContent}
              </pre>
            </div>
          );
        }

        // Regular markdown text
        return <FormattedParagraph key={idx} text={part} />;
      })}
    </div>
  );
};

const FormattedParagraph: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');

  return (
    <div className="space-y-1">
      {lines.map((line, lidx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lidx} className="h-1.5" />;
        }

        // Header 3: ###
        if (line.startsWith('### ')) {
          return (
            <h3 key={lidx} className="pt-1 text-[14.5px] font-bold text-slate-900 dark:text-white">
              {renderInlineSpans(line.replace('### ', ''))}
            </h3>
          );
        }

        // Header 2: ##
        if (line.startsWith('## ')) {
          return (
            <h2 key={lidx} className="pt-1 text-[15px] font-extrabold text-slate-900 dark:text-white">
              {renderInlineSpans(line.replace('## ', ''))}
            </h2>
          );
        }

        // Bullet point: • or -
        if (line.startsWith('• ') || line.startsWith('- ') || line.startsWith('* ')) {
          return (
            <div key={lidx} className="flex items-start gap-1.5 pl-1 text-[13px]">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF]" />
              <span className="flex-1">{renderInlineSpans(line.replace(/^([•\-\*]\s*)/, ''))}</span>
            </div>
          );
        }

        return (
          <p key={lidx} className="text-[13.5px]">
            {renderInlineSpans(line)}
          </p>
        );
      })}
    </div>
  );
};

/**
 * Parses inline markdown: links [title](url), bold **text**, and inline `code`
 */
function renderInlineSpans(text: string): React.ReactNode[] {
  // Regex pattern for [title](url), **bold**, and `code`
  const tokenRegex = /(\[.*?\]\(https?:\/\/.*?\)|\*\*.*?\*\*|`.*?`)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, i) => {
    if (!part) return null;

    // Link: [title](url)
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const match = part.match(/^\[(.*?)\]\((https?:\/\/.*?)\)$/);
      if (match) {
        const title = match[1];
        const url = match[2];
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-semibold text-[#0066FF] underline decoration-blue-300 underline-offset-2 hover:text-blue-700 dark:text-[#6AA6FF] dark:decoration-blue-500/50"
          >
            <span>{title}</span>
            <ExternalLink className="inline h-2.5 w-2.5 shrink-0" />
          </a>
        );
      }
    }

    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Inline code: `code`
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="rounded-md bg-slate-100 px-1 py-0.5 font-mono text-[12px] font-semibold text-[#0066FF] dark:bg-white/[0.08] dark:text-[#6AA6FF]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={i}>{part}</span>;
  });
}
