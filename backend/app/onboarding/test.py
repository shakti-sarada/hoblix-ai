from sqlalchemy import text

from app.database.db import SessionLocal

db = SessionLocal()

try:

    db.execute(
        text(
            """
            ALTER TABLE profiles
            ADD COLUMN full_name TEXT
            """
        )
    )

    db.commit()

    print(
        "full_name column added successfully."
    )

except Exception as e:

    print(
        f"Error: {e}"
    )