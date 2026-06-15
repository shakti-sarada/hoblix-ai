from sqlalchemy.orm import Session

from app.models.booking import Booking


class AvailabilityService:

    @staticmethod
    def is_available(
        db: Session,
        booking_type: str,
        booking_date=None,
        start_time=None,
        end_time=None
    ):

        existing_booking = (
            db.query(Booking)
            .filter(
                Booking.booking_type == booking_type,
                Booking.booking_date == booking_date,
                Booking.start_time == start_time
            )
            .first()
        )

        return existing_booking is None