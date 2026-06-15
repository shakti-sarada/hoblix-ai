import { useBookingStore } from "../store/booking.store";

export const useBookings = () => {
  return useBookingStore();
};