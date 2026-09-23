export type BotId = 'gemini' | 'code' | 'tutor' | 'assistant';

export type GeminiModelId =
  | 'gemini-3.5-flash'
  | 'gemini-3.1-flash-lite'
  | 'gemini-3.1-pro-preview'
  | 'gemini-3.8-flash';

export type TaskType = 'general' | 'fast' | 'complex';

export interface SearchSource {
  title: string;
  uri: string;
}

export interface ChatMessage {
  id?: string;
  from: 'user' | 'ai';
  text: string;
  timestamp?: string;
  modelUsed?: string;
  sources?: SearchSource[];
}

export interface ChatSession {
  id: number | string;
  bot: BotId;
  group: 'Today' | 'Yesterday' | 'Earlier this week';
  time: string;
  title: string;
  messages: ChatMessage[];
  updatedAt?: number;
  selectedModel?: GeminiModelId;
  searchGroundingEnabled?: boolean;
}

export type TabId = 'home' | 'docs' | 'analytics' | 'settings';

export interface BotInfo {
  name: string;
  role: string;
  description: string;
  samplePrompts: string[];
}
