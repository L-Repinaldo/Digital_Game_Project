import random

from src.load_word_bank import load_words



HANGMAN_STAGES = [
    """
    --------

    |      |
    |      
    |    
    |      
    |     
    - - - - - -
    """,
    """
    --------

    |      |
    |      O
    |    
    |      
    |     
    - - - - - -
    """,
    """
    --------

    |      |
    |      O

    |      |
    |      |
    |     
    - - - - - -
    """,
    """
    --------

    |      |
    |      O

    |     /|
    |      |
    |     
    - - - - - -
    """,
    """
    --------

    |      |
    |      O

    |     /|\\
    |      |
    |     
    - - - - - -
    """,
    """
    --------

    |      |
    |      O

    |     /|\\
    |      |
    |     / 
    - - - - - -
    """,
    """
    --------

    |      |
    |      O

    |     /|\\
    |      |
    |     / \\
    - - - - - -
    """
]



def play_hangman():

    print("\n--- Welcome to Terminal Hangman! ---", "\n --- Choose a difficulty level: easy, medium, hard ---")

    while True:

        level= input("Enter difficulty level: ").strip().lower()

        if level in ["easy", "medium", "hard"]:
            break

    secret= random.choice(load_words(level=level).words)

    secret_word= secret.word.lower()

    guessed_letters = set()
    incorrect_guesses = 0
    max_lives = len(HANGMAN_STAGES) - 1 

    while incorrect_guesses < max_lives:
    
            print(HANGMAN_STAGES[incorrect_guesses])
            
    
            word_display = [letter if letter in guessed_letters else "_" for letter in secret_word]
            print(f"Word to guess: {' '.join(word_display)}")
            print(f"Guessed letters: {', '.join(sorted(guessed_letters)) if guessed_letters else 'None'}")
            print(f"Remaining lives: {max_lives - incorrect_guesses}")
            
    
            if "_" not in word_display:
                print(f"\nCongratulations! You guessed the word: {secret_word.upper()}!", "\n", "Description: ", secret.description)
                break
    
            guess = input("\nGuess a letter: ").strip().lower()
    
            if len(guess) != 1 or not guess.isalpha():
                print("Invalid input! Please enter a single alphabetic letter.")
                continue
            
            if guess in guessed_letters:
                print(f"You already guessed '{guess}'. Try a different letter.")
                continue
    
            guessed_letters.add(guess)
    
            if guess in secret_word:
                print(f"Good job! '{guess}' is in the word.")
            else:
                print(f"Oops! '{guess}' is not in the word.")
                incorrect_guesses += 1
    
    else:
        print(HANGMAN_STAGES[incorrect_guesses])
        print(f"💀 Game Over! You ran out of lives. The word was: {secret_word.upper()}")
    