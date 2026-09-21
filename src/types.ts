export type BotId = 'code' | 'tutor' | 'assistant';

export interface ChatMessage {
  id?: string;
  from: 'user' | 'ai';
  text: string;
  timestamp?: string;
}

export interface ChatSession {
  id: number | string;
  bot: BotId;
  group: 'Today' | 'Yesterday' | 'Earlier this week';
  time: string;
  title: string;
  messages: ChatMessage[];
  updatedAt?: number;
}

export type TabId = 'home' | 'docs' | 'analytics' | 'settings';

export interface BotInfo {
  name: string;
  role: string;
  description: string;
  samplePrompts: string[];
}
