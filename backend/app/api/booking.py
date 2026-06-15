from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.models.booking import Booking

from app.schemas.booking import (
    BookingResponse
)

router = APIRouter(
    prefix="/bookings",
    tags=["Bookings"]
)


@router.get(
    "/{user_id}",
    response_model=list[BookingResponse]
)
def get_user_bookings(
    user_id: int,
    db: Session = Depends(get_db)
):

    bookings = (
        db.query(Booking)
        .filter(
            Booking.user_id == user_id
        )
        .all()
    )

    return bookings