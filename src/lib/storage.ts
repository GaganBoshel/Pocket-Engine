import { ChatSession } from '../types';

const CHATS_STORAGE_KEY = 'pocket_engine_chats_v1';
const LEGACY_CHATS_KEY = 'vethos_chats_v1';
const SETTINGS_HISTORY_KEY = 'pocket_engine_keep_history';
const LEGACY_HISTORY_KEY = 'vethos_keep_history';
const SETTINGS_THEME_KEY = 'pocket_engine_theme';
const LEGACY_THEME_KEY = 'vethos_theme';

export const INITIAL_CHATS: ChatSession[] = [
  {
    id: 1,
    bot: 'code',
    group: 'Today',
    time: '9:42 AM',
    title: 'Fix a React useEffect loop',
    messages: [
      { from: 'user', text: 'My useEffect keeps re-running. Why?' },
      {
        from: 'ai',
        text: 'Your dependency array includes an object that is created on every render. Move it outside the component or wrap it in useMemo.',
      },
      { from: 'user', text: 'That fixed it, thanks!' },
      { from: 'ai', text: 'Great. If it comes back, log each dependency to see which one changes.' },
    ],
  },
  {
    id: 2,
    bot: 'assistant',
    group: 'Today',
    time: '8:15 AM',
    title: 'Explain climate change simply',
    messages: [
      { from: 'user', text: 'Explain climate change simply.' },
      {
        from: 'ai',
        text: 'Burning coal, oil and gas releases gases that trap heat around Earth, like a blanket. More trapped heat means warmer oceans, melting ice and more extreme weather.',
      },
    ],
  },
  {
    id: 3,
    bot: 'tutor',
    group: 'Yesterday',
    time: '7:30 PM',
    title: 'Quiz me on photosynthesis',
    messages: [
      { from: 'user', text: 'Quiz me on photosynthesis.' },
      { from: 'ai', text: 'Question 1: Which part of a plant cell carries out photosynthesis?' },
      { from: 'user', text: 'The chloroplast.' },
      { from: 'ai', text: 'Correct! Next question: which gas do plants release during photosynthesis?' },
    ],
  },
  {
    id: 4,
    bot: 'code',
    group: 'Yesterday',
    time: '2:10 PM',
    title: 'Python list comprehension',
    messages: [
      { from: 'user', text: 'How do I square every number in a list?' },
      { from: 'ai', text: 'Use a list comprehension: [n * n for n in numbers]. It builds a new list in one line.' },
    ],
  },
  {
    id: 5,
    bot: 'tutor',
    group: 'Earlier this week',
    time: 'Mon',
    title: 'Plan a study week for exams',
    messages: [
      { from: 'user', text: 'Help me plan a study week. I have three exams on Friday.' },
      {
        from: 'ai',
        text: 'Split each day into two focused blocks and rotate the subjects. Keep the hardest one for your morning block, and leave Thursday evening for review only.',
      },
    ],
  },
  {
    id: 6,
    bot: 'assistant',
    group: 'Earlier this week',
    time: 'Sun',
    title: 'Draft a polite email to my landlord',
    messages: [
      { from: 'user', text: 'Write a polite email asking my landlord to fix the kitchen tap.' },
      {
        from: 'ai',
        text: 'Subject: Kitchen tap repair request. Hello, the kitchen tap has been leaking for a few days. Could you arrange a repair this week? Thank you for your help.',
      },
    ],
  },
];

export function loadSavedChats(): ChatSession[] {
  try {
    const raw = localStorage.getItem(CHATS_STORAGE_KEY) ?? localStorage.getItem(LEGACY_CHATS_KEY);
    if (!raw) return INITIAL_CHATS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_CHATS;
  } catch {
    return INITIAL_CHATS;
  }
}

export function saveChats(chats: ChatSession[], keepHistory: boolean) {
  if (!keepHistory) return;
  try {
    localStorage.setItem(CHATS_STORAGE_KEY, JSON.stringify(chats));
  } catch (err) {
    console.warn('Could not save chats to localStorage:', err);
  }
}

export function loadKeepHistory(): boolean {
  try {
    const raw = localStorage.getItem(SETTINGS_HISTORY_KEY) ?? localStorage.getItem(LEGACY_HISTORY_KEY);
    return raw !== null ? JSON.parse(raw) : true;
  } catch {
    return true;
  }
}

export function saveKeepHistory(keep: boolean) {
  try {
    localStorage.setItem(SETTINGS_HISTORY_KEY, JSON.stringify(keep));
  } catch {
    // Ignore storage issues
  }
}

export function loadSavedTheme(): 'light' | 'dark' {
  try {
    const raw = localStorage.getItem(SETTINGS_THEME_KEY) ?? localStorage.getItem(LEGACY_THEME_KEY);
    if (raw === 'dark' || raw === 'light') return raw;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // Fallback
  }
  return 'light';
}

export function saveTheme(theme: 'light' | 'dark') {
  try {
    localStorage.setItem(SETTINGS_THEME_KEY, theme);
  } catch {
    // Ignore
  }
}
