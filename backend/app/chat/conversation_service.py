from sqlalchemy.orm import Session

from app.models.conversation import (
    Conversation
)

from app.models.message import (
    Message
)


class ConversationService:

    @staticmethod
    def get_or_create_conversation(
        db: Session,
        user_id: int,
        conversation_type: str = "onboarding"
    ):

        conversation = (
            db.query(Conversation)
            .filter(
                Conversation.user_id == user_id,
                Conversation.conversation_type == conversation_type
            )
            .first()
        )

        if conversation:
            return conversation

        conversation = Conversation(
            user_id=user_id,
            conversation_type=conversation_type
        )

        db.add(conversation)
        db.commit()
        db.refresh(conversation)

        return conversation

    @staticmethod
    def add_message(
        db: Session,
        conversation_id: int,
        sender: str,
        content: str
    ):

        message = Message(
            conversation_id=conversation_id,
            sender=sender,
            content=content
        )

        db.add(message)
        db.commit()
        db.refresh(message)

        return message

    @staticmethod
    def get_recent_messages(
            db,
            conversation_id: int,
            limit: int = 6
    ):
        return (
            db.query(Message)
            .filter(
                Message.conversation_id
                == conversation_id
            )
            .order_by(
                Message.created_at.desc()
            )
            .limit(limit)
            .all()
        )