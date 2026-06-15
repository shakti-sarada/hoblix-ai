from datetime import datetime,date,time
from sqlalchemy import Date
from sqlalchemy import Time

from sqlalchemy import (
    DateTime,
    ForeignKey,
    Integer,
    String,
)

from sqlalchemy.orm import (
    Mapped,
    mapped_column,
)

from app.database.base import Base


class Booking(Base):
    __tablename__ = "bookings"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id")
    )

    booking_type: Mapped[str] = (
        mapped_column(
            String(50)
        )
    )

    status: Mapped[str] = (
        mapped_column(
            String(20),
            default="pending"
        )
    )

    created_at: Mapped[datetime] = (
        mapped_column(
            DateTime,
            default=datetime.utcnow
        )
    )

    booking_date: Mapped[date | None] = (
        mapped_column(
            Date,
            nullable=True
        )
    )

    start_time: Mapped[time | None] = (
        mapped_column(
            Time,
            nullable=True
        )
    )

    end_time: Mapped[time | None] = (
        mapped_column(
            Time,
            nullable=True
        )
    )