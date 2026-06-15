from app.auth.jwt_handler import (
    JWTHandler
)

token = (
    JWTHandler.create_access_token(
        user_id=1
    )
)

print(token)