from pathlib import Path

import faiss
import numpy as np

from pypdf import PdfReader

from sentence_transformers import (
    SentenceTransformer
)


MODEL = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

KNOWLEDGE_BASE_DIR = Path(
    "knowledge_base"
)

TEXT_OUTPUT_FILE = (
    KNOWLEDGE_BASE_DIR /
    "extracted_text.txt"
)

INDEX_FILE = (
    KNOWLEDGE_BASE_DIR /
    "index.faiss"
)

CHUNKS_FILE = (
    KNOWLEDGE_BASE_DIR /
    "chunks.npy"
)


def extract_text_from_pdfs():

    pdf_files = list(
        KNOWLEDGE_BASE_DIR.glob(
            "*.pdf"
        )
    )

    if not pdf_files:

        raise FileNotFoundError(
            "No PDF files found in knowledge_base/"
        )

    full_text = ""

    for pdf_file in pdf_files:

        print(
            f"Reading: {pdf_file.name}"
        )

        reader = PdfReader(
            str(pdf_file)
        )

        for page in reader.pages:

            page_text = (
                page.extract_text()
            )

            if page_text:

                full_text += (
                    page_text + "\n"
                )

    TEXT_OUTPUT_FILE.write_text(
        full_text,
        encoding="utf-8"
    )

    print(
        f"Saved extracted text to "
        f"{TEXT_OUTPUT_FILE}"
    )

    return full_text


def create_chunks(
    text: str,
    chunk_size: int = 500
):

    chunks = []

    for i in range(
        0,
        len(text),
        chunk_size
    ):

        chunk = text[
            i:i + chunk_size
        ].strip()

        if chunk:

            chunks.append(
                chunk
            )

    return chunks


def ingest():

    text = (
        extract_text_from_pdfs()
    )

    chunks = (
        create_chunks(
            text=text,
            chunk_size=500
        )
    )

    print(
        f"Created {len(chunks)} chunks."
    )

    embeddings = MODEL.encode(
        chunks,
        convert_to_numpy=True
    )

    embeddings = embeddings.astype(
        np.float32
    )

    dimension = (
        embeddings.shape[1]
    )

    index = faiss.IndexFlatL2(
        dimension
    )

    index.add(
        embeddings
    )

    faiss.write_index(
        index,
        str(INDEX_FILE)
    )

    np.save(
        CHUNKS_FILE,
        np.array(
            chunks,
            dtype=object
        )
    )

    print(
        f"Saved FAISS index: "
        f"{INDEX_FILE}"
    )

    print(
        f"Saved chunks: "
        f"{CHUNKS_FILE}"
    )

    print(
        f"Ingested "
        f"{len(chunks)} chunks successfully."
    )


if __name__ == "__main__":
    ingest()