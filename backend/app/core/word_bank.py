from dataclasses import dataclass


@dataclass
class Word:
    id: int
    word: str
    category: str
    context: str
    hints: list[str]
    explanation: str


@dataclass
class WordBank:

    words: list[Word] 
