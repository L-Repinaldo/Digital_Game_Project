import type { WordEntry } from "../types/types";

export const MAX_ATTEMPTS = 6;

export interface InternalGameState {
  word: WordEntry;
  guessedLetters: Set<string>;
  wrongLetters: Set<string>;
  attempts: number;
  hintsUsed: number;
}

export function createGameState(word: WordEntry): InternalGameState {
  return {
    word,
    guessedLetters: new Set(),
    wrongLetters: new Set(),
    attempts: MAX_ATTEMPTS,
    hintsUsed: 0,
  };
}

export function maskedWord(state: InternalGameState): string {
  return [...state.word.word.toUpperCase()]
    .map((char) => char === " " ? " " : state.guessedLetters.has(char) ? char : "_")
    .join(" ");
}

export function hasWon(state: InternalGameState): boolean {
  return [...state.word.word.toUpperCase()]
    .every((char) => !isLetter(char) || state.guessedLetters.has(char));
}

export function hasLost(state: InternalGameState): boolean {
  return state.attempts <= 0;
}

export function isFinished(state: InternalGameState): boolean {
  return hasWon(state) || hasLost(state);
}

export function applyGuess(state: InternalGameState, rawLetter: string): boolean {
  const letter = rawLetter.trim().toUpperCase();
  if ([...letter].length !== 1 || !isLetter(letter)) {
    throw new Error("Informe apenas uma letra válida.");
  }
  if (state.guessedLetters.has(letter)) {
    throw new Error("Você já tentou essa letra.");
  }

  state.guessedLetters.add(letter);
  if (!state.word.word.toUpperCase().includes(letter)) {
    state.wrongLetters.add(letter);
    state.attempts -= 1;
    return false;
  }
  return true;
}

export function applyHint(state: InternalGameState): string {
  if (state.attempts <= 1) {
    throw new Error("Você precisa ter pelo menos duas vidas para usar uma dica.");
  }
  if (state.hintsUsed >= state.word.hints.length) {
    throw new Error("Não há mais dicas disponíveis.");
  }

  const hint = state.word.hints[state.hintsUsed];
  state.attempts -= 1;
  state.hintsUsed += 1;
  return hint;
}

function isLetter(char: string): boolean {
  return /^\p{L}$/u.test(char);
}
