from fastapi import Depends
from fastapi import HTTPException
from fastapi.security import HTTPAuthorizationCredentials
from fastapi.security import HTTPBearer

from app.auth.jwt_handler import JWTHandler


security = HTTPBearer()



def get_current_user(
    credentials: HTTPAuthorizationCredentials = (
        Depends(security)
    )
):

    payload = JWTHandler.verify_token(
        credentials.credentials
    )

    if not payload:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    return int(payload["sub"])