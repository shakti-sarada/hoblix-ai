from pathlib import Path

files = [
    "app/database/base.py",
    "app/database/session.py",
    "app/database/db.py",
]

for file in files:
    Path(file).touch(exist_ok=True)

print("Database files created.")