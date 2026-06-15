import type { Message } from "../../types/chat.types";
import MessageBubble from "./MessageBubble";

interface Props {
  messages: Message[];
}

const MessageList = ({
  messages,
}: Props) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
};

export default MessageList;