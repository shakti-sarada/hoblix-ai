backend/
│
├── app/
│
├── api/
│   ├── auth.py
│   ├── chat.py
│   ├── onboarding.py
│   ├── booking.py
│   └── user.py
│
├── auth/
│   ├── auth_service.py
│   ├── jwt_handler.py
│   └── google_auth.py
│
├── chat/
│   ├── chat_manager.py
│   ├── conversation_service.py
│   ├── general_service.py
│   └── intent_router.py
│
├── onboarding/
│   ├── onboarding_manager.py
│   ├── onboarding_service.py
│   ├── workflow.py
│   ├── parsers.py
│   ├── state_service.py
│   └── db_service.py
│
├── booking/
│   ├── booking_service.py
│   ├── availability_service.py
│   └── extractor.py
│
├── rag/
│   ├── rag_service.py
│   ├── retriever.py
│   └── prompt_builder.py
│
├── llm/
│   └── llm_service.py
│
├── database/
│   ├── base.py
│   └── db.py
│
├── models/
│   ├── user.py
│   ├── profile.py
│   ├── booking.py
│   ├── conversation.py
│   ├── message.py
│   └── onboarding_state.py
│
├── schemas/
│   ├── auth.py
│   ├── profile.py
│   ├── booking.py
│   └── user.py
│
├── core/
│   └── config.py
│
└── main.py
