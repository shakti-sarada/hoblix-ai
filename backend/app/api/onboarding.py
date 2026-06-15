from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.schemas.onboarding import (
    OnboardingMessageRequest,
    OnboardingMessageResponse
)

from app.chat.chat_manager import (
    ChatManager
)

router = APIRouter(
    prefix="/onboarding",
    tags=["Onboarding"]
)


@router.post(
    "/message",
    response_model=OnboardingMessageResponse
)
def onboarding_message(
    request: OnboardingMessageRequest,
    db: Session = Depends(get_db)
):

    reply = (
        ChatManager.handle_message(
            db=db,
            user_id=request.user_id,
            message=request.message
        )
    )

    return OnboardingMessageResponse(
        reply=reply
    )