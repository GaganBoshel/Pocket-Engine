import React, { useState, useMemo } from 'react';
import {
  X,
  Search,
  BookOpen,
  Send,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Code2,
  Copy,
  Check,
  Globe,
  Terminal,
} from 'lucide-react';
import { COMPUTER_COURSE_QA, COURSE_MODULES, CourseQA } from '../data/computerCourseQA';

interface CourseQAModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuestion: (question: CourseQA) => void;
  isOnline: boolean;
}

const BLUE = '#0066FF';
const CARD = 'bg-white dark:bg-[#131F33]';
const TEXT = 'text-slate-900 dark:text-slate-50';
const MUTED = 'text-slate-500 dark:text-slate-400';
const TILE = 'bg-[#EAF3FF] text-[#0066FF] dark:bg-[#12305C] dark:text-[#6AA6FF]';

export const CourseQAModal: React.FC<CourseQAModalProps> = ({
  isOpen,
  onClose,
  onSelectQuestion,
  isOnline,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredList = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return COMPUTER_COURSE_QA.filter((item) => {
      // Filter by category
      if (selectedModule !== 'all' && item.category !== selectedModule) {
        return false;
      }
      // Filter by query
      if (!q) return true;

      // Check number match "q12", "12"
      if (q === `q${item.id}` || q === String(item.id)) return true;

      return (
        item.q.toLowerCase().includes(q) ||
        item.a.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedModule]);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-2 sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Computer Course Q&A Library"
        className={`relative flex h-[92dvh] sm:h-[92vh] max-h-[760px] w-full max-w-[480px] flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] ${CARD} shadow-2xl border border-slate-100 dark:border-white/10`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-3.5 sm:px-5 py-3 sm:py-4 dark:border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${TILE}`}>
              <BookOpen className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div>
              <h2 className={`text-[16px] font-bold ${TEXT}`}>441 Computer Course Q&A</h2>
              <p className={`text-[11.5px] ${MUTED}`}>
                {isOnline ? 'Online Mode • Docs & AI Links' : 'Offline Mode • Local Code Output'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 pt-3 pb-2">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 441 questions (e.g. Q51, loop, CSS, RAM)..."
              className="h-10 w-full rounded-2xl bg-slate-100/90 pl-9 pr-8 text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] dark:bg-white/[0.06] dark:text-slate-100 dark:placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px] text-slate-600 dark:bg-white/10 dark:text-slate-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categories Carousel */}
        <div className="no-scrollbar flex gap-1.5 overflow-x-auto px-4 py-2 border-b border-slate-100 dark:border-white/[0.06]">
          {COURSE_MODULES.map((mod) => {
            const active = selectedModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setSelectedModule(mod.id)}
                className={`shrink-0 rounded-xl px-2.5 py-1 text-[11.5px] font-medium transition ${
                  active
                    ? 'bg-[#0066FF] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/[0.05] dark:text-slate-300'
                }`}
              >
                {mod.label}
              </button>
            );
          })}
        </div>

        {/* Questions List */}
        <div className="no-scrollbar flex-1 overflow-y-auto px-4 py-3 space-y-2.5">
          <div className="flex items-center justify-between px-1 text-[11.5px] text-slate-400">
            <span>Showing {filteredList.length} of 441 questions</span>
            <span>Tap question to preview or ask</span>
          </div>

          {filteredList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className={`text-[13px] font-semibold ${TEXT}`}>No questions found</p>
              <p className={`mt-1 text-[11.5px] ${MUTED}`}>Try searching by number like "Q10" or "Excel"</p>
            </div>
          ) : (
            filteredList.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all ${
                    isExpanded
                      ? 'border-[#0066FF]/40 bg-[#F5F9FF] dark:bg-[#0E2038] dark:border-[#0066FF]/40'
                      : 'border-slate-100 bg-white hover:border-slate-200 dark:border-white/[0.06] dark:bg-[#15233A]'
                  } p-3`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="flex-1 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-[#0066FF]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#0066FF] dark:bg-[#0066FF]/20 dark:text-[#6AA6FF]">
                          Q{item.id}
                        </span>
                        <span className="text-[10px] font-medium text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      <h4 className={`mt-1 text-[13px] font-bold leading-snug ${TEXT}`}>
                        {item.q}
                      </h4>
                    </button>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => {
                          onSelectQuestion(item);
                          onClose();
                        }}
                        title="Send question to Code Guru chat"
                        className="flex h-7 items-center gap-1 rounded-lg bg-[#0066FF] px-2 text-[11px] font-bold text-white transition active:scale-95"
                      >
                        <Send className="h-3 w-3" />
                        <span>Ask</span>
                      </button>
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10"
                      >
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detail Preview */}
                  {isExpanded && (
                    <div className="mt-3 border-t border-slate-200/70 pt-3 dark:border-white/10 space-y-2.5">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Answer
                        </span>
                        <p className={`mt-0.5 text-[12.5px] leading-relaxed font-medium ${TEXT}`}>
                          {item.a}
                        </p>
                      </div>

                      {/* Code Snippet if available */}
                      {item.code && (
                        <div className="rounded-xl bg-slate-900 p-2.5 text-slate-100 font-mono text-[11.5px]">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-700/60 text-[10.5px] text-slate-400">
                            <span className="flex items-center gap-1">
                              <Code2 className="h-3 w-3 text-[#6AA6FF]" /> Code Implementation
                            </span>
                            <button
                              onClick={() => handleCopy(item.code || '', item.id)}
                              className="flex items-center gap-1 text-[10px] text-slate-300 hover:text-white"
                            >
                              {copiedId === item.id ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                              <span>{copiedId === item.id ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                          <pre className="mt-1.5 overflow-x-auto whitespace-pre">{item.code}</pre>
                        </div>
                      )}

                      {/* Online Mode Links */}
                      {isOnline && item.links && item.links.length > 0 && (
                        <div className="pt-1">
                          <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#0066FF] dark:text-[#6AA6FF]">
                            <Globe className="h-3 w-3" /> Online Reference & AI
                          </span>
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {item.links.map((link, lidx) => (
                              <a
                                key={lidx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 rounded-lg bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-xs border border-slate-200 hover:text-[#0066FF] dark:bg-[#1A2C49] dark:border-white/10 dark:text-slate-200 dark:hover:text-[#6AA6FF]"
                              >
                                <span>{link.title}</span>
                                <ExternalLink className="h-2.5 w-2.5" />
                              </a>
                            ))}
                            <a
                              href={`https://www.google.com/search?q=${encodeURIComponent(item.q)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 rounded-lg bg-blue-50 px-2 py-1 text-[11px] font-medium text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300"
                            >
                              <span>Google Search</span>
                              <ExternalLink className="h-2.5 w-2.5" />
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Offline Mode Output indicator */}
                      {!isOnline && (
                        <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/[0.05] dark:text-slate-300">
                          <Terminal className="h-3 w-3 text-[#0066FF]" />
                          <span>Offline Execution: Ask Code Guru to generate code & trace output locally.</span>
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
        <div className="border-t border-slate-100 px-4 py-3 dark:border-white/[0.06] flex items-center justify-between text-[11.5px] text-slate-500">
          <span>Total 441 exam-friendly questions</span>
          <button
            onClick={onClose}
            className="rounded-xl px-3 py-1.5 font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
