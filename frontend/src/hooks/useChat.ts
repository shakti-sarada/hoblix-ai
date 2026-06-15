import { useChatStore } from "../store/chat.store";

export const useChat = () => {
  return useChatStore();
};