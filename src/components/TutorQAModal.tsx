import React, { useState, useMemo } from 'react';
import {
  X,
  Search,
  BookOpen,
  Send,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Globe,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import { TUTOR_ASSISTANT_QA, TUTOR_CATEGORIES, TutorQA } from '../data/tutorAssistantQA';

interface TutorQAModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuestion: (question: TutorQA) => void;
  isOnline: boolean;
  botModeName?: string;
}

const CARD = 'bg-white dark:bg-[#131F33]';
const TEXT = 'text-slate-900 dark:text-slate-50';
const MUTED = 'text-slate-500 dark:text-slate-400';
const TILE = 'bg-[#EAF3FF] text-[#0066FF] dark:bg-[#12305C] dark:text-[#6AA6FF]';

export const TutorQAModal: React.FC<TutorQAModalProps> = ({
  isOpen,
  onClose,
  onSelectQuestion,
  isOnline,
  botModeName = 'Personal Tutor & Assistant',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredList = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return TUTOR_ASSISTANT_QA.filter((item) => {
      // Filter by subject
      if (selectedSubject !== 'all' && item.subject !== selectedSubject) {
        return false;
      }
      // Filter by query
      if (!q) return true;

      // Check number match "q12", "12"
      if (q === `q${item.id}` || q === String(item.id)) return true;

      return (
        item.q.toLowerCase().includes(q) ||
        item.a.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedSubject]);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className={`w-full max-w-4xl h-[92dvh] sm:h-[90vh] max-h-[820px] rounded-[22px] sm:rounded-2xl shadow-2xl flex flex-col border border-slate-200 dark:border-slate-800 ${CARD} overflow-hidden`}
      >
        {/* Header */}
        <div className="p-3.5 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${TILE}`}>
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className={`text-lg sm:text-xl font-bold ${TEXT}`}>
                  520 Revision Q&A Library
                </h2>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                  Offline Ready
                </span>
              </div>
              <p className={`text-xs sm:text-sm ${MUTED}`}>
                Shared offline knowledge base for {botModeName}: Science, Physics, Chemistry, HPE & Social Studies
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 520 questions (e.g. 'photosynthesis', 'gravity', 'pH', 'malaria', 'constitution', 'Q101')..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition text-slate-900 dark:text-slate-100 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Subject Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {TUTOR_CATEGORIES.map((cat) => {
              const active = selectedSubject === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSubject(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#0066FF] text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-slate-100 dark:divide-slate-800/60">
          {filteredList.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6">
              <BookOpen className="w-10 h-10 text-slate-300 dark:text-slate-600 mb-2" />
              <p className={`text-sm font-semibold ${TEXT}`}>No matching questions found</p>
              <p className={`text-xs ${MUTED} mt-1`}>
                Try a different keyword or select "All Subjects (520)"
              </p>
            </div>
          ) : (
            filteredList.map((item) => {
              const isExpanded = expandedId === item.id;
              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  className={`pt-3 first:pt-0 transition rounded-xl ${
                    isExpanded ? 'bg-blue-50/40 dark:bg-blue-950/20 p-3' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex-1 cursor-pointer"
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    >
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#EAF3FF] text-[#0066FF] dark:bg-[#12305C] dark:text-[#6AA6FF]">
                          Q{item.id}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {item.subject}
                        </span>
                        {isOnline && (
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                            <Globe className="w-3 h-3" /> Online Linked
                          </span>
                        )}
                      </div>
                      <h4 className={`text-sm font-semibold ${TEXT} hover:text-[#0066FF] transition`}>
                        {item.q}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleCopy(`Q: ${item.q}\nA: ${item.a}`, item.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                        title="Copy answer"
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => onSelectQuestion(item)}
                        className="px-2.5 py-1.5 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-semibold transition flex items-center gap-1 shadow-sm"
                        title="Ask this question in Chat"
                      >
                        <Send className="w-3 h-3" />
                        <span className="hidden sm:inline">Ask in Chat</span>
                      </button>

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Answer Body */}
                  {isExpanded && (
                    <div className="mt-3 pl-2 border-l-2 border-[#0066FF] space-y-2 text-xs sm:text-sm">
                      <div className={`p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 ${TEXT}`}>
                        <p className="font-medium leading-relaxed">{item.a}</p>
                      </div>

                      {isOnline && (
                        <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                          <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(item.q)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-[#0066FF] underline"
                          >
                            <span>Google</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <a
                            href="https://gemini.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-[#0066FF] underline"
                          >
                            <span>Gemini</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <a
                            href={`https://chatgpt.com/?q=${encodeURIComponent(item.q)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-[#0066FF] underline"
                          >
                            <span>ChatGPT</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0066FF]" />
            <span>
              Showing {filteredList.length} of 520 revision questions
            </span>
          </div>
          <span className="font-medium text-slate-700 dark:text-slate-300">
            Pocket Engine Shared Knowledge
          </span>
        </div>
      </div>
    </div>
  );
};
