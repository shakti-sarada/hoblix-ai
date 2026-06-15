from app.database.base import Base
from app.database.session import engine

from app.models import (
    User,
    Profile,
    OnboardingState,
    Conversation,
    Message,
    Booking,
)

Base.metadata.create_all(bind=engine)

print("Tables created successfully!")