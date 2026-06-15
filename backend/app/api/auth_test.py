from fastapi import APIRouter
from fastapi import Depends

from app.auth.dependencies import (
    get_current_user
)

router = APIRouter(
    prefix="/auth-test",
    tags=["Auth Test"]
)


@router.get("")
def auth_test(
    user_id: int = Depends(
        get_current_user
    )
):

    return {
        "user_id": user_id
    }