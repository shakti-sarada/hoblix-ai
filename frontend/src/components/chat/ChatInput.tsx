import {
  FormEvent,
  useState,
} from "react";

interface Props {
  onSend: (
    message: string
  ) => Promise<void>;
  loading: boolean;
}

const ChatInput = ({
  onSend,
  loading,
}: Props) => {
  const [message, setMessage] =
    useState("");

  const handleSubmit = async (
    e: FormEvent
  ) => {
    e.preventDefault();

    if (!message.trim()) return;

    await onSend(message);

    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >
      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask anything..."
        className="flex-1 rounded-lg border p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg border px-4"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;