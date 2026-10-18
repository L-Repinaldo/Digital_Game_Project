

from ..core import Word, WordBank


def get_word(word_id: int, word_bank: WordBank) -> Word:

    for word in word_bank.words:
        if word.id == word_id:
            return word

    raise ValueError(f"Palavra com ID {word_id} não encontrada.")
