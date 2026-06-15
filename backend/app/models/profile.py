from sqlalchemy import ForeignKey, Integer, String, JSON, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class Profile(Base):
    __tablename__ = "profiles"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        unique=True
    )

    # Personal Details
    full_name: Mapped[str | None] = (
        mapped_column(
            String,
            nullable=True
        )
    )

    phone: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True
    )

    location: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    # Professional Background
    occupation: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    organization: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    experience: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    skills: Mapped[list | None] = mapped_column(
        JSON,
        nullable=True
    )

    # Goals
    reason_for_coworking: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True
    )

    workspace_needs: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    virtual_office_interest: Mapped[bool | None] = mapped_column(
        Boolean,
        nullable=True
    )

    # Preferences
    work_timing: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    community_interest: Mapped[list | None] = mapped_column(
        JSON,
        nullable=True
    )

    contact_channel: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True
    )

    onboarding_completed: Mapped[bool] = mapped_column(
        Boolean,
        default=False
    )