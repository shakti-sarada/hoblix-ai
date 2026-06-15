import api from "../lib/axios";
import type {
  ChatRequest,
  ChatResponse,
} from "../types/chat.types";

class ChatService {
  async sendMessage(
    payload: ChatRequest
  ): Promise<ChatResponse> {
    const response = await api.post<
      ChatResponse
    >("/chat", payload);

    return response.data;
  }
}

export default new ChatService();