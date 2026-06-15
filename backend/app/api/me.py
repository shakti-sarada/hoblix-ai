from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.auth.dependencies import (
    get_current_user
)

from app.models.user import User

router = APIRouter(
    prefix="/me",
    tags=["Users"]
)


@router.get("")
def me(
    current_user: int = Depends(
        get_current_user
    ),
    db: Session = Depends(get_db)
):

    user = (
        db.query(User)
        .filter(
            User.id == current_user
        )
        .first()
    )

    return user