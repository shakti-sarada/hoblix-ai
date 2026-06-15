from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.schemas.chat import (
    ChatRequest,
    ChatResponse
)

from app.chat.chat_manager import (
    ChatManager
)

from app.auth.dependencies import (
    get_current_user
)

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.post(
    "",
    response_model=ChatResponse
)
def chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: int = Depends(
        get_current_user
    )
):

    reply = ChatManager.handle_message(
        db=db,
        user_id=current_user,
        message=request.message
    )

    return ChatResponse(
        reply=reply
    )