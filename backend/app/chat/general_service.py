from app.llm.llm_service import (
    LLMService
)


class GeneralService:

    @staticmethod
    def answer(
        message: str
    ):

        message_lower = (
            message.lower()
        )

        if any(
            phrase in message_lower
            for phrase in [
                "what can you do",
                "what do you do",
                "your capabilities",
                "help me with",
                "how can you help"
            ]
        ):

            return """
I can help you with:

• Answering questions about Hoblix coworking spaces
• Membership plans and pricing
• Amenities and facilities
• Booking meeting rooms and workspaces
• Checking booking availability
• Onboarding new users
• Providing information from the Hoblix knowledge base
• General conversation and support
"""

        if any(
            phrase in message_lower
            for phrase in [
                "what is your purpose",
                "what's your purpose",
                "who are you",
                "tell me about yourself"
            ]
        ):

            return """
I am Hoblix AI, your virtual assistant for Hoblix Coworking.

My purpose is to help users discover Hoblix services, answer questions, assist with bookings, guide onboarding, and provide quick access to information about our coworking spaces.
"""

        prompt = f"""
You are Hoblix AI.

Be friendly, concise and professional.

User:
{message}

Assistant:
"""

        return (
            LLMService.generate(
                prompt
            )
        )