
interface KeyboardProps {
  guessedLetters: string[];
  wrongLetters: string[];
  disabled: boolean;
  onGuess: (letter: string) => void;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({
  guessedLetters,
  wrongLetters,
  disabled,
  onGuess,
}: KeyboardProps) {
  return (
    <div className="keyboard" aria-label="Teclado de letras">
      {alphabet.map((letter) => {
        const guessed = guessedLetters.includes(letter);
        const wrong = wrongLetters.includes(letter);
        const used = guessed || wrong;

        return (
          <button
            key={letter}
            type="button"
            className={[
              "key",
              guessed ? "key-correct" : "",
              wrong ? "key-wrong" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            disabled={disabled || used}
            onClick={() => onGuess(letter)}
            aria-label={`Letra ${letter}${used ? ", já utilizada" : ""}`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
