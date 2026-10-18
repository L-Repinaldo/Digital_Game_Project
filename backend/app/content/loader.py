import json
from pathlib import Path

from ..core import WordBank, Word


DATA_PATH = Path("data/word.json")


def load_words() -> WordBank:
    with DATA_PATH.open("r", encoding="utf-8") as file:
        data = json.load(file)

    return WordBank( words= [
        Word(**item)
        for item in data
    ])
