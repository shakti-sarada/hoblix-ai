import {
  useState,
  useEffect,
  useRef,
} from "react";

import chatService from "../../services/chat.service";

import TypingIndicator from "../../components/chat/TypingIndicator";

import { useChat } from "../../hooks/useChat";

import MessageBubble from "../../components/chat/MessageBubble";

import BookingQuickActions from "../../components/chat/BookingQuickActions";

const ChatPage = () => {
  const [input, setInput] = useState("");

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  const {
    messages,
    loading,
    addMessage,
    setLoading,
  } = useChat();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (
    text?: string
  ) => {
    const message =
      text || input.trim();

    if (!message) return;

    addMessage({
      id: Date.now().toString(),
      sender: "user",
      content: message,
      timestamp:
        new Date().toISOString(),
    });

    setInput("");
    setLoading(true);

    try {
      const response =
        await chatService.sendMessage({
          message,
        });

      addMessage({
        id:
          (
            Date.now() + 1
          ).toString(),

        sender:
          "assistant",

        content:
          response.reply,

        timestamp:
          new Date().toISOString(),
      });
    } catch (error) {
      console.error(error);

      addMessage({
        id:
          (
            Date.now() + 2
          ).toString(),

        sender:
          "assistant",

        content:
          "Sorry, something went wrong.",

        timestamp:
          new Date().toISOString(),
      });
    }

    setLoading(false);
  };

  const suggestions = [
    "What amenities do you provide?",
    "What are your pricing plans?",
    "Can I book a meeting room?",
    "Do you provide parking?",
    "Check meeting room availability",
    "I want to book a hot desk",
  ];

  return (
    <div className="flex h-full flex-col">
      {/* Empty State */}

      {messages.length === 0 && (
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white">
            Hoblix AI
          </h1>

          <p className="mt-4 text-slate-400">
            Your intelligent coworking assistant
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {suggestions.map(
              (suggestion) => (
                <button
                  key={suggestion}
                  onClick={() =>
                    sendMessage(
                      suggestion
                    )
                  }
                  className="
                  glass
                  glass-hover
                  rounded-xl
                  px-5
                  py-3
                  text-white
                  "
                >
                  {suggestion}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Messages */}

      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mx-auto max-w-4xl">
            <BookingQuickActions
              onAction={
                sendMessage
              }
            />

            <div className="space-y-4">
              {messages.map(
                (msg) => (
                  <MessageBubble
                    key={msg.id}
                    message={msg}
                  />
                )
              )}

              {loading && (
              <TypingIndicator />
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      )}

      {/* Input */}

      <div className="border-t border-white/10 p-4">
        <div className="mx-auto flex max-w-4xl gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(
                e.target.value
              )
            }
            onKeyDown={(e) => {
              if (
                e.key ===
                "Enter"
              ) {
                sendMessage();
              }
            }}
            placeholder="Ask about pricing, amenities, bookings..."
            className="
            flex-1
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            "
          />

          <button
            onClick={() =>
              sendMessage()
            }
            className="
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-indigo-500
            "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;