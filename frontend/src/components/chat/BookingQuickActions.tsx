interface Props {
  onAction: (
    message: string
  ) => void;
}

const BookingQuickActions = ({
  onAction,
}: Props) => {
  const actions = [
    {
      label: "📅 Book Meeting Room",
      message:
        "I want to book a meeting room tomorrow from 10 AM to 12 PM",
    },
    {
      label: "💺 Book Hot Desk",
      message:
        "I want to book a hot desk tomorrow",
    },
    {
      label: "🔍 Check Availability",
      message:
        "Check meeting room availability tomorrow",
    },
    {
      label: "💰 View Pricing",
      message:
        "What are your pricing plans?",
    },
  ];

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() =>
            onAction(action.message)
          }
          className="
          rounded-xl
          bg-indigo-600/20
          px-4
          py-2
          text-sm
          text-white
          transition
          hover:bg-indigo-600/40
          "
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default BookingQuickActions;