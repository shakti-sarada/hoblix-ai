from app.rag.prompt_builder import (
    PromptBuilder
)

prompt = (
    PromptBuilder.build(
        question="What amenities do you provide?",
        context="WiFi, Coffee, Parking"
    )
)

print(prompt)