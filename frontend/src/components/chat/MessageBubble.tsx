import ReactMarkdown from "react-markdown";

import type {
  Message,
} from "../../types/chat.types";

interface Props {
  message: Message;
}

const MessageBubble = ({
  message,
}: Props) => {
  const isUser =
    message.sender === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-indigo-600 text-white shadow-lg"
            : "glass text-white"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">
            {message.content}
          </p>
        ) : (
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h1: ({
                  children,
                }) => (
                  <h1 className="mb-4 text-2xl font-bold text-indigo-300">
                    {children}
                  </h1>
                ),

                h2: ({
                  children,
                }) => (
                  <h2 className="mb-3 text-xl font-semibold text-indigo-300">
                    {children}
                  </h2>
                ),

                h3: ({
                  children,
                }) => (
                  <h3 className="mb-3 text-lg font-semibold text-indigo-200">
                    {children}
                  </h3>
                ),

                h4: ({
                  children,
                }) => (
                  <h4 className="mt-4 mb-2 font-semibold text-slate-200">
                    {children}
                  </h4>
                ),

                ul: ({
                  children,
                }) => (
                  <ul className="ml-5 list-disc space-y-1">
                    {children}
                  </ul>
                ),

                ol: ({
                  children,
                }) => (
                  <ol className="ml-5 list-decimal space-y-1">
                    {children}
                  </ol>
                ),

                p: ({
                  children,
                }) => (
                  <p className="leading-7 text-slate-100">
                    {children}
                  </p>
                ),

                strong: ({
                  children,
                }) => (
                  <strong className="font-semibold text-white">
                    {children}
                  </strong>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;