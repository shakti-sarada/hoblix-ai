from app.models.onboarding_state import (
    OnboardingState
)


class OnboardingStateService:

    @staticmethod
    def get_current_step(
        onboarding_state: OnboardingState
    ):

        return onboarding_state.current_step

    @staticmethod
    def update_current_step(
        onboarding_state: OnboardingState,
        step: str
    ):

        onboarding_state.current_step = step

        return onboarding_state