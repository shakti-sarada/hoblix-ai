from groq import Groq

from app.core.config import settings


client = Groq(
    api_key=settings.GROQ_API_KEY
)


class LLMService:

    @staticmethod
    def generate(
        prompt: str
    ):

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.2,
            max_tokens=500
        )

        return (
            response
            .choices[0]
            .message.content
        )