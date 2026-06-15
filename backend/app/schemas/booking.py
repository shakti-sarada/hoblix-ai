from pydantic import BaseModel
from datetime import date, time


class BookingResponse(
    BaseModel
):

    id: int
    booking_type: str
    booking_date: date | None = None
    start_time: time | None = None
    end_time: time | None = None
    status: str

    model_config = {
        "from_attributes": True
    }