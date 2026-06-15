from pydantic import BaseModel


class OnboardingMessageRequest(
    BaseModel
):
    user_id: int
    message: str


class OnboardingMessageResponse(
    BaseModel
):
    reply: str