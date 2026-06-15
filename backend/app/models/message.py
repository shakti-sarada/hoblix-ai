from datetime import datetime

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


class Message(Base):
    __tablename__ = "messages"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    conversation_id: Mapped[int] = (
        mapped_column(
            ForeignKey("conversations.id")
        )
    )

    sender: Mapped[str] = mapped_column(
        String(20)
    )

    content: Mapped[str] = mapped_column(
        String(2000)
    )

    created_at: Mapped[datetime] = (
        mapped_column(
            DateTime,
            default=datetime.utcnow
        )
    )