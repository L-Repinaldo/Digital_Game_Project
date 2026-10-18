
export interface GameState {
    word: string;
    context: string;
    category: string;
    masked_word: string;
    attempts: number;
    max_attempts: number;
    guessed_letters: string[];
    wrong_letters: string[];
    hints_used: number;
    answer?: string;
}

export interface GuessResponse {
    correct: boolean;
    word: string;
    attempts: number;
    won: boolean;
    lost: boolean;
}
