import { useCallback, useEffect, useState } from "react";
import { guessLetter, startGame, consumeHint} from "../api/gameApi";
import type { GameState } from "../types/types";

export default function useGame() {
  const [game, setGame] = useState<GameState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const [hintsUsed, setHintsUsed] = useState(0);
  

  const loadGame = useCallback(async () => {
    setLoading(true);
    setError("");
    setFeedback("");

    try {
      const initial = await startGame();

      setGame(initial);
      setHintsUsed(initial.hints_used ?? 0);
    } catch {
      setGame(null);
      setError(
        "Não foi possível iniciar o jogo. Verifique se o Flask está ativo."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadGame();
  }, [loadGame]);

  const finished = game
    ? game.attempts <= 0 ||
      [...game.masked_word.replaceAll(" ", "")].every(
        (char) => char !== "_"
      )
    : false;

  const won = game
    ? [...game.masked_word.replaceAll(" ", "")].every(
        (char) => char !== "_"
      )
    : false;

  const handleGuess = async (letter: string) => {
    if (!game || finished) return;

    setError("");

    try {
      const result = await guessLetter(letter);

      setGame((current) => {
        if (!current) return current;

        return {
            ...current,
            masked_word: result.word,
            attempts: result.attempts,
            guessed_letters: result.correct
              ? [...current.guessed_letters, letter]
              : current.guessed_letters,
            wrong_letters: result.correct
              ? current.wrong_letters
              : [...current.wrong_letters, letter],
            answer: result.answer ?? current.answer,
            hints: result.hints,
            explanation: result.explanation,
          };
      });

      setFeedback(
        result.won
          ? "Parabéns! Você descobriu o conceito."
          : result.lost
            ? "Fim de jogo! Tente novamente."
            : result.correct
              ? "Boa! Essa letra faz parte do conceito."
              : "Essa letra não aparece no conceito."
      );
    } catch {
      setError("Não foi possível registrar a letra.");
    }
  };

  const useHint = async () => {
    if (!game || finished) return;

    if (game.attempts <= 1) {
      setError("Você precisa ter pelo menos duas vidas para usar uma dica.");
      return;
    }

    if (hintsUsed >= game.hints.length) {
      setError("Você já utilizou todas as dicas disponíveis.");
      return;
    }

    setError("");
    setFeedback("");

    try {
      const result = await consumeHint();

      setGame((current) => {
        if (!current) return current;

        return {
          ...current,
          attempts: result.attempts,
          hints_used: result.hints_used,
        };
      });

      setHintsUsed(result.hints_used);
      setFeedback(`Dica ${result.hints_used}: ${result.hint}`);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Não foi possível utilizar a dica."
      );
    }
  };

  return {
    game,
    loading,
    error,
    feedback,
    finished,
    won,
    loadGame,
    handleGuess,
    useHint,
    hintsUsed,
  };
}
