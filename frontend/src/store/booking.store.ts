import { create } from "zustand";

import type { Booking } from "../types/booking.types";

interface BookingState {
  bookings: Booking[];

  setBookings: (
    bookings: Booking[]
  ) => void;
}

export const useBookingStore =
  create<BookingState>((set) => ({
    bookings: [],

    setBookings: (bookings) =>
      set({ bookings }),
  }));