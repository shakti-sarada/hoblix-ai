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


class Conversation(Base):
    __tablename__ = "conversations"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id")
    )

    conversation_type: Mapped[str] = (
        mapped_column(
            String(50),
            default="onboarding"
        )
    )

    created_at: Mapped[datetime] = (
        mapped_column(
            DateTime,
            default=datetime.utcnow
        )
    )