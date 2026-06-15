from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class OnboardingState(Base):
    __tablename__ = "onboarding_states"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        unique=True
    )

    current_step: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True
    )

    completed: Mapped[bool] = mapped_column(
        Boolean,
        default=False
    )

    last_updated: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )