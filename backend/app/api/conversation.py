from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.models.message import Message
from app.models.conversation import Conversation
from app.schemas.conversation import (
    MessageResponse
)

router = APIRouter(
    prefix="/conversations",
    tags=["Conversations"]
)


@router.get(
    "/{user_id}",
    response_model=list[MessageResponse]
)
def get_conversation_history(
    user_id: int,
    db: Session = Depends(get_db)
):

    conversation = (
        db.query(Conversation)
        .filter(
            Conversation.user_id == user_id
        )
        .first()
    )

    if not conversation:
        return []

    messages = (
        db.query(Message)
        .filter(
            Message.conversation_id == conversation.id
        )
        .order_by(Message.created_at)
        .all()
    )

    return messages