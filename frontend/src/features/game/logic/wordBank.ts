import type { WordEntry } from "../types/types";

const WORD_BANK_URL = `${import.meta.env.BASE_URL}word.json`;

let wordBankPromise: Promise<WordEntry[]> | undefined;

export function loadWordBank(): Promise<WordEntry[]> {
  wordBankPromise ??= fetch(WORD_BANK_URL).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Não foi possível carregar o banco de palavras (${response.status}).`);
    }

    const words: unknown = await response.json();
    if (!Array.isArray(words) || !words.every(isWordEntry)) {
      throw new Error("O banco de palavras possui um formato inválido.");
    }
    if (words.length === 0) {
      throw new Error("Nenhuma palavra disponível.");
    }
    return words;
  }).catch((error: unknown) => {
    wordBankPromise = undefined;
    throw error;
  });

  return wordBankPromise;
}

function isWordEntry(value: unknown): value is WordEntry {
  if (typeof value !== "object" || value === null) return false;
  const word = value as Record<string, unknown>;
  return typeof word.id === "number" && typeof word.word === "string" &&
    typeof word.category === "string" && typeof word.context === "string" &&
    Array.isArray(word.hints) && word.hints.every((hint) => typeof hint === "string") &&
    typeof word.explanation === "string";
}
