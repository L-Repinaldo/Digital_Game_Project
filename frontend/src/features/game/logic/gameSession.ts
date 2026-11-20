import type { GameState, WordEntry } from "../types/types";
import { createGameState, type InternalGameState } from "./gameRules";

const COMPLETED_WORDS_KEY = "fiscal-forca.completed-word-ids";
let activeGame: InternalGameState | null = null;
let wordBank: WordEntry[] = [];
let lastWordId: number | undefined;
const sessionCompletedWordIds = new Set<number>();

export function initializeSession(words: WordEntry[]): void {
  wordBank = words;
  activeGame = null;
  lastWordId = undefined;
  sessionCompletedWordIds.clear();
  // Completion progress is scoped to this loaded tab session; stale localStorage
  // from older versions cannot alter a new game session.
  try {
    localStorage.removeItem(COMPLETED_WORDS_KEY);
  } catch {
    // The game remains usable when browser storage is unavailable.
  }
}

export function currentGame(): InternalGameState {
  if (!activeGame) throw new Error("Nenhuma partida ativa. Inicie uma nova partida.");
  return activeGame;
}

export function startNextGame(): InternalGameState {
  if (wordBank.length === 0) throw new Error("Nenhuma palavra disponível.");
  const completed = new Set([...readCompletedWords(), ...sessionCompletedWordIds]);
  let available = wordBank.filter((word) => !completed.has(word.id));
  if (available.length === 0) {
    try {
      localStorage.removeItem(COMPLETED_WORDS_KEY);
    } catch {
      // Keep the game playable if browser storage is disabled.
    }
    sessionCompletedWordIds.clear();
    available = wordBank;
  }
  if (available.length > 1 && lastWordId !== undefined) {
    const excludingLast = available.filter((word) => word.id !== lastWordId);
    if (excludingLast.length > 0) available = excludingLast;
  }
  const selected = available[Math.floor(Math.random() * available.length)];
  activeGame = createGameState(selected);
  lastWordId = selected.id;
  return activeGame;
}

export function markCurrentWordCompleted(): void {
  const completed = readCompletedWords();
  const id = currentGame().word.id;
  if (!completed.includes(id) && !sessionCompletedWordIds.has(id)) {
    completed.push(id);
    sessionCompletedWordIds.add(id);
    try {
      localStorage.setItem(COMPLETED_WORDS_KEY, JSON.stringify(completed));
    } catch {
      // Progress survives in memory for the current page session.
    }
  }
}

export function toPublicGameState(state: InternalGameState): GameState {
  return {
    context: state.word.context,
    category: state.word.category,
    masked_word: state.attempts === 0 ? state.word.word.toUpperCase().split("").join(" ") :
      [...state.word.word.toUpperCase()].map((char) => char === " " ? " " : state.guessedLetters.has(char) ? char : "_").join(" "),
    attempts: state.attempts,
    max_attempts: 6,
    guessed_letters: [...state.guessedLetters].sort(),
    wrong_letters: [...state.wrongLetters].sort(),
    hints: state.word.hints,
    hints_used: state.hintsUsed,
    explanation: state.word.explanation,
    ...(state.attempts === 0 || [...state.word.word.toUpperCase()].every((char) => !/^\p{L}$/u.test(char) || state.guessedLetters.has(char))
      ? { answer: state.word.word } : {}),
  };
}

function readCompletedWords(): number[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(COMPLETED_WORDS_KEY) ?? "[]");
    return Array.isArray(value) && value.every((id) => Number.isInteger(id)) ? value : [];
  } catch {
    return [];
  }
}
