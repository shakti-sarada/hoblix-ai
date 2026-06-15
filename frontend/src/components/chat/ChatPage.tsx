import ChatWindow from "../../components/chat/ChatWindow";

import chatService from "../../services/chat.service";

import { useChat } from "../../hooks/useChat";

const ChatPage = () => {
  const {
    messages,
    loading,
    addMessage,
    setLoading,
  } = useChat();

  const handleSend = async (
    text: string
  ) => {
    const userMessage = {
      id: crypto.randomUUID(),
      sender: "user" as const,
      content: text,
      timestamp:
        new Date().toISOString(),
    };

    addMessage(userMessage);

    try {
      setLoading(true);

      const response =
        await chatService.sendMessage({
          message: text,
        });

      addMessage({
        id: crypto.randomUUID(),
        sender: "assistant",
        content: response.reply,
        timestamp:
          new Date().toISOString(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[80vh]">
      <ChatWindow
        messages={messages}
        loading={loading}
        onSend={handleSend}
      />
    </div>
  );
};

export default ChatPage;