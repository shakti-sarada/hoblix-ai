import type { Booking } from "../../types/booking.types";
import BookingCard from "./BookingCard";

interface Props {
  bookings: Booking[];
}

const BookingHistory = ({
  bookings,
}: Props) => {
  if (bookings.length === 0) {
  return (
    <div className="glass rounded-2xl p-8 text-center">
      <h3 className="mb-2 text-xl font-semibold text-white">
        No Bookings Yet
      </h3>

      <p className="text-slate-400">
        Book a desk or meeting room from chat.
      </p>
    </div>
  );
}
  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking}
        />
      ))}
    </div>
  );
};

export default BookingHistory;