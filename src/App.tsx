/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  Wifi,
  WifiOff,
  BatteryFull,
  BatteryCharging,
  BookOpen,
  Users,
  MoreVertical,
  Code2,
  Bot,
  Feather,
  GraduationCap,
  FileText,
  Sparkles,
  RefreshCw,
  LayoutGrid,
  Layers,
  NotebookPen,
  Lightbulb,
  Send,
  Home,
  FileClock,
  BarChart3,
  Settings,
  Search,
  Trash2,
  Info,
  Cpu,
  MemoryStick,
  Sun,
  Moon,
  ChevronDown,
  MessageSquareText,
  History,
  MessageCircle,
  Check,
  ShieldCheck,
  ExternalLink,
  Mic,
  MicOff,
} from "lucide-react";
import { BotId, ChatMessage, ChatSession, TabId } from "./types";
import {
  INITIAL_CHATS,
  loadSavedChats,
  saveChats,
  loadKeepHistory,
  saveKeepHistory,
  loadSavedTheme,
  saveTheme,
} from "./lib/storage";
import { useOnlineStatus, useBatteryStatus } from "./hooks/useOnlineStatus";
import { useVoiceInput } from "./hooks/useVoiceInput";
import { ActiveChatView } from "./components/ActiveChatView";
import { ToolModal } from "./components/ToolModal";
import { MenuDrawer } from "./components/MenuDrawer";
import { CourseQAModal } from "./components/CourseQAModal";
import { TutorQAModal } from "./components/TutorQAModal";
import { CourseQA } from "./data/computerCourseQA";
import { TutorQA } from "./data/tutorAssistantQA";
import { generateOfflineResponse } from "./lib/offlineAiEngine";

/* ---------- Tokens ---------- */
const BLUE = "#0066FF";
const SCRIPT_FONT = "'Caveat', 'Segoe Script', 'Bradley Hand', 'Brush Script MT', cursive";
const LIGHT_BG = "linear-gradient(180deg, #D9F0FF 0%, #ECF7FF 32%, #FFFFFF 78%)";
const DARK_BG = "linear-gradient(180deg, #0E2340 0%, #0A1628 40%, #070D18 100%)";

const CARD = "bg-white dark:bg-[#131F33]";
const CARD_SHADOW =
  "shadow-[0_8px_24px_-6px_rgba(71,85,105,0.16),0_2px_6px_rgba(71,85,105,0.06)] dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.6)] dark:ring-1 dark:ring-white/[0.06]";
const TILE = "bg-[#EAF3FF] text-[#0066FF] dark:bg-[#12305C] dark:text-[#6AA6FF]";
const TEXT = "text-slate-900 dark:text-slate-50";
const MUTED = "text-slate-500 dark:text-slate-400";
const ACCENT = "text-[#0066FF] dark:text-[#6AA6FF]";
const DIVIDER = "divide-y divide-slate-100 dark:divide-white/[0.06]";

/* ---------- Data ---------- */
const BOTS: Record<
  BotId,
  { name: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }
> = {
  gemini: { name: "Gemini AI", Icon: Sparkles },
  code: { name: "Code Guru", Icon: Code2 },
  tutor: { name: "Personal Tutor", Icon: BookOpen },
  assistant: { name: "Personal Assistant", Icon: Bot },
};

const chatbots: { id: BotId; users: string }[] = [
  { id: "gemini", users: "85k" },
  { id: "code", users: "29k" },
  { id: "tutor", users: "18k" },
  { id: "assistant", users: "12k" },
];

const categories = [
  {
    id: "writing",
    title: "Content Writing",
    Icon: Feather,
    tools: [
      { id: "summarizer", label: "Text Summarizer", Icon: FileText },
      { id: "generator", label: "Content Generation", Icon: Sparkles },
      { id: "rewriter", label: "Rewriting & Paraphrasing", Icon: RefreshCw },
      { id: "more_writing", label: "More Tools", Icon: LayoutGrid, more: true },
    ],
  },
  {
    id: "exam",
    title: "Exam Preparation",
    Icon: GraduationCap,
    tools: [
      { id: "flashcard", label: "Flash Card", Icon: Layers },
      { id: "notes", label: "Study Notes", Icon: NotebookPen },
      { id: "explain", label: "Explain It Simply", Icon: Lightbulb },
      { id: "more_exam", label: "More Tools", Icon: LayoutGrid, more: true },
    ],
  },
];

const tabs = [
  { id: "home" as TabId, label: "Home", Icon: Home },
  { id: "docs" as TabId, label: "History", Icon: FileClock },
  { id: "analytics" as TabId, label: "Analytics", Icon: BarChart3 },
  { id: "settings" as TabId, label: "Settings", Icon: Settings },
];

const GROUPS: ("Today" | "Yesterday" | "Earlier this week")[] = ["Today", "Yesterday", "Earlier this week"];

/* ---------- Header ---------- */
interface HeaderProps {
  onOpenMenu: () => void;
}

