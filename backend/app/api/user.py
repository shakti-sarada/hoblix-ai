from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.models.profile import Profile

from app.schemas.profile import (
    ProfileResponse
)

from app.schemas.profile import (
    ProfileResponse,
    ProfileUpdate
)


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get(
    "/{user_id}",
    response_model=ProfileResponse
)
def get_user_profile(
    user_id: int,
    db: Session = Depends(get_db)
):

    profile = (
        db.query(Profile)
        .filter(Profile.user_id == user_id)
        .first()
    )

    if not profile:

        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    return profile


@router.put(
    "/{user_id}",
    response_model=ProfileResponse
)
def update_profile(
    user_id: int,
    request: ProfileUpdate,
    db: Session = Depends(get_db)
):

    profile = (
        db.query(Profile)
        .filter(
            Profile.user_id == user_id
        )
        .first()
    )

    if not profile:

        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    update_data = (
        request.model_dump(
            exclude_unset=True
        )
    )

    for field, value in (
        update_data.items()
    ):
        setattr(
            profile,
            field,
            value
        )

    db.commit()
    db.refresh(profile)

    return profile