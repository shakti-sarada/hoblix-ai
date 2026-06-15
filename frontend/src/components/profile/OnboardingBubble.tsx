interface Props {
  content: string;
  isUser: boolean;
}

const OnboardingBubble = ({
  content,
  isUser,
}: Props) => {
  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-indigo-600 text-white"
            : "glass text-white"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default OnboardingBubble;