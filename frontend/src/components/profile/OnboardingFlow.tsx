import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import onboardingService from "../../services/onboarding.service";

import OnboardingBubble from "./OnboardingBubble";

const OnboardingFlow = () => {
  const { user } = useAuth();

  const [started, setStarted] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [messages, setMessages] =
    useState<
      {
        sender:
          | "user"
          | "assistant";
        content: string;
      }[]
    >([]);

  const startOnboarding =
    async () => {
      if (!user) return;

      try {
        const response =
          await onboardingService.sendMessage(
            {
              user_id: user.id,
              message: "start",
            }
          );

        setMessages([
          {
            sender:
              "assistant",
            content:
              response.reply,
          },
        ]);

        setStarted(true);
      } catch (error) {
        console.error(error);
      }
    };

  const sendMessage =
    async () => {
      if (
        !input.trim() ||
        !user
      ) {
        return;
      }

      const userMessage =
        input.trim();

      setMessages(
        (prev) => [
          ...prev,
          {
            sender: "user",
            content:
              userMessage,
          },
        ]
      );

      setInput("");

      try {
        const response =
          await onboardingService.sendMessage(
            {
              user_id: user.id,
              message:
                userMessage,
            }
          );

        setMessages(
          (prev) => [
            ...prev,
            {
              sender:
                "assistant",
              content:
                response.reply,
            },
          ]
        );
      } catch (error) {
        console.error(error);

        setMessages(
          (prev) => [
            ...prev,
            {
              sender:
                "assistant",
              content:
                "Sorry, something went wrong.",
            },
          ]
        );
      }
    };

  if (!started) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="glass max-w-md rounded-3xl p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Complete Your Profile
          </h2>

          <p className="mb-6 text-slate-400">
            Let's personalize your
            coworking experience.
          </p>

          <button
            onClick={
              startOnboarding
            }
            className="
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            text-white
            hover:bg-indigo-500
            "
          >
            Start Onboarding
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map(
          (msg, index) => (
            <OnboardingBubble
              key={index}
              content={
                msg.content
              }
              isUser={
                msg.sender ===
                "user"
              }
            />
          )
        )}
      </div>

      <div className="border-t border-white/10 p-4">
        <div className="flex gap-3">
          <input
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
            className="
            flex-1
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            "
            placeholder="Type your answer..."
          />

          <button
            onClick={
              sendMessage
            }
            className="
            rounded-xl
            bg-indigo-600
            px-5
            py-3
            text-white
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

export default OnboardingFlow;