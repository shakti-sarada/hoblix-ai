import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

import type { Message } from "../../types/chat.types";

interface Props {
  messages: Message[];
  loading: boolean;
  onSend: (
    message: string
  ) => Promise<void>;
}

const ChatWindow = ({
  messages,
  loading,
  onSend,
}: Props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-auto">
        <MessageList messages={messages} />
      </div>

      {loading && (
        <TypingIndicator />
      )}

      <ChatInput
        onSend={onSend}
        loading={loading}
      />
    </div>
  );
};

export default ChatWindow;