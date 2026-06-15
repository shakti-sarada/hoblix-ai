from app.llm.llm_service import (
    LLMService
)

print(
    LLMService.generate(
        "What is Python?"
    )
)