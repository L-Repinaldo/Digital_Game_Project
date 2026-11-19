
import type {
  GameState,
  GuessResponse,
  HintResponse,
} from "../types/types";

const API_URL = "/api";

interface ApiError {
  error?: string;
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
  const response = await fetch(`${API_URL}/game/`);
  return handleResponse<GameState>(response);
}

export async function guessLetter(
  letter: string
): Promise<GuessResponse> {
  const response = await fetch(`${API_URL}/game/guess`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ letter }),
  });

  return handleResponse<GuessResponse>(response);
}

export async function consumeHint(): Promise<HintResponse> {
  const response = await fetch(`${API_URL}/game/hint`, {
    method: "POST",
  });

  return handleResponse<HintResponse>(response);
}
2