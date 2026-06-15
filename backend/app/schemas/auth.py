from pydantic import BaseModel

from app.schemas.user import UserResponse

class RegisterRequest(BaseModel):
    name: str
    email: str

class RegisterResponse(BaseModel):
    user: UserResponse
    token: str
