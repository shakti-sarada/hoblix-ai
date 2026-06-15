interface Props {
  status: string;
}

const BookingStatus = ({ status }: Props) => {
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm ${
        status === "confirmed"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status}
    </span>
  );
};

export default BookingStatus;