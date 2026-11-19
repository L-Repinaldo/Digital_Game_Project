
export interface GameState {
  context: string;
  category: string;
  masked_word: string;
  attempts: number;
  max_attempts: number;
  guessed_letters: string[];
  wrong_letters: string[];
  hints: string[];
  hints_used: number;
  explanation: string;
  answer?: string;
}

export interface GuessResponse {
  correct: boolean;
  word: string;
  attempts: number;
  won: boolean;
  lost: boolean;
  answer?: string;
  hints: string[];
  explanation: string;
}

export interface HintResponse {
  hint: string;
  attempts: number;
  hints_used: number;
}
