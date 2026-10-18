

const API_URL = "http://127.0.0.1:5000/api";

interface ApiError {
  error?: string;
}

interface GameState {
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
}

interface GuessResult {
  correct: boolean;
  word: string;
  attempts: number;
  won: boolean;
  lost: boolean;
  answer?: string;
  hints: string[];
  explanation: string;
}

interface HintResult {
  hint: string;
  attempts: number;
  hints_used: number;
}

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json();

  if (!response.ok) {
    const errorData = data as ApiError;
    throw new Error(errorData.error ?? `Erro HTTP: ${response.status}`);
  }

  return data as T;
}

export async function startGame(): Promise<GameState> {
  const response = await fetch(`${API_URL}/game/`, {
    credentials: "include",
  });

  return handleResponse<GameState>(response);
}

export async function guessLetter(letter: string): Promise<GuessResult> {
  const response = await fetch(`${API_URL}/game/guess`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ letter }),
  });

  return handleResponse<GuessResult>(response);
}


export async function consumeHint(): Promise<HintResult> {
  const response = await fetch(`${API_URL}/game/hint`, {
    method: "POST",
    credentials: "include",
  });

  return handleResponse<HintResult>(response);
}
