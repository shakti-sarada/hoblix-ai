from datetime import date


class BookingDetailsExtractor:

    @staticmethod
    def extract(message: str):

        return {
            "booking_date": date.today()
        }