import faiss
import numpy as np

from sentence_transformers import (
    SentenceTransformer
)


MODEL = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

INDEX = faiss.read_index(
    "knowledge_base/index.faiss"
)

CHUNKS = np.load(
    "knowledge_base/chunks.npy",
    allow_pickle=True
)

print(
    f"Loaded {len(CHUNKS)} chunks."
)


class Retriever:

    @staticmethod
    def search(
        query: str,
        top_k: int = 3
    ):

        query_embedding = (
            MODEL.encode(
                [query],
                convert_to_numpy=True
            ).astype(np.float32)
        )

        distances, indices = (
            INDEX.search(
                query_embedding,
                top_k
            )
        )

        results = []

        for idx in indices[0]:

            if idx < len(CHUNKS):

                results.append(
                    CHUNKS[idx]
                )

        return results