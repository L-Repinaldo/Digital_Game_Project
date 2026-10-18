class GameEngine:

    def __init__(self, word):
        self.word = word
        self.word = word.word.upper()

        self.guessed_letters = set()
        self.wrong_letters = set()

        self.max_attempts = 6
        self.attempts = self.max_attempts

        self.hints_used = 0

    def guess(self, letter):
        letter = letter.upper()

        if not letter.isalpha():
            return False

        if letter in self.guessed_letters:
            return False

        self.guessed_letters.add(letter)

        if letter not in self.word:
            self.wrong_letters.add(letter)
            self.attempts -= 1
            return False

        return True

    def is_won(self):
        return all(
            char in self.guessed_letters
            for char in self.word
            if char.isalpha()
        )

    def is_lost(self):
        return self.attempts <= 0

    def is_finished(self):
        return self.is_won() or self.is_lost()

    def masked_word(self):
        result = []

        for char in self.word:
            if char == " ":
                result.append(" ")
            elif char in self.guessed_letters:
                result.append(char)
            else:
                result.append("_")

        return " ".join(result)