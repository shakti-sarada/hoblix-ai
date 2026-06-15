class IntentRouter:

    @staticmethod
    def route(
        message: str
    ) -> str:

        message = message.lower()

        booking_keywords = [
            "book",
            "booking",
            "meeting room",
            "desk",
            "conference room",
            "workspace",
            "reservation"
        ]

        for keyword in booking_keywords:

            if keyword in message:

                return "booking"

        rag_keywords = [
            "price",
            "pricing",
            "cost",
            "cheapest",
            "cheap",
            "expensive",
            "amenities",
            "wifi",
            "parking",
            "hours",
            "plan",
            "plans",
            "membership",
            "facility",
            "facilities",
            "workspace"
        ]

        for keyword in rag_keywords:

            if keyword in message:

                return "rag"

        general_keywords = [
            "hi",
            "hello",
            "hey",
            "thanks",
            "thank you",
            "how are you",
            "who are you",
            "joke",
            "what can you do",
            "what do you do",
            "your purpose",
            "what is your purpose",
            "what's your purpose",
            "help me",
            "capabilities"
        ]

        for keyword in general_keywords:

            if keyword in message:

                return "general"

        return "onboarding"