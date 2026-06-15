export interface Message {
  id: string;
  sender: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

export interface ChatState {
  messages: Message[];
  loading: boolean;

  addMessage: (message: Message) => void;
  setLoading: (loading: boolean) => void;
  clearMessages: () => void;
}