LETTER_CORRECT = 10
LETTER_WRONG = -5
HINT_COST = -20
WORD_COMPLETED = 100


def calculate_score(
    correct_letters: int,
    wrong_letters: int,
    hints_used: int,
    completed: bool ) -> int:

    score = 0

    score += correct_letters * LETTER_CORRECT
    score += wrong_letters * LETTER_WRONG
    score -= hints_used * abs(HINT_COST)

    if completed:
        score += WORD_COMPLETED

    return max(score, 0)