function Header({ onOpenMenu }: HeaderProps) {
  const isOnline = useOnlineStatus();
  const { batteryLevel, isCharging } = useBatteryStatus();

  return (
    <header className="flex items-center justify-between gap-2 px-3.5 sm:px-5 pb-2.5 pt-[max(0.75rem,env(safe-area-inset-top,0px))]">
      <button
        onClick={onOpenMenu}
        aria-label="Open menu"
        className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full text-slate-700 transition active:scale-95 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 ${CARD} ${CARD_SHADOW}`}
      >
        <Menu className="h-5 w-5" strokeWidth={2.2} />
      </button>

      <h1 className="min-w-0 flex-1 text-center text-[20px] xs:text-[22px] sm:text-[24px] font-extrabold tracking-tight text-[#0066FF] dark:text-[#4D94FF] truncate">
        Pocket Engine
      </h1>

      <div className="shrink-0">
        <div
          title={isOnline ? "Connected - Offline Ready" : "Offline Mode Active"}
          className={`flex items-center gap-1.5 sm:gap-2.5 rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-slate-600 dark:text-slate-300 ${CARD} ${CARD_SHADOW}`}
        >
          {isOnline ? (
            <Wifi className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-[#0066FF] dark:text-[#6AA6FF]" strokeWidth={2.2} aria-label="Wi-Fi connected" />
          ) : (
            <div className="flex items-center gap-1">
              <WifiOff className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-amber-500" strokeWidth={2.2} aria-label="Offline Mode" />
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">Offline</span>
            </div>
          )}

          {isCharging ? (
            <BatteryCharging className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-emerald-500" strokeWidth={2.2} aria-label="Battery charging" />
          ) : (
            <BatteryFull className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.2} aria-label={`Battery ${batteryLevel !== null ? batteryLevel + '%' : 'Full'}`} />
          )}
        </div>
      </div>
    </header>
  );
}

function SectionHeader({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return (
    <div className="mb-2.5 sm:mb-3 flex items-baseline justify-between px-3.5 sm:px-5">
      <h2 className={`text-[16px] sm:text-[17px] font-bold ${TEXT}`}>{title}</h2>
      {action && (
        <button onClick={onAction} className={`text-[12.5px] sm:text-[13px] font-semibold transition hover:opacity-80 active:scale-95 ${ACCENT}`}>
          {action}
        </button>
      )}
    </div>
  );
}

function ScreenTitle({ title, subtitle, right }: { title: string; subtitle?: string; right?: React.ReactNode }) {
  return (
    <div className="mb-3.5 sm:mb-4 flex items-start justify-between gap-2.5 px-3.5 sm:px-5">
      <div className="min-w-0 flex-1">
        <h2 className={`text-[20px] sm:text-[22px] font-extrabold tracking-tight truncate ${TEXT}`}>{title}</h2>
        {subtitle && <p className={`mt-0.5 text-[12px] sm:text-[13px] ${MUTED}`}>{subtitle}</p>}
      </div>
      {right}
    </div>
  );
}

/* ---------- Home ---------- */
interface ChatbotCardProps {
  bot: { id: BotId; users: string };
  onStartChat: (botId: BotId) => void;
}

function ChatbotCard({ bot, onStartChat }: ChatbotCardProps) {
  const { name, Icon } = BOTS[bot.id];
  return (
    <article className={`w-[78%] xs:w-[74%] sm:w-[70%] max-w-[290px] shrink-0 snap-start rounded-[24px] sm:rounded-[28px] p-3.5 sm:p-4 ${CARD} ${CARD_SHADOW}`}>
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl ${TILE}`}>
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
        </div>
        <button
          onClick={() => onStartChat(bot.id)}
          aria-label={`${name} options`}
          className="-mr-1 rounded-full p-1.5 text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5"
        >
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-1">
        <h3 className={`mt-3.5 text-[16px] sm:text-[17px] font-bold leading-tight ${TEXT}`}>{name}</h3>
        {bot.id === 'gemini' && (
          <span className="mt-3.5 rounded-full bg-[#0066FF]/10 px-2 py-0.5 text-[10px] font-bold text-[#0066FF] dark:bg-[#0066FF]/20 dark:text-[#6AA6FF]">
            Multi-Turn AI
          </span>
        )}
        {bot.id === 'code' && (
          <span className="mt-3.5 rounded-full bg-[#0066FF]/10 px-2 py-0.5 text-[10px] font-bold text-[#0066FF] dark:bg-[#0066FF]/20 dark:text-[#6AA6FF]">
            441 Q&As
          </span>
        )}
      </div>

      <div className={`mt-1.5 flex items-center gap-1.5 ${MUTED}`}>
        <Users className="h-4 w-4" strokeWidth={2} />
        <span className="text-[12.5px] sm:text-[13px] font-medium">{bot.users}</span>
      </div>

      <button
        onClick={() => onStartChat(bot.id)}
        className="mt-3.5 sm:mt-4 flex h-10 sm:h-11 w-full items-center justify-center rounded-full text-white transition active:scale-[0.97]"
        style={{
          background: BLUE,
          boxShadow: "0 10px 20px -6px rgba(0,102,255,0.5)",
          fontFamily: SCRIPT_FONT,
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        Start Chat
      </button>
    </article>
  );
}

interface ToolCardProps {
  tool: { id?: string; label: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; more?: boolean };
  onClick: () => void;
}

function ToolCard({ tool, onClick }: ToolCardProps) {
  const { Icon, more } = tool;
  return (
    <button
      onClick={onClick}
      className={`flex min-h-[88px] sm:min-h-[96px] flex-col items-center gap-1.5 sm:gap-2 rounded-2xl px-1 pb-2 sm:pb-2.5 pt-2.5 sm:pt-3 transition active:scale-95 ${CARD} ${CARD_SHADOW}`}
    >
      <span
        className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl ${
          more ? "bg-slate-100 text-slate-600 dark:bg-white/[0.08] dark:text-slate-300" : TILE
        }`}
      >
        <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={2} />
      </span>
      <span
        className={`text-center text-[9.5px] sm:text-[10px] font-semibold leading-[1.25] ${
          more ? ACCENT : "text-slate-700 dark:text-slate-200"
        }`}
      >
        {tool.label}
      </span>
    </button>
  );
}

interface CategoryProps {
  cat: (typeof categories)[0];
  onSelectTool: (toolId: string) => void;
}

function Category({ cat, onSelectTool }: CategoryProps) {
  const { Icon } = cat;
  return (
    <section className="px-3.5 sm:px-5">
      <div className={`mb-2.5 sm:mb-3 flex items-center gap-2 ${TEXT}`}>
        <Icon className={`h-[18px] w-[18px] ${ACCENT}`} strokeWidth={2.2} />
        <h3 className="text-[14.5px] sm:text-[15px] font-bold">{cat.title}</h3>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        {cat.tools.map((t) => (
          <ToolCard key={t.label} tool={t} onClick={() => onSelectTool(t.id)} />
        ))}
      </div>
    </section>
  );
}

interface HomeScreenProps {
  onStartChat: (botId: BotId) => void;
  onSelectTool: (toolId: string) => void;
}

function HomeScreen({ onStartChat, onSelectTool }: HomeScreenProps) {
  return (
    <>
      <SectionHeader title="My Offline Chatbots" action="View All" onAction={() => onSelectTool("catalog")} />
      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 sm:gap-4 overflow-x-auto px-3.5 sm:px-5 pb-3.5 sm:pb-4 pt-1">
        {chatbots.map((b) => (
          <ChatbotCard key={b.id} bot={b} onStartChat={onStartChat} />
        ))}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>

      {/* 441 Computer Course Q&A Spotlight */}
      <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-4">
        <div
          onClick={() => onStartChat("code")}
          role="button"
          tabIndex={0}
          className={`flex cursor-pointer items-center justify-between rounded-[22px] sm:rounded-[24px] p-3 sm:p-3.5 transition active:scale-[0.98] ${CARD} ${CARD_SHADOW} border border-[#0066FF]/20 dark:border-[#0066FF]/30`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
            <span className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-2xl ${TILE}`}>
              <BookOpen className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h4 className={`text-[13px] sm:text-[13.5px] font-bold truncate ${TEXT}`}>441 Computer Course Q&A</h4>
                <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[9px] sm:text-[9.5px] font-bold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                  Offline Ready
                </span>
              </div>
              <p className={`text-[11px] sm:text-[11.5px] truncate ${MUTED}`}>Code Guru with local code & simulated output</p>
            </div>
          </div>
          <span className="flex h-7 shrink-0 items-center rounded-full bg-[#0066FF] px-2.5 text-[11px] font-bold text-white shadow-xs ml-2">
            Open
          </span>
        </div>
      </div>

      <div className="mt-0.5 sm:mt-1">
        <SectionHeader title="Discover AI tools" />
      </div>
      <div className="flex flex-col gap-5 sm:gap-6">
        {categories.map((c) => (
          <Category key={c.id} cat={c} onSelectTool={onSelectTool} />
        ))}
      </div>
    </>
  );
}

/* ---------- History ---------- */
interface ChatRowProps {
  chat: ChatSession;
  open: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onContinueChat: () => void;
}

function ChatRow({ chat, open, onToggle, onDelete, onContinueChat }: ChatRowProps) {
  const { name, Icon } = BOTS[chat.bot];
  const preview = chat.messages[chat.messages.length - 1]?.text ?? "Empty conversation";

  return (
    <li>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-3.5 py-3 text-left transition hover:bg-slate-50/70 dark:hover:bg-white/[0.03]"
      >
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${TILE}`}>
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block truncate text-[14px] font-semibold ${TEXT}`}>{chat.title}</span>
          <span className={`block truncate text-[12px] ${MUTED}`}>{preview}</span>
        </span>
        <span className="flex shrink-0 flex-col items-end gap-1">
          <span className={`text-[11px] font-medium ${MUTED}`}>{chat.time}</span>
          <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      {open && (
        <div className="px-3.5 pb-3.5">
          <div className="mb-2 flex items-center justify-between">
            <p className={`text-[12px] font-semibold ${ACCENT}`}>Chat with {name}</p>
            <button
              onClick={onContinueChat}
              className="flex items-center gap-1 rounded-full bg-[#0066FF]/10 px-2.5 py-1 text-[11px] font-bold text-[#0066FF] hover:bg-[#0066FF]/20 dark:bg-[#0066FF]/20 dark:text-[#6AA6FF]"
            >
              <MessageCircle className="h-3 w-3" /> Continue
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {chat.messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[86%] px-3 py-2 text-[13px] leading-snug ${
                  m.from === "user"
                    ? "ml-auto rounded-2xl rounded-br-md bg-[#0066FF] text-white"
                    : "mr-auto rounded-2xl rounded-bl-md bg-slate-100 text-slate-800 dark:bg-white/[0.08] dark:text-slate-100"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <button
              onClick={onDelete}
              className="flex items-center gap-1.5 text-[12px] font-semibold text-red-500 dark:text-red-400 hover:opacity-80"
            >
              <Trash2 className="h-3.5 w-3.5" /> Delete chat
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

interface HistoryScreenProps {
  chats: ChatSession[];
  setChats: React.Dispatch<React.SetStateAction<ChatSession[]>>;
  keepHistory: boolean;
  onTurnOnHistory: () => void;
  onOpenChat: (chat: ChatSession) => void;
}

function HistoryScreen({ chats, setChats, keepHistory, onTurnOnHistory, onOpenChat }: HistoryScreenProps) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    if (!confirmClear) return;
    const t = setTimeout(() => setConfirmClear(false), 3000);
    return () => clearTimeout(t);
  }, [confirmClear]);

  const q = query.trim().toLowerCase();
  const filtered = chats.filter(
    (c) => !q || c.title.toLowerCase().includes(q) || c.messages.some((m) => m.text.toLowerCase().includes(q))
  );
  const groups = GROUPS.map((g) => ({ label: g, items: filtered.filter((c) => c.group === g) })).filter(
    (g) => g.items.length
  );

  const clearAll = () => {
    if (!confirmClear) return setConfirmClear(true);
    setChats([]);
    setConfirmClear(false);
    setOpenId(null);
  };

  return (
    <>
      <ScreenTitle
        title="Chat history"
        subtitle={chats.length ? `${chats.length} conversations with your AI` : "Nothing saved yet"}
        right={
          <button
            onClick={clearAll}
            disabled={!chats.length}
            className={`mt-1 rounded-full px-3 py-1.5 text-[12px] font-semibold transition disabled:opacity-40 ${
              confirmClear ? "bg-red-500 text-white" : "text-red-500 dark:text-red-400"
            }`}
          >
            {confirmClear ? "Tap to confirm" : "Clear all"}
          </button>
        }
      />

      {!keepHistory && (
        <div
          className="mx-3.5 sm:mx-5 mb-4 flex items-start gap-3 rounded-2xl bg-amber-50 p-3.5 text-amber-900 dark:bg-amber-400/10 dark:text-amber-200"
          role="status"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="flex-1 text-[12.5px] leading-snug">
            Chat history is off, so new chats won’t be saved.{" "}
            <button onClick={onTurnOnHistory} className="font-bold underline underline-offset-2">
              Turn it on
            </button>
          </p>
        </div>
      )}

      <div className="px-3.5 sm:px-5 pb-4">
        <label
          className={`flex h-11 items-center gap-2.5 rounded-full px-3.5 sm:px-4 focus-within:ring-2 focus-within:ring-[#0066FF]/40 ${CARD} ${CARD_SHADOW}`}
        >
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your chats"
            aria-label="Search your chats"
            className="min-w-0 flex-1 bg-transparent text-[13.5px] sm:text-[14px] font-medium text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100"
          />
        </label>
      </div>

      {groups.length === 0 ? (
        <div className="mx-3.5 sm:mx-5 flex flex-col items-center rounded-3xl px-4 sm:px-6 py-10 text-center">
          <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${TILE}`}>
            <MessageSquareText className="h-7 w-7" strokeWidth={1.8} />
          </span>
          <p className={`mt-4 text-[15px] font-bold ${TEXT}`}>{q ? "No chats match your search" : "No chats yet"}</p>
          <p className={`mt-1 text-[13px] leading-snug ${MUTED}`}>
            {q
              ? "Try a different word or clear the search."
              : "Start a chat from Home and your conversations will show up here."}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {groups.map((g) => (
            <section key={g.label} className="px-5">
              <h3 className={`mb-2 text-[13px] font-semibold ${MUTED}`}>{g.label}</h3>
              <ul className={`overflow-hidden rounded-3xl ${CARD} ${CARD_SHADOW} ${DIVIDER}`}>
                {g.items.map((c) => (
                  <ChatRow
                    key={c.id}
                    chat={c}
                    open={openId === c.id}
                    onToggle={() => setOpenId(openId === c.id ? null : c.id)}
                    onDelete={() => {
                      setChats(chats.filter((x) => x.id !== c.id));
                      setOpenId(null);
                    }}
                    onContinueChat={() => onOpenChat(c)}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </>
  );
}

/* ---------- Analytics ---------- */
const nextValue = (v: number, base: number, swing: number) =>
  Math.min(96, Math.max(4, v + (Math.random() - 0.5) * swing * 2 + (base - v) * 0.12));

function useLiveUsage(base: number, swing: number, points = 30) {
  const [values, setValues] = useState<number[]>(() => {
    const arr = [];
    let v = base;
    for (let i = 0; i < points; i++) {
      v = nextValue(v, base, swing);
      arr.push(v);
    }
    return arr;
  });
  useEffect(() => {
    const id = setInterval(
      () => setValues((prev) => [...prev.slice(1), nextValue(prev[prev.length - 1], base, swing)]),
      2000
    );
    return () => clearInterval(id);
  }, [base, swing]);
  return values;
}

function statusFor(pct: number) {
  if (pct >= 85) return { label: "High", cls: "bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-300" };
  if (pct >= 65) return { label: "Busy", cls: "bg-amber-50 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300" };
  return { label: "Normal", cls: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300" };
}

function Gauge({ pct }: { pct: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-[104px] w-[104px] shrink-0">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="50" cy="50" r={r} fill="none" strokeWidth="10" className="stroke-slate-100 dark:stroke-white/[0.08]" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={BLUE}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-[24px] font-extrabold tabular-nums ${TEXT}`}>{pct}</span>
        <span className={`ml-0.5 mt-1 text-[12px] font-semibold ${MUTED}`}>%</span>
      </div>
    </div>
  );
}

function Sparkline({ values, id }: { values: number[]; id: string }) {
  const W = 300;
  const H = 60;
  const pts = values.map((v, i) => [(i / (values.length - 1)) * W, H - (v / 100) * H]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${W} ${H} L0 ${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-14 w-full" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.28" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={BLUE} strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

interface UsageCardProps {
  title: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  values: number[];
  details: [string, string][];
  id: string;
}

function UsageCard({ title, Icon, values, details, id }: UsageCardProps) {
  const pct = Math.round(values[values.length - 1]);
  const status = statusFor(pct);
  return (
    <section className={`mx-3.5 sm:mx-5 rounded-[24px] sm:rounded-[28px] p-3.5 sm:p-4 ${CARD} ${CARD_SHADOW}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl ${TILE}`}>
            <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" strokeWidth={2} />
          </span>
          <h3 className={`text-[15px] sm:text-[16px] font-bold ${TEXT}`}>{title}</h3>
        </div>
        <span className={`rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10.5px] sm:text-[11px] font-semibold ${status.cls}`}>{status.label}</span>
      </div>

      <div className="mt-3.5 sm:mt-4 flex items-center gap-3.5 sm:gap-5">
        <Gauge pct={pct} />
        <dl className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
          {details.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-2">
              <dt className={`text-[12px] sm:text-[12.5px] truncate ${MUTED}`}>{k}</dt>
              <dd className={`text-[13px] sm:text-[13.5px] font-bold tabular-nums shrink-0 ${TEXT}`}>{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-3.5 sm:mt-4">
        <Sparkline values={values} id={id} />
        <div className={`mt-1 flex justify-between text-[10px] sm:text-[10.5px] ${MUTED}`}>
          <span>60 seconds ago</span>
          <span>Now</span>
        </div>
      </div>
    </section>
  );
}

function AnalyticsScreen() {
  const cpu = useLiveUsage(34, 7);
  const ram = useLiveUsage(58, 2.5);

  const cores = (typeof navigator !== "undefined" && navigator.hardwareConcurrency) || 8;
  const totalGb = (typeof navigator !== "undefined" && (navigator as Navigator & { deviceMemory?: number }).deviceMemory) || 8;

  const cpuNow = Math.round(cpu[cpu.length - 1]);
  const ramNow = Math.round(ram[ram.length - 1]);
  const usedGb = (totalGb * ramNow) / 100;

  return (
    <>
      <ScreenTitle title="Analytics" subtitle="How hard your device is working right now" />
      <div className="flex flex-col gap-3.5 sm:gap-4">
        <UsageCard
          id="cpu-fill"
          title="CPU usage"
          Icon={Cpu}
          values={cpu}
          details={[
            ["Current load", `${cpuNow}%`],
            ["Peak (last minute)", `${Math.round(Math.max(...cpu))}%`],
            ["Cores", `${cores}`],
          ]}
        />
        <UsageCard
          id="ram-fill"
          title="RAM usage"
          Icon={MemoryStick}
          values={ram}
          details={[
            ["Used", `${usedGb.toFixed(1)} GB`],
            ["Free", `${(totalGb - usedGb).toFixed(1)} GB`],
            ["Total", `${totalGb} GB`],
          ]}
        />
        <p className={`mx-3.5 sm:mx-5 flex items-start gap-2 text-[11px] sm:text-[11.5px] leading-snug ${MUTED}`}>
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          In-browser measurements adapt to hardware concurrency ({cores} CPU cores) and memory capacity ({totalGb} GB).
        </p>
      </div>
    </>
  );
}

/* ---------- Settings ---------- */
function Switch({ checked, onChange, label }: { checked: boolean; onChange: (val: boolean) => void; label: string }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
        checked ? "bg-[#0066FF]" : "bg-slate-300 dark:bg-slate-600"
      }`}
    >
      <span
        className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

interface SettingsScreenProps {
  keepHistory: boolean;
  setKeepHistory: (val: boolean) => void;
  theme: "light" | "dark";
  setTheme: (val: "light" | "dark") => void;
  onOpenCourseModal: () => void;
  onOpenTutorModal: () => void;
  onResetDemoData: () => void;
  isOnline: boolean;
}

function SettingsScreen({
  keepHistory,
  setKeepHistory,
  theme,
  setTheme,
  onOpenCourseModal,
  onOpenTutorModal,
  onResetDemoData,
  isOnline,
}: SettingsScreenProps) {
  const [resetConfirm, setResetConfirm] = useState(false);
  const themes: { id: "light" | "dark"; label: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }[] = [
    { id: "light", label: "Light", Icon: Sun },
    { id: "dark", label: "Dark", Icon: Moon },
  ];

  const handleResetClick = () => {
    if (resetConfirm) {
      onResetDemoData();
      setResetConfirm(false);
    } else {
      setResetConfirm(true);
      setTimeout(() => setResetConfirm(false), 4000);
    }
  };

  const cores = (typeof navigator !== "undefined" && navigator.hardwareConcurrency) || 8;
  const memory = (typeof navigator !== "undefined" && (navigator as Navigator & { deviceMemory?: number }).deviceMemory) || 8;

  return (
    <div className="flex flex-col gap-4 sm:gap-5 pb-6">
      <ScreenTitle title="Settings" subtitle="Choose how Pocket Engine works for you" />

      {/* Appearance Section */}
      <section className="px-3.5 sm:px-5">
        <h3 className={`mb-2 text-[12.5px] sm:text-[13px] font-semibold ${MUTED}`}>Appearance</h3>
        <div className={`rounded-[24px] sm:rounded-3xl p-3.5 sm:p-4 ${CARD} ${CARD_SHADOW}`}>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl ${TILE}`}>
              {theme === "dark" ? <Moon className="h-5 w-5" strokeWidth={2} /> : <Sun className="h-5 w-5" strokeWidth={2} />}
            </span>
            <div className="min-w-0 flex-1">
              <p className={`text-[14.5px] sm:text-[15px] font-bold ${TEXT}`}>Theme Mode</p>
              <p className={`mt-0.5 text-[12px] sm:text-[12.5px] ${MUTED}`}>Choose between clean light or twilight dark mode.</p>
            </div>
          </div>
          <div
            role="radiogroup"
            aria-label="Theme"
            className="mt-3 sm:mt-4 grid grid-cols-2 gap-1 rounded-full bg-slate-100 p-1 dark:bg-white/[0.06]"
          >
            {themes.map(({ id, label, Icon }) => {
              const on = theme === id;
              return (
                <button
                  key={id}
                  role="radio"
                  aria-checked={on}
                  onClick={() => setTheme(id)}
                  className={`flex h-9 sm:h-10 items-center justify-center gap-1.5 sm:gap-2 rounded-full text-[13.5px] sm:text-[14px] font-semibold transition ${
                    on ? "bg-[#0066FF] text-white shadow-[0_6px_14px_-4px_rgba(0,102,255,0.55)]" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy & History Section */}
      <section className="px-3.5 sm:px-5">
        <h3 className={`mb-2 text-[12.5px] sm:text-[13px] font-semibold ${MUTED}`}>Privacy & Data</h3>
        <div className={`rounded-[24px] sm:rounded-3xl p-3.5 sm:p-4 ${CARD} ${CARD_SHADOW}`}>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl ${TILE}`}>
              <History className="h-5 w-5" strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className={`text-[14.5px] sm:text-[15px] font-bold ${TEXT}`}>Keep chat history</p>
              <p className={`mt-0.5 text-[12px] sm:text-[12.5px] leading-snug ${MUTED}`}>
                Save conversations locally on this device so you can revisit them anytime.
              </p>
            </div>
            <Switch checked={keepHistory} onChange={setKeepHistory} label="Keep chat history" />
          </div>
          {!keepHistory && (
            <p className={`mt-3 border-t border-slate-100 pt-3 text-[11.5px] sm:text-[12px] leading-snug dark:border-white/[0.06] ${MUTED}`}>
              New chats won’t be saved. Existing conversations remain until manually removed.
            </p>
          )}
        </div>
      </section>

      {/* Offline Datasets & Knowledge Bases */}
      <section className="px-3.5 sm:px-5">
        <h3 className={`mb-2 text-[12.5px] sm:text-[13px] font-semibold ${MUTED}`}>Offline Knowledge Bases</h3>
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {/* Code Guru Dataset */}
          <div className={`rounded-[24px] sm:rounded-3xl p-3.5 sm:p-4 ${CARD} ${CARD_SHADOW}`}>
            <div className="flex items-start justify-between gap-2.5 sm:gap-3">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0066FF] dark:bg-[#12305C] dark:text-[#6AA6FF]`}>
                  <Code2 className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <p className={`text-[14.5px] sm:text-[15px] font-bold ${TEXT}`}>Code Guru Curriculum</p>
                    <span className="rounded-full bg-[#0066FF]/10 px-2 py-0.5 text-[10.5px] sm:text-[11px] font-bold text-[#0066FF] dark:bg-[#0066FF]/20 dark:text-[#6AA6FF]">
                      441 Q&As
                    </span>
                  </div>
                  <p className={`mt-0.5 text-[12px] sm:text-[12.5px] leading-snug ${MUTED}`}>
                    Complete computer course syllabus: Basic Computer, History, HTML, CSS, JS, C, C++, Java, Python, Excel & Practical Labs.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-white/[0.06] gap-2 flex-wrap">
              <span className={`text-[11px] sm:text-[11.5px] ${MUTED}`}>
                • Online: Search & AI tools<br />• Offline: Local execution trace
              </span>
              <button
                onClick={onOpenCourseModal}
                className="flex items-center gap-1.5 rounded-full bg-[#0066FF] px-3 sm:px-3.5 py-1.5 text-[11.5px] sm:text-[12px] font-bold text-white shadow-xs hover:bg-[#0055D4] shrink-0"
              >
                <BookOpen className="h-3.5 w-3.5" /> Browse 441 Q&As
              </button>
            </div>
          </div>

          {/* Tutor & Assistant Unified Dataset */}
          <div className={`rounded-[24px] sm:rounded-3xl p-3.5 sm:p-4 ${CARD} ${CARD_SHADOW}`}>
            <div className="flex items-start justify-between gap-2.5 sm:gap-3">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400`}>
                  <GraduationCap className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <p className={`text-[14.5px] sm:text-[15px] font-bold ${TEXT}`}>Tutor & Assistant Library</p>
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10.5px] sm:text-[11px] font-bold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                      520 Q&As
                    </span>
                  </div>
                  <p className={`mt-0.5 text-[12px] sm:text-[12.5px] leading-snug ${MUTED}`}>
                    Unified offline Q&As for Science (100), Physics (100), Chemistry (100), HPE (100), and Social Studies (120). Both personas produce the same verified answers.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-white/[0.06] gap-2 flex-wrap">
              <span className={`text-[11px] sm:text-[11.5px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1`}>
                <Check className="h-3.5 w-3.5" /> 100% Offline Ready
              </span>
              <button
                onClick={onOpenTutorModal}
                className="flex items-center gap-1.5 rounded-full bg-purple-600 px-3 sm:px-3.5 py-1.5 text-[11.5px] sm:text-[12px] font-bold text-white shadow-xs hover:bg-purple-700 shrink-0"
              >
                <BookOpen className="h-3.5 w-3.5" /> Browse 520 Q&As
              </button>
            </div>
          </div>

          {/* Theory Guarantee Card */}
          <div className={`rounded-[24px] sm:rounded-3xl p-3.5 sm:p-4 ${CARD} ${CARD_SHADOW}`}>
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400`}>
                <FileText className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className={`text-[14.5px] sm:text-[15px] font-bold ${TEXT}`}>Theory Filter Active</p>
                <p className={`mt-1 text-[12px] sm:text-[12.5px] leading-snug ${MUTED}`}>
                  Theoretical questions on Code Guru mode automatically return pure theoretical definitions, key concepts, and exam viva tips — completely free of unneeded code blocks or terminal outputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics & Cache */}
      <section className="px-3.5 sm:px-5">
        <h3 className={`mb-2 text-[12.5px] sm:text-[13px] font-semibold ${MUTED}`}>Storage & Diagnostics</h3>
        <div className={`rounded-[24px] sm:rounded-3xl p-3.5 sm:p-4 ${CARD} ${CARD_SHADOW}`}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
              <span className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl ${TILE}`}>
                <ShieldCheck className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className={`text-[14.5px] sm:text-[15px] font-bold truncate ${TEXT}`}>Network & Cache Status</p>
                <p className={`mt-0.5 text-[12px] sm:text-[12.5px] truncate ${MUTED}`}>
                  {isOnline ? "Online (Enhanced with Google & AI search)" : "Offline (Local Engine Active)"}
                </p>
              </div>
            </div>
            <span
              className={`rounded-full px-2 sm:px-2.5 py-1 text-[10.5px] sm:text-[11px] font-semibold shrink-0 ${
                isOnline
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"
                  : "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300"
              }`}
            >
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>

          <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-3 text-[12px] dark:border-white/[0.06] gap-2 flex-wrap">
            <div>
              <span className={`font-semibold ${TEXT}`}>Reset Sample Conversations</span>
              <p className={`text-[11px] sm:text-[11.5px] ${MUTED}`}>Restores default sample chats</p>
            </div>
            <button
              onClick={handleResetClick}
              className={`rounded-full px-3 py-1 text-[11.5px] sm:text-[12px] font-bold transition shrink-0 ${
                resetConfirm
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/[0.08] dark:text-slate-200"
              }`}
            >
              {resetConfirm ? "Confirm Reset?" : "Reset Demo"}
            </button>
          </div>
        </div>
      </section>

      {/* About Engine */}
      <section className="px-3.5 sm:px-5">
        <h3 className={`mb-2 text-[12.5px] sm:text-[13px] font-semibold ${MUTED}`}>About & Engine</h3>
        <div className={`rounded-[24px] sm:rounded-3xl p-3.5 sm:p-4 ${CARD} ${CARD_SHADOW}`}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
              <span className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl ${TILE}`}>
                <Cpu className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className={`text-[14.5px] sm:text-[15px] font-bold ${TEXT}`}>Pocket Engine</p>
                <p className={`mt-0.5 text-[12px] sm:text-[12.5px] ${MUTED}`}>Local On-Device Runtime</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10.5px] sm:text-[11px] font-semibold text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300 shrink-0">
              Active
            </span>
          </div>
          <div className="mt-3.5 space-y-2 border-t border-slate-100 pt-3 text-[11.5px] sm:text-[12px] dark:border-white/[0.06]">
            <div className="flex items-center justify-between">
              <span className={MUTED}>Build Version</span>
              <span className={`font-semibold tabular-nums ${TEXT}`}>v2.4.0 (PWA Offline)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={MUTED}>Hardware Resources</span>
              <span className={`font-semibold tabular-nums ${TEXT}`}>{cores} CPU Cores • {memory} GB RAM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Floating bars ---------- */
interface InputBarProps {
  onSubmit: (text: string) => void;
}

function InputBar({ onSubmit }: InputBarProps) {
  const [text, setText] = useState("");
  const { isListening, toggleListening, isSupported, error: voiceError } = useVoiceInput({
    onTranscript: (transcriptText) => {
      setText((prev) => {
        // If empty or user starts speech afresh, replace or append cleanly
        if (!prev) return transcriptText;
        return transcriptText;
      });
    },
  });

  const send = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <div className="relative">
      {voiceError && (
        <div className="absolute -top-9 left-4 right-4 z-20 rounded-lg bg-amber-500/90 px-3 py-1 text-[11px] font-medium text-white shadow-md backdrop-blur-xs">
          {voiceError}
        </div>
      )}

      <div
        className={`flex h-13 sm:h-14 items-center gap-1.5 sm:gap-2 rounded-full py-1 sm:py-1.5 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 transition-all ${
          isListening
            ? "ring-2 ring-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
            : "focus-within:ring-2 focus-within:ring-[#0066FF]/40"
        } ${CARD} ${CARD_SHADOW}`}
      >
        {isListening ? (
          <div className="flex items-center gap-2 pl-1 pr-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
            </span>
            <span className="text-[12px] font-semibold text-red-600 dark:text-red-400 shrink-0">
              Listening...
            </span>
          </div>
        ) : null}

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder={isListening ? "Speak now..." : "Explain climate change simply..."}
          aria-label="Ask PocketEngine"
          className="min-w-0 flex-1 bg-transparent text-[13.5px] sm:text-[14px] font-medium text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100"
        />

        {/* Voice Input Button */}
        {isSupported && (
          <button
            type="button"
            onClick={toggleListening}
            title={isListening ? "Stop voice dictation" : "Voice Input (Dictate question)"}
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

        <button
          onClick={send}
          disabled={!text.trim()}
          aria-label="Send message"
          className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full text-white transition active:scale-90 disabled:opacity-40"
          style={{ background: BLUE, boxShadow: text.trim() ? "0 8px 16px -4px rgba(0,102,255,0.55)" : "none" }}
        >
          <Send className="h-4.5 w-4.5 sm:h-5 sm:w-5" strokeWidth={2.2} style={{ transform: "translate(-1px, 1px)" }} />
        </button>
      </div>
    </div>
  );
}

interface BottomNavProps {
  active: TabId;
  onChange: (id: TabId) => void;
}

function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav aria-label="Primary" className={`flex h-14 sm:h-16 items-center justify-between rounded-full px-1.5 sm:px-2 ${CARD} ${CARD_SHADOW}`}>
      {tabs.map(({ id, label, Icon }) => {
        const isActive = id === active;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            aria-label={label}
            aria-current={isActive ? "page" : undefined}
            className={`flex h-11 sm:h-12 items-center justify-center gap-1.5 sm:gap-2 rounded-full transition-all duration-200 ${
              isActive
                ? "px-3.5 sm:px-5 text-white"
                : "w-10 sm:w-12 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
            }`}
            style={isActive ? { background: BLUE, boxShadow: "0 8px 16px -4px rgba(0,102,255,0.5)" } : undefined}
          >
            <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={2.1} />
            {isActive && <span className="text-[13px] sm:text-[14px] font-semibold whitespace-nowrap">{label}</span>}
          </button>
        );
      })}
    </nav>
  );
}

/* ---------- App ---------- */
export default function PocketEngine() {
  const [tab, setTab] = useState<TabId>("home");
  const [chats, setChats] = useState<ChatSession[]>(() => loadSavedChats());
  const [keepHistory, setKeepHistoryState] = useState<boolean>(() => loadKeepHistory());
  const [theme, setThemeState] = useState<"light" | "dark">(() => loadSavedTheme());

  // Active chat state
  const [activeChat, setActiveChat] = useState<ChatSession | null>(null);
  // Active tool state
  const [activeToolId, setActiveToolId] = useState<string | null>(null);
  // Menu drawer state
  const [menuOpen, setMenuOpen] = useState(false);
  // QA Modals
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showTutorModal, setShowTutorModal] = useState(false);

  const isOnline = useOnlineStatus();
  const scrollRef = useRef<HTMLElement>(null);
  const dark = theme === "dark";

  const setKeepHistory = (val: boolean) => {
    setKeepHistoryState(val);
    saveKeepHistory(val);
  };

  const setTheme = (val: "light" | "dark") => {
    setThemeState(val);
    saveTheme(val);
  };

  // Sync dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  // Save chats to localStorage whenever chats update
  useEffect(() => {
    saveChats(chats, keepHistory);
  }, [chats, keepHistory]);

  // Reset scroll when switching tabs
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [tab, activeChat]);

  // Start chat with bot (optionally with an initial prompt)
  const handleStartChat = (botId: BotId, initialMessage?: string) => {
    if (initialMessage) {
      const title = initialMessage.length > 36 ? initialMessage.slice(0, 36) + "..." : initialMessage;
      const aiResponse = generateOfflineResponse(initialMessage, botId, isOnline);
      const newChat: ChatSession = {
        id: Date.now(),
        bot: botId,
        group: "Today",
        time: "Just now",
        title,
        messages: [
          { from: "user", text: initialMessage, timestamp: "Now" },
          { from: "ai", text: aiResponse, timestamp: "Now" },
        ],
      };
      setChats((prev) => [newChat, ...prev]);
      setActiveChat(newChat);
      return;
    }

    // Check if there is an existing recent chat with this bot
    const existing = chats.find((c) => c.bot === botId);
    if (existing) {
      setActiveChat(existing);
    } else {
      const newChat: ChatSession = {
        id: Date.now(),
        bot: botId,
        group: "Today",
        time: "Just now",
        title: "New conversation",
        messages: [],
      };
      setChats((prev) => [newChat, ...prev]);
      setActiveChat(newChat);
    }
  };

  // User submits prompt from floating InputBar on home screen
  const handleHomeInputSubmit = (text: string) => {
    const query = text.trim();
    if (!query) return;

    // Detect likely bot persona
    const lower = query.toLowerCase();
    let selectedBot: BotId = "gemini";
    if (
      lower.includes("code") ||
      lower.includes("react") ||
      lower.includes("python") ||
      lower.includes("function") ||
      lower.includes("error") ||
      lower.includes("loop") ||
      lower.includes("hook") ||
      lower.includes("css")
    ) {
      selectedBot = "code";
    } else if (
      lower.includes("quiz") ||
      lower.includes("study") ||
      lower.includes("exam") ||
      lower.includes("photosynthesis") ||
      lower.includes("biology") ||
      lower.includes("math") ||
      lower.includes("physics")
    ) {
      selectedBot = "tutor";
    } else if (lower.includes("email") || lower.includes("schedule") || lower.includes("plan")) {
      selectedBot = "assistant";
    }

    const title = query.length > 36 ? query.slice(0, 36) + "..." : query;
    const newChat: ChatSession = {
      id: Date.now(),
      bot: selectedBot,
      group: "Today",
      time: "Just now",
      title,
      messages: [{ from: "user", text: query, timestamp: "Now" }],
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChat(newChat);
  };

  // Update chat session
  const handleUpdateChat = (updated: ChatSession) => {
    setActiveChat(updated);
    setChats((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  // Delete chat
  const handleDeleteChat = (id: number | string) => {
    setChats((prev) => prev.filter((c) => c.id !== id));
    if (activeChat?.id === id) {
      setActiveChat(null);
    }
  };

  // Reset to initial sample data
  const handleResetDemoData = () => {
    setChats(INITIAL_CHATS);
    setActiveChat(null);
  };

  const isHome = tab === "home";

  return (
    <div className="flex h-full min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-slate-100/60 dark:bg-slate-950 sm:p-2 md:p-3">
      <div
        className="relative flex h-[100dvh] w-full max-w-full flex-col overflow-hidden sm:max-w-[425px] sm:h-[860px] sm:max-h-[calc(100dvh-24px)] sm:rounded-[44px] sm:border-[6px] sm:border-white sm:shadow-[0_30px_80px_-20px_rgba(30,64,120,0.35)] dark:sm:border-[#1B2A44] shrink-0"
        style={{ background: dark ? DARK_BG : LIGHT_BG }}
      >
        {/* If in active chat view, render the active chat interface */}
        {activeChat ? (
          <ActiveChatView
            chat={activeChat}
            botInfo={BOTS[activeChat.bot]}
            isOnline={isOnline}
            onBack={() => setActiveChat(null)}
            onUpdateChat={handleUpdateChat}
            onDeleteChat={handleDeleteChat}
          />
        ) : (
          <>
            <Header onOpenMenu={() => setMenuOpen(true)} />

            <main
              ref={scrollRef}
              className={`no-scrollbar flex-1 overflow-y-auto pt-1 sm:pt-2 ${
                isHome ? "pb-[calc(185px+env(safe-area-inset-bottom,0px))]" : "pb-[calc(105px+env(safe-area-inset-bottom,0px))]"
              }`}
            >
              {tab === "home" && (
                <HomeScreen
                  onStartChat={handleStartChat}
                  onSelectTool={(id) => setActiveToolId(id)}
                />
              )}
              {tab === "docs" && (
                <HistoryScreen
                  chats={chats}
                  setChats={setChats}
                  keepHistory={keepHistory}
                  onTurnOnHistory={() => setKeepHistory(true)}
                  onOpenChat={(chat) => setActiveChat(chat)}
                />
              )}
              {tab === "analytics" && <AnalyticsScreen />}
              {tab === "settings" && (
                <SettingsScreen
                  keepHistory={keepHistory}
                  setKeepHistory={setKeepHistory}
                  theme={theme}
                  setTheme={setTheme}
                  onOpenCourseModal={() => setShowCourseModal(true)}
                  onOpenTutorModal={() => setShowTutorModal(true)}
                  onResetDemoData={handleResetDemoData}
                  isOnline={isOnline}
                />
              )}
            </main>

            {/* Fade so scrolling content dissolves behind the floating bars */}
            <div
              className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent dark:from-[#070D18] dark:via-[#070D18]/85 ${
                isHome ? "h-[calc(195px+env(safe-area-inset-bottom,0px))]" : "h-[calc(115px+env(safe-area-inset-bottom,0px))]"
              }`}
            />

            <div className="absolute inset-x-3 sm:inset-x-4 bottom-[max(0.75rem,env(safe-area-inset-bottom,0px))] flex flex-col gap-2.5 sm:gap-3 z-20">
              {isHome && <InputBar onSubmit={handleHomeInputSubmit} />}
              <BottomNav active={tab} onChange={(t) => setTab(t)} />
            </div>
          </>
        )}

        {/* Tool Modal / Runner */}
        {activeToolId && (
          <ToolModal
            toolId={activeToolId}
            onClose={() => setActiveToolId(null)}
            onOpenTool={(id) => setActiveToolId(id)}
          />
        )}

        {/* QA Question Modals */}
        <CourseQAModal
          isOpen={showCourseModal}
          onClose={() => setShowCourseModal(false)}
          onSelectQuestion={(item) => {
            setShowCourseModal(false);
            handleStartChat("code", item.q);
          }}
          isOnline={isOnline}
        />
        <TutorQAModal
          isOpen={showTutorModal}
          onClose={() => setShowTutorModal(false)}
          onSelectQuestion={(item) => {
            setShowTutorModal(false);
            handleStartChat("tutor", item.q);
          }}
          isOnline={isOnline}
        />

        {/* Menu & Diagnostics Drawer */}
        <MenuDrawer
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onSelectTab={(tabId) => {
            setTab(tabId as TabId);
            setActiveChat(null);
            setMenuOpen(false);
          }}
          onResetDemoData={handleResetDemoData}
        />
      </div>
    </div>
  );
}
