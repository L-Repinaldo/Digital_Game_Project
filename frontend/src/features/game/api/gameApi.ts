import type { GameState, GuessResponse, HintResponse } from "../types/types";
import { applyGuess, applyHint, hasLost, hasWon, isFinished, maskedWord } from "../logic/gameRules";
import { currentGame, initializeSession, markCurrentWordCompleted, startNextGame, toPublicGameState } from "../logic/gameSession";
import { loadWordBank } from "../logic/wordBank";

let initialization: Promise<void> | undefined;

async function ensureInitialized(): Promise<void> {
  initialization ??= loadWordBank().then(initializeSession).catch((error: unknown) => {
    initialization = undefined;
    throw error;
  });
  await initialization;
}

export async function startGame(): Promise<GameState> {
  await ensureInitialized();
  return toPublicGameState(startNextGame());
}

export async function guessLetter(letter: string): Promise<GuessResponse> {
  const state = currentGame();
  if (isFinished(state)) throw new Error("Esta partida já terminou.");
  const correct = applyGuess(state, letter);
  const won = hasWon(state);
  const lost = hasLost(state);
  if (won) markCurrentWordCompleted();

  return {
    correct,
    word: maskedWord(state),
    attempts: state.attempts,
    won,
    lost,
    ...(isFinished(state) ? { answer: state.word.word } : {}),
    hints: state.word.hints,
    explanation: state.word.explanation,
  };
}

export async function consumeHint(): Promise<HintResponse> {
  const state = currentGame();
  if (isFinished(state)) throw new Error("A partida já terminou.");
  const hint = applyHint(state);
  return { hint, attempts: state.attempts, hints_used: state.hintsUsed };
}
