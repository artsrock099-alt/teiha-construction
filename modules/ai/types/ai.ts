export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export type OpenRouterChatRequest = {
  model: string;
  messages: Array<{
    role: "system" | "user" | "assistant";
    content: string;
  }>;
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
};

export type OpenRouterChatResponse = {
  id: string;
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export type ChatRequest = {
  messages: Message[];
};

export type ChatResponse = {
  success: boolean;
  message?: Message;
  error?: string;
};
