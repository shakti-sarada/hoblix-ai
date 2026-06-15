from sqlalchemy.orm import Session

from app.models.profile import Profile
from app.models.onboarding_state import (
    OnboardingState
)


class OnboardingDBService:

    @staticmethod
    def get_or_create_profile(
        db: Session,
        user_id: int
    ) -> Profile:

        profile = (
            db.query(Profile)
            .filter(
                Profile.user_id == user_id
            )
            .first()
        )

        if profile:
            return profile

        profile = Profile(
            user_id=user_id
        )

        db.add(profile)
        db.commit()
        db.refresh(profile)

        return profile

    @staticmethod
    def get_or_create_state(
        db: Session,
        user_id: int
    ) -> OnboardingState:

        state = (
            db.query(OnboardingState)
            .filter(
                OnboardingState.user_id == user_id
            )
            .first()
        )

        if state:
            return state

        state = OnboardingState(
            user_id=user_id
        )

        db.add(state)
        db.commit()
        db.refresh(state)

        return state

    @staticmethod
    def is_onboarding_complete(
            db: Session,
            user_id: int
    ) -> bool:

        state = (
            OnboardingDBService.get_or_create_state(
                db=db,
                user_id=user_id
            )
        )

        return state.completed