from sqlalchemy.orm import Session

from app.chat.conversation_service import (
    ConversationService
)

from app.chat.intent_router import (
    IntentRouter
)

from app.chat.general_service import (
    GeneralService
)

from app.onboarding.onboarding_manager import (
    OnboardingManager
)

from app.onboarding.db_service import (
    OnboardingDBService
)

from app.booking.booking_service import (
    BookingService
)

from app.booking.extractor import (
    BookingExtractor
)

from app.booking.availability_service import (
    AvailabilityService
)

from app.rag.rag_service import (
    RAGService
)


class ChatManager:

    @staticmethod
    def handle_message(
        db: Session,
        user_id: int,
        message: str
    ):

        conversation = (
            ConversationService.get_or_create_conversation(
                db=db,
                user_id=user_id,
                conversation_type="chat"
            )
        )

        ConversationService.add_message(
            db=db,
            conversation_id=conversation.id,
            sender="user",
            content=message
        )

        intent = IntentRouter.route(
            message
        )

        print(f"MESSAGE: {message}")
        print(f"INTENT: {intent}")

        messages = (
            ConversationService.get_recent_messages(
                db=db,
                conversation_id=conversation.id,
                limit=3
            )
        )

        if (
            intent == "onboarding"
            and len(messages) >= 2
        ):

            previous_message = (
                messages[1].content
            )

            previous_intent = (
                IntentRouter.route(
                    previous_message
                )
            )

            if previous_intent == "rag":

                print(
                    "FOLLOW-UP RAG DETECTED"
                )

                intent = "rag"

        if (
            intent == "onboarding"
            and OnboardingDBService.is_onboarding_complete(
                db=db,
                user_id=user_id
            )
        ):
            intent = "general"

        print(
            "FINAL INTENT:",
            intent
        )

        if intent == "onboarding":

            reply = (
                OnboardingManager.handle_message(
                    db=db,
                    user_id=user_id,
                    message=message
                )
            )

        elif intent == "booking":

            booking_data = (
                BookingExtractor.extract(
                    message
                )
            )

            available = (
                AvailabilityService.is_available(
                    db=db,
                    booking_type=booking_data[
                        "booking_type"
                    ],
                    booking_date=booking_data[
                        "booking_date"
                    ],
                    start_time=booking_data[
                        "start_time"
                    ],
                    end_time=booking_data[
                        "end_time"
                    ]
                )
            )

            if not available:

                reply = (
                    "Requested slot is not available."
                )

            else:

                booking = (
                    BookingService.create_booking(
                        db=db,
                        user_id=user_id,
                        booking_type=booking_data[
                            "booking_type"
                        ],
                        booking_date=booking_data[
                            "booking_date"
                        ],
                        start_time=booking_data[
                            "start_time"
                        ],
                        end_time=booking_data[
                            "end_time"
                        ]
                    )
                )

                reply = (
                    f"Booking #{booking.id} "
                    f"created successfully for "
                    f"{booking.booking_type}."
                )

        elif intent == "rag":

            messages = (
                ConversationService.get_recent_messages(
                    db=db,
                    conversation_id=conversation.id
                )
            )

            history = "\n".join(
                f"{msg.sender}: {msg.content}"
                for msg in reversed(messages)
            )

            reply = (
                RAGService.answer(
                    question=message,
                    history=history
                )
            )

        elif intent == "general":

            reply = (
                GeneralService.answer(
                    message
                )
            )

        else:

            reply = (
                "I can help with onboarding, "
                "bookings, workspace information, "
                "and questions about Hoblix."
            )

        ConversationService.add_message(
            db=db,
            conversation_id=conversation.id,
            sender="assistant",
            content=reply
        )

        return reply