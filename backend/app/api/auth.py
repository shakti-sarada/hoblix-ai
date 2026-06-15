from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.auth.auth_service import (
    AuthService
)

from app.auth.google_auth_service import (
    GoogleAuthService
)

from app.schemas.auth import (
    RegisterRequest,
    RegisterResponse
)

from app.schemas.google_auth import (
    GoogleAuthRequest
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post(
    "/register",
    response_model=RegisterResponse
)
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db)
):

    result = AuthService.register_user(
        db=db,
        name=request.name,
        email=request.email
    )

    return RegisterResponse(
        user=result["user"],
        token=result["token"]
    )


@router.post(
    "/google",
    response_model=RegisterResponse
)
def google_login(
    request: GoogleAuthRequest,
    db: Session = Depends(get_db)
):

    user_info = (
        GoogleAuthService.verify_token(
            request.token
        )
    )

    result = (
        AuthService.register_user(
            db=db,
            name=user_info["name"],
            email=user_info["email"]
        )
    )

    return RegisterResponse(
        user=result["user"],
        token=result["token"]
    )