from app.onboarding.field_detector import (
    FieldDetector
)

from app.onboarding.parsers import (
    OnboardingParser
)

from app.onboarding.service import (
    OnboardingService
)


class CorrectionService:

    @staticmethod
    def process(
        profile,
        message: str
    ):

        field = (
            FieldDetector.detect_field(
                message
            )
        )

        if not field:

            return False

        value = (
            OnboardingParser.parse_field_value(
                field,
                message
            )
        )

        OnboardingService.save_answer(
            profile,
            field,
            value
        )

        return True