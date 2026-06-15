import type { Booking } from "../../types/booking.types";

import BookingStatus from "./BookingStatus";

interface Props {
  booking: Booking;
}

const BookingCard = ({
  booking,
}: Props) => {
  return (
    <div
      className="
      glass
      rounded-2xl
      border
      border-white/10
      p-5
      transition
      hover:border-indigo-500/40
      "
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {booking.booking_type}
          </h3>

          <p className="text-sm text-slate-400">
            Booking #{booking.id}
          </p>
        </div>

        <BookingStatus
          status={booking.status}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <p className="mb-1 text-xs uppercase text-slate-500">
            Date
          </p>

          <p className="text-white">
            {booking.booking_date}
          </p>
        </div>

        <div>
          <p className="mb-1 text-xs uppercase text-slate-500">
            Start Time
          </p>

          <p className="text-white">
            {booking.start_time}
          </p>
        </div>

        <div>
          <p className="mb-1 text-xs uppercase text-slate-500">
            End Time
          </p>

          <p className="text-white">
            {booking.end_time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;