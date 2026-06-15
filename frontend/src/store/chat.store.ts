import { create } from "zustand";

import type {
  ChatState,
  Message,
} from "../types/chat.types";

export const useChatStore =
  create<ChatState>((set) => ({
    messages: [],
    loading: false,

    addMessage: (message: Message) =>
      set((state) => ({
        messages: [
          ...state.messages,
          message,
        ],
      })),

    setLoading: (loading: boolean) =>
      set({ loading }),

    clearMessages: () =>
      set({ messages: [] }),
  }));