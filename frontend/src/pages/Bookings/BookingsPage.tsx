import { useEffect } from "react";

import bookingService from "../../services/booking.service";

import BookingHistory from "../../components/booking/BookingHistory";

import { useBookings } from "../../hooks/useBookings";
import { useAuth } from "../../hooks/useAuth";

const BookingsPage = () => {
  const { user } = useAuth();

  const {
    bookings,
    setBookings,
  } = useBookings();

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;

      const data =
        await bookingService.getBookings(
          user.id
        );

      setBookings(data);
    };

    fetchBookings();
  }, [user]);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">
        My Bookings
      </h1>

      <BookingHistory
        bookings={bookings}
      />
    </div>
  );
};

export default BookingsPage;