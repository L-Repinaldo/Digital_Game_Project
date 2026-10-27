
interface GameResultModalProps {
  won: boolean;
  answer: string;
  explanation: string;
  onPlayAgain: () => void;
}

export default function GameResultModal({
  won,
  answer,
  explanation,
  onPlayAgain,
}: GameResultModalProps) {
  return (
    <div
      className="result-modal-overlay"
      role="presentation"
    >
      <section
        className={`result-modal ${won ? "result-modal-win" : "result-modal-loss"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="result-modal-title"
      >
        <div className="result-modal-icon" aria-hidden="true">
          {won ? "✓" : "X"}
        </div>

        <h2 id="result-modal-title">
          {won ? "Parabéns! Você venceu!" : "Fim de jogo!"}
        </h2>

        <p>
          {won
            ? "Você descobriu o conceito corretamente."
            : "Suas vidas acabaram. Não desista, tente novamente!"}
        </p>

        <p className="result-modal-answer">
          A resposta era: <strong>{answer}</strong>
        </p>

        <div className="result-modal-explanation">
          <h3>Entenda o conceito</h3>
          <p>{explanation}</p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={onPlayAgain}
        >
          Jogar novamente
        </button>
      </section>
    </div>
  );
}
