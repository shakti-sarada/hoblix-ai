import api from "../lib/axios";

class BookingService {
  async getBookings(
    userId: number
  ) {
    const response =
      await api.get(
        `/bookings/${userId}`
      );

    return response.data;
  }
}

export default new BookingService();