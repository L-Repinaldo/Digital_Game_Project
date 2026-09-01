from dataclasses import dataclass


@dataclass
class WordBank:

    words: list[Word] 




@dataclass
class Word:

    word: str = ""
    description: str= ""