from sqlalchemy.orm import Session

from app.models.user import User

from app.auth.jwt_handler import (
    JWTHandler
)


class AuthService:

    @staticmethod
    def register_user(
        db: Session,
        name: str,
        email: str
    ):

        existing_user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        if existing_user:

            token = (
                JWTHandler.create_access_token(
                    existing_user.id
                )
            )

            return {
                "user": existing_user,
                "token": token
            }

        user = User(
            name=name,
            email=email
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        token = (
            JWTHandler.create_access_token(
                user.id
            )
        )

        return {
            "user": user,
            "token": token
        }