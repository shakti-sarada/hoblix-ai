class CorrectionDetector:

    CORRECTION_WORDS = [
        "actually",
        "correction",
        "update",
        "change",
        "instead",
        "my name is"
    ]

    @staticmethod
    def is_correction(
        message: str
    ) -> bool:

        message = message.lower()

        return any(
            word in message
            for word in (
                CorrectionDetector
                .CORRECTION_WORDS
            )
        )