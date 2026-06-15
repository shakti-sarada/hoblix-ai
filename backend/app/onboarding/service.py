from app.onboarding.config import (
    ONBOARDING_FIELDS,
    FIELD_QUESTIONS,
)


class OnboardingService:

    @staticmethod
    def get_next_missing_field(profile) -> str | None:

        for field in ONBOARDING_FIELDS:

            value = getattr(profile, field, None)

            if value is None:
                return field

        return None

    @staticmethod
    def get_next_question(profile) -> str | None:

        field = OnboardingService.get_next_missing_field(
            profile
        )

        if field is None:
            return None

        return FIELD_QUESTIONS[field]

    @staticmethod
    def save_answer(
            profile,
            field: str,
            value
    ):

        setattr(
            profile,
            field,
            value
        )

        return profile
