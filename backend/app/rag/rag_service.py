from app.rag.retriever import (
    Retriever
)

from app.rag.prompt_builder import (
    PromptBuilder
)

from app.llm.llm_service import (
    LLMService
)


class RAGService:

    @staticmethod
    def answer(
        question: str,
        history: str = ""
    ):

        results = (
            Retriever.search(
                question
            )
        )

        context = "\n\n".join(
            results
        )

        prompt = (
            PromptBuilder.build(
                question=question,
                context=context,
                history=history
            )
        )

        return (
            LLMService.generate(
                prompt
            )
        )