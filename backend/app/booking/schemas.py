from pydantic import BaseModel
from datetime import date
from datetime import time


class BookingRequest(BaseModel):
    booking_type: str
    booking_date: date | None = None
    start_time: time | None = None
    end_time: time | None = None