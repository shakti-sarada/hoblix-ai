const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div
        className="
        glass
        flex
        items-center
        gap-2
        rounded-2xl
        px-4
        py-3
        "
      >
        <span
          className="
          h-2
          w-2
          animate-bounce
          rounded-full
          bg-white
          "
        />

        <span
          className="
          h-2
          w-2
          animate-bounce
          rounded-full
          bg-white
          [animation-delay:150ms]
          "
        />

        <span
          className="
          h-2
          w-2
          animate-bounce
          rounded-full
          bg-white
          [animation-delay:300ms]
          "
        />
      </div>
    </div>
  );
};

export default TypingIndicator;