from src.core.word_bank import WordBank, Word


def load_words(level: str) -> WordBank:

    match level:
        case "easy":
            return _create_word_bank_easy()
        case "medium":
            return _create_word_bank_easy()
        case "hard":
            return _create_word_bank_easy()
        case _:
            raise ValueError(f"Invalid level: {level}. Choose from 'easy', 'medium', or 'hard'.")



# TODO pensar numa forma de não deixar hardcoded a lista de palavras, talvez um arquivo json ou txt que seja lido e carregado no WordBank


def _create_word_bank_easy() -> WordBank:

    words= [
        Word(word="python", description="A high-level programming language."),
    ]

    return WordBank(words=words)