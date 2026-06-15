from app.onboarding.service import (
    OnboardingService
)

from app.onboarding.state_service import (
    OnboardingStateService
)

from app.onboarding.parsers import (
    OnboardingParser
)


class OnboardingWorkflow:

    @staticmethod
    def process_message(
        profile,
        onboarding_state,
        user_message: str
    ):

        current_step = (
            OnboardingStateService.get_current_step(
                onboarding_state
            )
        )

        if current_step:
            parsed_value = (
                OnboardingParser.parse_field_value(
                    current_step,
                    user_message
                )
            )

            OnboardingService.save_answer(
                profile,
                current_step,
                parsed_value
            )

        next_field = (
            OnboardingService.get_next_missing_field(
                profile
            )
        )

        if next_field is None:
            onboarding_state.completed = True
            profile.onboarding_completed = True

            return (
                "Thank you! Your onboarding is complete."
            )

        OnboardingStateService.update_current_step(
            onboarding_state,
            next_field
        )

        return (
            OnboardingService.get_next_question(
                profile
            )
        )