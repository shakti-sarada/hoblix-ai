from google.oauth2 import id_token
from google.auth.transport import requests

from app.core.config import settings


class GoogleAuthService:

    @staticmethod
    def verify_token(
        token: str
    ):

        user_info = (
            id_token.verify_oauth2_token(
                token,
                requests.Request(),
                settings.GOOGLE_CLIENT_ID
            )
        )

        return {
            "email": user_info["email"],
            "name": user_info["name"]
        }