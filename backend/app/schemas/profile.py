from pydantic import BaseModel


class ProfileResponse(
    BaseModel
):
    id: int
    user_id: int

    full_name: str | None = None
    organization: str | None = None
    occupation: str | None = None
    experience: str | None = None

    skills: list | None = None

    location: str | None = None

    workspace_needs: str | None = None

    work_timing: str | None = None

    contact_channel: str | None = None

    phone: str | None = None

    onboarding_completed: bool = False

    model_config = {
        "from_attributes": True
    }

class ProfileUpdate(
    BaseModel
):

    full_name: str | None = None
    organization: str | None = None
    occupation: str | None = None
    experience: str | None = None

    skills: list | None = None

    location: str | None = None

    workspace_needs: str | None = None

    work_timing: str | None = None

    contact_channel: str | None = None

    phone: str | None = None