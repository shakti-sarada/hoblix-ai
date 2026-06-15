from fastapi import FastAPI

from app.api.onboarding import (
    router as onboarding_router
)

from app.api.user import (
    router as user_router
)

from app.api.chat import (
    router as chat_router
)

from app.api.conversation import (
    router as conversation_router
)

from app.api.auth_test import (
    router as auth_test_router
)

from app.api.auth import (
    router as auth_router
)

from app.api.me import (
    router as me_router
)

from app.api.booking import (
    router as booking_router
)

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Hoblix AI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(onboarding_router)
app.include_router(user_router)
app.include_router(chat_router)
app.include_router(conversation_router)
app.include_router(auth_test_router)
app.include_router(auth_router)
app.include_router(me_router)
app.include_router(booking_router)


@app.get("/")
def home():
    return {
        "message": "Hoblix AI Backend Running"
    }