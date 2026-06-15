from sqlalchemy.orm import Session

from app.models.booking import (
    Booking
)


class BookingService:

    @staticmethod
    def create_booking(
            db,
            user_id,
            booking_type,
            booking_date=None,
            start_time=None,
            end_time=None
    ):
        booking = Booking(
            user_id=user_id,
            booking_type=booking_type,
            booking_date=booking_date,
            start_time=start_time,
            end_time=end_time
        )

        db.add(booking)
        db.commit()
        db.refresh(booking)

        return booking