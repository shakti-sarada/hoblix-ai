from datetime import datetime

from pydantic import BaseModel


class MessageResponse(BaseModel):
    sender: str
    content: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }