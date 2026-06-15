from datetime import date


class BookingExtractor:

    @staticmethod
    def extract(
        message: str
    ):

        booking_type = "meeting_room"

        if "desk" in message.lower():
            booking_type = "desk"

        return {
            "booking_type": booking_type,
            "booking_date": date.today(),
            "start_time": None,
            "end_time": None
        }