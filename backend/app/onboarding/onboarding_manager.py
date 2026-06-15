from sqlalchemy.orm import Session

from app.onboarding.db_service import (
    OnboardingDBService
)

from app.onboarding.workflow import (
    OnboardingWorkflow
)


class OnboardingManager:

    @staticmethod
    def handle_message(
        db: Session,
        user_id: int,
        message: str
    ):

        profile = (
            OnboardingDBService.get_or_create_profile(
                db,
                user_id
            )
        )

        state = (
            OnboardingDBService.get_or_create_state(
                db,
                user_id
            )
        )

        reply = (
            OnboardingWorkflow.process_message(
                profile,
                state,
                message
            )
        )

        db.commit()

        return reply