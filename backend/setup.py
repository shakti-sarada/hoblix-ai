from pathlib import Path

folders = [
    "app",
    "app/api",
    "app/api/routes",
    "app/auth",
    "app/booking",
    "app/chat",
    "app/core",
    "app/database",
    "app/models",
    "app/onboarding",
    "app/rag",
    "app/schemas",
    "app/services",
]

files = [
    "app/__init__.py",
    "app/main.py",

    "app/core/__init__.py",
    "app/core/config.py",

    "app/database/__init__.py",
    "app/database/db.py",

    "app/auth/__init__.py",

    "app/chat/__init__.py",
    "app/chat/router.py",

    "app/onboarding/__init__.py",

    "app/booking/__init__.py",

    "app/rag/__init__.py",
    "app/rag/ingest.py",
    "app/rag/retriever.py",

    "app/models/__init__.py",

    "app/schemas/__init__.py",

    "app/services/__init__.py",

    "app/api/__init__.py",
    "app/api/routes/__init__.py",
]

for folder in folders:
    Path(folder).mkdir(parents=True, exist_ok=True)

for file in files:
    Path(file).touch(exist_ok=True)

print("Project structure created successfully!")