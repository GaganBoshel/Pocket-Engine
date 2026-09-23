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
  Zap,
  Brain,
  Layers,
  Info,
  X,
  Square,
  Bot,
  Mic,
  MicOff,
  Globe,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { BotId, ChatMessage, ChatSession, GeminiModelId, TaskType } from '../types';
import { generateOfflineResponse, streamTokens } from '../lib/offlineAiEngine';
import {
  BOT_SYSTEM_INSTRUCTIONS,
  GEMINI_MODELS,
  streamGeminiChat,
} from '../lib/geminiApi';
import { useVoiceInput } from '../hooks/useVoiceInput';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
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
  gemini: [
    'Explain quantum computing simply',
    'Write a TypeScript function to debounce API calls',
    'Compare microservices vs monolithic architecture',
    'Analyze this logic puzzle: The more you take, the more you leave behind',
    'Summarize the core principles of clean system design',
    'Explain how neural networks learn with a simple analogy',
  ],
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
    'Help me organize my study schedule for next week',
    'Draft a polite follow-up email after a job interview',
    'Brainstorm 5 innovative app ideas for students',
    'Explain climate change simply',
    'Summarize how compound interest works with an example',
    'Create a 3-step action plan to improve focus',
  ],
};

const TASK_TABS: {
  id: TaskType;
  model: GeminiModelId;
  label: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: 'fast', model: 'gemini-3.1-flash-lite', label: 'Fast', badge: 'Flash Lite', icon: Zap },
  { id: 'general', model: 'gemini-3.5-flash', label: 'General', badge: 'Flash 3.5', icon: Sparkles },
  { id: 'complex', model: 'gemini-3.1-pro-preview', label: 'Complex', badge: 'Pro 3.1', icon: Brain },
];

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
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showTutorModal, setShowTutorModal] = useState(false);
  const [showModelPicker, setShowModelPicker] = useState(false);

  // Active Gemini model selection
  const defaultModelForBot =
    BOT_SYSTEM_INSTRUCTIONS[chat.bot]?.defaultModel || 'gemini-3.5-flash';
  const [selectedModel, setSelectedModel] = useState<GeminiModelId>(
    chat.selectedModel || defaultModelForBot
  );
  const [searchGrounding, setSearchGrounding] = useState<boolean>(
    chat.searchGroundingEnabled ?? false
  );

  const {
    isListening,
    toggleListening,
    isSupported: isVoiceSupported,
    error: voiceError,
  } = useVoiceInput({
    onTranscript: (transcriptText) => {
      setInputText(transcriptText);
    },
  });

  const {
    isSpeaking,
    speakingId,
    isSupported: isSpeechSynthesisSupported,
    speak: speakMessage,
    stop: stopSpeaking,
  } = useSpeechSynthesis();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const streamAbortRef = useRef<{ aborted: boolean }>({ aborted: false });
  const abortControllerRef = useRef<AbortController | null>(null);

  const { name, Icon } = botInfo;
  const roleConfig = BOT_SYSTEM_INSTRUCTIONS[chat.bot] || BOT_SYSTEM_INSTRUCTIONS.gemini;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat.messages, streamingText]);

  const handleModelChange = (model: GeminiModelId) => {
    setSelectedModel(model);
    onUpdateChat({
      ...chat,
      selectedModel: model,
    });
    setShowModelPicker(false);
  };

  const handleStopGeneration = () => {
    streamAbortRef.current.aborted = true;
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsGenerating(false);
    if (streamingText) {
      const partialMsg: ChatMessage = {
        from: 'ai',
        text: streamingText + ' *(stopped)*',
        timestamp: 'Now',
        modelUsed: selectedModel,
      };
      onUpdateChat({
        ...chat,
        messages: [...chat.messages, partialMsg],
      });
      setStreamingText('');
    }
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend ?? inputText).trim();
    if (!query || isGenerating) return;

    setInputText('');
    const userMsg: ChatMessage = { from: 'user', text: query, timestamp: 'Now' };
    const updatedMessages = [...chat.messages, userMsg];

    // Optimistically update title if it's the first user message
    const updatedTitle =
      chat.title === 'New conversation' ? query.slice(0, 36) : chat.title;

    const interimChat: ChatSession = {
      ...chat,
      title: updatedTitle,
      messages: updatedMessages,
      selectedModel,
      time: 'Just now',
    };
    onUpdateChat(interimChat);

    setIsGenerating(true);
    setStreamingText('');
    streamAbortRef.current = { aborted: false };

    // 1. Try streaming from Google Gemini API via server route when online
    if (isOnline) {
      try {
        const controller = new AbortController();
        abortControllerRef.current = controller;

        const result = await streamGeminiChat(
          updatedMessages,
          chat.bot,
          selectedModel,
          (_chunk, fullText) => {
            setStreamingText(fullText);
          },
          controller.signal,
          searchGrounding
        );

        const aiMsg: ChatMessage = {
          from: 'ai',
          text: result.text || streamingText,
          timestamp: 'Now',
          modelUsed: result.modelUsed || selectedModel,
          sources: result.sources,
        };

        onUpdateChat({
          ...interimChat,
          messages: [...updatedMessages, aiMsg],
        });
        setStreamingText('');
        setIsGenerating(false);
        abortControllerRef.current = null;
        return;
      } catch (geminiError: any) {
        if (geminiError.name === 'AbortError') {
          // Stopped intentionally by user
          setIsGenerating(false);
          abortControllerRef.current = null;
          return;
        }
        console.warn('Gemini streaming error, falling back to local engine:', geminiError.message);
      }
    }

    // 2. Offline fallback engine if disconnected or API temporarily unavailable
    const fullResponse = generateOfflineResponse(query, chat.bot, isOnline);

    await streamTokens(
      fullResponse,
      (currentChunk) => {
        setStreamingText(currentChunk);
      },
      () => {
        const aiMsg: ChatMessage = {
          from: 'ai',
          text: fullResponse,
          timestamp: 'Now',
          modelUsed: 'offline-engine',
        };
        onUpdateChat({
          ...interimChat,
          messages: [...updatedMessages, aiMsg],
        });
        setStreamingText('');
        setIsGenerating(false);
        abortControllerRef.current = null;
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

  const currentModelMeta =
    GEMINI_MODELS.find((m) => m.id === selectedModel) || GEMINI_MODELS[0];

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-3 sm:px-4 dark:border-white/[0.06]">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <button
            onClick={() => {
              stopSpeaking();
              onBack();
            }}
            aria-label="Back to conversations"
            className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full text-slate-700 transition active:scale-95 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2.2} />
          </button>

          <div className="flex items-center gap-2 min-w-0">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${TILE}`}>
              <Icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h2 className={`text-[14px] sm:text-[14.5px] font-bold leading-tight truncate ${TEXT}`}>
                  {name}
                </h2>
                <button
                  onClick={() => setShowRoleModal(true)}
                  title="View active role & system instructions"
                  className="rounded-full bg-[#0066FF]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[#0066FF] hover:bg-[#0066FF]/20 dark:bg-[#0066FF]/25 dark:text-[#6AA6FF] flex items-center gap-0.5"
                >
                  <Sparkles className="h-2.5 w-2.5" />
                  <span className="truncate max-w-[90px]">{roleConfig.roleTitle.split(' ')[0]}</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] truncate">
                {isOnline ? (
                  <span className="flex items-center gap-1 font-medium text-[#0066FF] dark:text-[#6AA6FF]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
                    <span>Gemini Multi-Turn</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 font-medium text-amber-600 dark:text-amber-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>Offline Engine</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Toolbar */}
        <div className="relative flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Quick Dataset buttons if applicable */}
          {chat.bot === 'code' && (
            <button
              onClick={() => setShowCourseModal(true)}
              title="Open 441 Computer Course Q&A Library"
              className="flex h-8 items-center gap-1.5 rounded-full bg-[#EAF3FF] px-2 text-[11px] font-bold text-[#0066FF] transition active:scale-95 hover:bg-[#D9EAFE] dark:bg-[#12305C] dark:text-[#6AA6FF]"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">441 Q&A</span>
            </button>
          )}

          {(chat.bot === 'tutor' || chat.bot === 'assistant') && (
            <button
              onClick={() => setShowTutorModal(true)}
              title="Open 520 Revision Q&A Library"
              className="flex h-8 items-center gap-1.5 rounded-full bg-emerald-50 px-2 text-[11px] font-bold text-emerald-700 transition active:scale-95 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-400"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">520 Q&A</span>
            </button>
          )}

          {/* Role details button */}
          <button
            onClick={() => setShowRoleModal(true)}
            aria-label="View Chatbot System Role"
            title="Chatbot Role & System Instructions"
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          >
            <Info className="h-4 w-4" />
          </button>

          {/* Menu Dropdown */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Conversation options"
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          >
            <MoreVertical className="h-4 w-4" />
          </button>

          {showMenu && (
            <div className={`absolute right-0 top-11 z-30 w-52 rounded-2xl p-1.5 ${CARD} ${CARD_SHADOW}`}>
              <button
                onClick={() => {
                  setShowMenu(false);
                  setShowRoleModal(true);
                }}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[12.5px] font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
              >
                <Sparkles className="h-4 w-4 text-[#0066FF]" /> Role & System Prompt
              </button>
              {chat.bot === 'code' && (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCourseModal(true);
                  }}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[12.5px] font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
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
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[12.5px] font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  <GraduationCap className="h-4 w-4 text-emerald-600" /> 520 Revision Library
                </button>
              )}
              <button
                onClick={clearChat}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[12.5px] font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
              >
                <RotateCcw className="h-4 w-4 text-slate-400" /> Clear messages
              </button>
              {onDeleteChat && (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    onDeleteChat(chat.id);
                  }}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[12.5px] font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4" /> Delete conversation
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Task & Model Switcher Subheader Bar */}
      <div className="flex items-center justify-between border-b border-slate-100/80 bg-slate-50/70 px-3 py-1.5 dark:border-white/[0.04] dark:bg-white/[0.02]">
        {/* Fast / General / Complex Task Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
          {TASK_TABS.map(({ id, model, label, badge, icon: TabIcon }) => {
            const isSelected = selectedModel === model;
            return (
              <button
                key={id}
                onClick={() => handleModelChange(model)}
                className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition active:scale-95 shrink-0 ${
                  isSelected
                    ? 'bg-[#0066FF] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:bg-white/10'
                }`}
              >
                <TabIcon className="h-3 w-3" />
                <span>{label}</span>
                <span
                  className={`text-[9.5px] font-medium opacity-80 ${
                    isSelected ? 'text-blue-100' : 'text-slate-400'
                  }`}
                >
                  ({badge})
                </span>
              </button>
            );
          })}
        </div>

        {/* Full Model Selector Trigger & Search Grounding Toggle */}
        <div className="relative shrink-0 pl-1.5 flex items-center gap-1.5">
          {/* Search Grounding toggle */}
          <button
            onClick={() => {
              const next = !searchGrounding;
              setSearchGrounding(next);
              if (next && selectedModel !== 'gemini-3.5-flash') {
                setSelectedModel('gemini-3.5-flash');
              }
              onUpdateChat({
                ...chat,
                searchGroundingEnabled: next,
                selectedModel: next ? 'gemini-3.5-flash' : selectedModel,
              });
            }}
            title={searchGrounding ? "Google Search Grounding active (gemini-3.5-flash)" : "Enable Google Search Grounding"}
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10.5px] font-bold transition shadow-xs ${
              searchGrounding
                ? 'bg-blue-600 text-white ring-1 ring-blue-700'
                : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-[#121E30] dark:text-slate-400 dark:ring-white/10'
            }`}
          >
            <Globe className={`h-3 w-3 ${searchGrounding ? 'text-white' : 'text-slate-400'}`} />
            <span className="hidden sm:inline">Search</span>
          </button>

          <button
            onClick={() => setShowModelPicker(!showModelPicker)}
            className="flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[10.5px] font-bold text-slate-700 shadow-xs ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-[#121E30] dark:text-slate-200 dark:ring-white/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="truncate max-w-[85px]">{currentModelMeta.name.replace('Gemini ', '')}</span>
          </button>

          {showModelPicker && (
            <div className={`absolute right-0 top-8 z-30 w-64 rounded-2xl p-2 ${CARD} ${CARD_SHADOW}`}>
              <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Choose Gemini Model
              </div>
              <div className="space-y-1 mt-1">
                {GEMINI_MODELS.map((m) => {
                  const active = selectedModel === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => handleModelChange(m.id)}
                      className={`flex w-full flex-col rounded-xl px-2.5 py-2 text-left transition ${
                        active
                          ? 'bg-[#0066FF] text-white'
                          : 'hover:bg-slate-50 text-slate-800 dark:text-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[12.5px] font-bold">{m.name}</span>
                        <span
                          className={`rounded-md px-1.5 py-0.5 text-[9.5px] font-semibold ${
                            active
                              ? 'bg-white/20 text-white'
                              : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300'
                          }`}
                        >
                          {m.badge}
                        </span>
                      </div>
                      <span
                        className={`text-[10.5px] leading-tight mt-0.5 ${
                          active ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {m.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="no-scrollbar flex-1 overflow-y-auto px-3 sm:px-4 py-4">
        {chat.messages.length === 0 && !streamingText ? (
          <div className="flex flex-col items-center justify-center pt-4 text-center">
            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${TILE}`}>
              <Icon className="h-7 w-7" strokeWidth={2} />
            </span>
            <h3 className={`mt-3 text-[16px] font-bold ${TEXT}`}>Chat with {name}</h3>

            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#0066FF]/10 px-3 py-1 text-[11.5px] font-medium text-[#0066FF] dark:bg-[#0066FF]/20 dark:text-[#6AA6FF]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Role: {roleConfig.roleTitle}</span>
            </div>

            <p className={`mt-2 max-w-[320px] text-[12.5px] leading-relaxed ${MUTED}`}>
              {chat.bot === 'gemini'
                ? 'Multi-turn intelligent conversations with Google Gemini. Maintains full context, history, and reasoning across every turn.'
                : chat.bot === 'code'
                ? 'Senior Software Engineer persona with complete multi-turn coding help, debugging, and 441 Computer Course Q&As.'
                : chat.bot === 'tutor'
                ? 'Academic educator persona for Science, Physics, Chemistry, HPE & Social Studies with step-by-step guidance.'
                : 'Executive productivity companion for planning, task breakdown, writing, and problem solving.'}
            </p>

            {chat.bot === 'code' && (
              <button
                onClick={() => setShowCourseModal(true)}
                className="mt-3.5 flex items-center gap-2 rounded-2xl bg-[#0066FF] px-4 py-2 text-[12.5px] font-bold text-white shadow-md transition active:scale-95 hover:bg-[#0055D4]"
              >
                <BookOpen className="h-4 w-4" />
                <span>Browse 441 Course Q&A Library</span>
              </button>
            )}

            {(chat.bot === 'tutor' || chat.bot === 'assistant') && (
              <button
                onClick={() => setShowTutorModal(true)}
                className="mt-3.5 flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-[12.5px] font-bold text-white shadow-md transition active:scale-95 hover:bg-emerald-700"
              >
                <GraduationCap className="h-4 w-4" />
                <span>Browse 520 Revision Q&As</span>
              </button>
            )}

            {/* Quick Suggestion Chips */}
            <div className="mt-5 flex w-full flex-col gap-2">
              <span className={`text-left text-[11.5px] font-semibold uppercase tracking-wider ${MUTED}`}>
                Suggested prompts
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

                {/* Web Search Sources Grounding Citations */}
                {m.sources && m.sources.length > 0 && (
                  <div className="mr-auto mt-1.5 flex max-w-[94%] flex-wrap items-center gap-1.5 rounded-xl border border-blue-100 bg-blue-50/50 p-2 text-[11px] dark:border-blue-900/30 dark:bg-blue-950/20">
                    <span className="flex items-center gap-1 font-semibold text-blue-700 dark:text-blue-300">
                      <Globe className="h-3 w-3" /> Grounded with Google Search:
                    </span>
                    {m.sources.map((src, sIdx) => (
                      <a
                        key={sIdx}
                        href={src.uri}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10.5px] font-medium text-slate-700 shadow-2xs hover:text-blue-600 dark:bg-[#15233a] dark:text-slate-200 dark:hover:text-blue-400"
                      >
                        <span className="truncate max-w-[140px]">{src.title}</span>
                        <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                      </a>
                    ))}
                  </div>
                )}

                {m.from === 'ai' && (
                  <div className="mr-auto mt-1 flex items-center gap-2 pl-1 text-[11px] text-slate-400 dark:text-slate-500">
                    {m.modelUsed && (
                      <span className="flex items-center gap-1 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-white/[0.06] dark:text-slate-400">
                        {m.modelUsed.includes('pro') ? (
                          <Brain className="h-2.5 w-2.5 text-purple-500" />
                        ) : m.modelUsed.includes('lite') ? (
                          <Zap className="h-2.5 w-2.5 text-amber-500" />
                        ) : (
                          <Sparkles className="h-2.5 w-2.5 text-[#0066FF]" />
                        )}
                        <span>{m.modelUsed.replace('gemini-', '')}</span>
                      </span>
                    )}

                    <button
                      onClick={() => copyMessage(m.text, idx)}
                      aria-label="Copy response"
                      className="flex items-center gap-1 hover:text-slate-700 dark:hover:text-slate-300 transition"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-500" />
                          <span className="text-emerald-500 font-medium">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    {/* SpeechSynthesis Listen Button */}
                    {isSpeechSynthesisSupported && (
                      <button
                        onClick={() => speakMessage(m.text, m.id || idx)}
                        aria-label={speakingId === (m.id || idx) ? 'Stop reading' : 'Listen to AI response'}
                        title={speakingId === (m.id || idx) ? 'Stop speech' : 'Listen to response read aloud'}
                        className={`flex items-center gap-1 transition ${
                          speakingId === (m.id || idx)
                            ? 'font-semibold text-[#0066FF] dark:text-[#6AA6FF]'
                            : 'hover:text-slate-700 dark:hover:text-slate-300'
                        }`}
                      >
                        {speakingId === (m.id || idx) ? (
                          <>
                            <VolumeX className="h-3 w-3 animate-pulse text-[#0066FF] dark:text-[#6AA6FF]" />
                            <span className="text-[#0066FF] dark:text-[#6AA6FF]">Stop</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="h-3 w-3" />
                            <span>Listen</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
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
                <span className="text-[11.5px] font-medium text-slate-400 ml-1.5">
                  Gemini thinking ({currentModelMeta.badge})...
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Floating Chat Input Bar */}
      <div className="sticky bottom-3 inset-x-0 px-3 pt-1">
        {voiceError && (
          <div className="mb-2 rounded-xl bg-amber-500/90 px-3 py-1.5 text-[11.5px] font-medium text-white shadow-sm backdrop-blur-xs">
            {voiceError}
          </div>
        )}

        <div
          className={`flex h-14 items-center gap-1.5 sm:gap-2 rounded-full py-1.5 pl-3.5 sm:pl-4 pr-1.5 transition-all ${
            isListening
              ? "ring-2 ring-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
              : "focus-within:ring-2 focus-within:ring-[#0066FF]/40"
          } ${CARD} ${CARD_SHADOW}`}
        >
          {chat.bot === 'code' && !isListening && (
            <button
              onClick={() => setShowCourseModal(true)}
              title="Open 441 Course Q&A"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#EAF3FF] hover:text-[#0066FF] dark:bg-white/[0.06] dark:text-slate-300 dark:hover:text-[#6AA6FF]"
            >
              <BookOpen className="h-4 w-4" />
            </button>
          )}

          {isListening && (
            <div className="flex items-center gap-1.5 pl-1 pr-1 shrink-0">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
              </span>
              <span className="text-[11.5px] font-semibold text-red-600 dark:text-red-400">
                Listening...
              </span>
            </div>
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
            placeholder={isListening ? "Dictating your question..." : `Ask ${name} (${currentModelMeta.badge})...`}
            className="flex-1 bg-transparent text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
          />

          {/* Voice Input Button */}
          {isVoiceSupported && !isGenerating && (
            <button
              type="button"
              onClick={toggleListening}
              title={isListening ? "Stop voice dictation" : "Voice Input (Dictate your question)"}
              aria-label={isListening ? "Stop voice dictation" : "Voice Input"}
              className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full transition active:scale-90 ${
                isListening
                  ? "bg-red-500 text-white animate-pulse shadow-md shadow-red-500/30"
                  : "bg-slate-100 text-slate-600 hover:bg-[#EAF3FF] hover:text-[#0066FF] dark:bg-white/[0.08] dark:text-slate-300 dark:hover:text-[#6AA6FF]"
              }`}
            >
              {isListening ? (
                <MicOff className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={2.2} />
              ) : (
                <Mic className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={2.2} />
              )}
            </button>
          )}

          {isGenerating ? (
            <button
              onClick={handleStopGeneration}
              title="Stop generation"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition active:scale-95"
            >
              <Square className="h-4 w-4 fill-white" />
            </button>
          ) : (
            <button
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition disabled:opacity-40"
              style={{
                background: BLUE,
                boxShadow: inputText.trim() ? '0 4px 12px rgba(0, 102, 255, 0.4)' : 'none',
              }}
            >
              <Send className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Role & System Instruction Modal */}
      {showRoleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs">
          <div
            role="dialog"
            aria-modal="true"
            className={`relative flex max-h-[90dvh] w-full max-w-md flex-col overflow-hidden rounded-[26px] p-5 ${CARD} ${CARD_SHADOW}`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${TILE}`}>
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className={`text-[15px] font-bold leading-tight ${TEXT}`}>{name} Persona</h3>
                  <p className="text-[11.5px] text-[#0066FF] dark:text-[#6AA6FF] font-semibold">
                    {roleConfig.roleTitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowRoleModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto no-scrollbar py-3.5 space-y-3.5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  System Instruction Prompt
                </span>
                <div className="mt-1.5 rounded-xl bg-slate-50 p-3 text-[12.5px] leading-relaxed text-slate-700 dark:bg-white/[0.04] dark:text-slate-200 border border-slate-100 dark:border-white/[0.06] font-mono">
                  {roleConfig.systemInstruction}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Gemini Model Capabilities
                </span>
                <div className="mt-1.5 grid grid-cols-1 gap-2">
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 p-2.5 dark:border-white/[0.06]">
                    <Zap className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <p className={`text-[12px] font-bold ${TEXT}`}>gemini-3.1-flash-lite (Fast)</p>
                      <p className={`text-[11px] ${MUTED}`}>For tasks that should happen fast with minimum latency.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 p-2.5 dark:border-white/[0.06]">
                    <Sparkles className="h-4 w-4 text-[#0066FF] mt-0.5 shrink-0" />
                    <div>
                      <p className={`text-[12px] font-bold ${TEXT}`}>gemini-3.5-flash (General)</p>
                      <p className={`text-[11px] ${MUTED}`}>For general everyday tasks, explanations, and summarization.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 p-2.5 dark:border-white/[0.06]">
                    <Brain className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" />
                    <div>
                      <p className={`text-[12px] font-bold ${TEXT}`}>gemini-3.1-pro-preview (Complex)</p>
                      <p className={`text-[11px] ${MUTED}`}>For particularly complex tasks, deep reasoning, and math.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50/80 p-3 text-[11.5px] text-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
                <p className="font-semibold">Multi-Turn History</p>
                <p className="mt-0.5 opacity-90">
                  Conversation history is preserved across all user and model turns, giving the chatbot complete situational context.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-white/[0.06]">
              <button
                onClick={() => setShowRoleModal(false)}
                className="w-full rounded-full bg-[#0066FF] py-2.5 text-[13px] font-bold text-white shadow-xs hover:bg-[#0055D4]"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

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
