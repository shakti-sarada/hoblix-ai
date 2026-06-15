class BookingParser:

    @staticmethod
    def extract_booking_type(
        message: str
    ):

        message = message.lower()

        if "desk" in message:
            return "desk"

        if "conference room" in message:
            return "conference_room"

        if "meeting room" in message:
            return "meeting_room"

        return "meeting_room"