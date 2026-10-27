import Keyboard from "../components/Keyboard";
import Hangman from "../components/Hangman";
import GameResultModal from "../components/GameResultModal";
import useGame from "../hooks/useGame";

export default function GamePage() {
  const {
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
  } = useGame();

  if (loading) {
    return (
      <main className="page">
        <p className="loading">Preparando sua partida...</p>
      </main>
    );
  }

  if (!game) {

    return (
      <main className="page">
        <section className="error-panel">
          <h1>Fiscal Forca</h1>
          <p>{error || "Não foi possível carregar o jogo."}</p>
          <button className="primary-button" onClick={loadGame}>
            Tentar novamente
          </button>
        </section>
      </main>
    );
  }

  const availableHints = game.hints.length - hintsUsed;
  const canUseHint = !finished && availableHints > 0 && game.attempts > 1;

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Fiscal Forca">
          <span className="brand-icon">F</span>
          <span>FISCAL FORCA</span>
        </a>

        <span className="round-label">DESAFIO DE PALAVRAS</span>
      </header>

      <section className="game-layout">
        <div className="game-main">
          <div className="eyebrow">
            <span className="status-dot" />
            {game.category || "CONHECIMENTO"}
          </div>

          <h1>Descubra o conceito</h1>

          <p className="subtitle">
            Leia o contexto e descubra a palavra, uma letra por vez.
          </p>

          <section className="context-card">
            <span className="card-label">CONTEXTO</span>
            <p>{game.context}</p>
          </section>

          <section
            className="word-panel"
            aria-label={`Palavra: ${game.masked_word}`}
          >
            <div className="word-display">
              {game.masked_word.split(" ").map((char, index) =>
                char === "" ? null : (
                  <span
                    className={
                      char === "_" ? "word-slot hidden-letter" : "word-slot"
                    }
                    key={`${index}-${char}`}
                  >
                    {char}
                  </span>
                ),
              )}
            </div>
          </section>

          <section className="keyboard-panel">
            <div className="section-heading">
              <span>ESCOLHA UMA LETRA</span>
              <span className="keyboard-hint">A — Z</span>
            </div>

            <Keyboard
              guessedLetters={game.guessed_letters}
              wrongLetters={game.wrong_letters}
              disabled={finished}
              onGuess={handleGuess}
            />
          </section>

          {feedback && (
            <p className="feedback" role="status" aria-live="polite">
              {feedback}
            </p>
          )}

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}

          {feedback && !finished && (
            <p className="feedback" role="status" aria-live="polite">
              {feedback}
            </p>
          )}
        </div>

        <aside className="game-sidebar">
          <div className="visual-card">
            <div className="section-heading">
              <span>SUAS VIDAS</span>

              <span className="attempt-counter">
                {game.attempts}/{game.max_attempts}
              </span>
            </div>

            <Hangman
              mistakes={game.max_attempts - game.attempts}
              maxAttempts={game.max_attempts}
            />

            <div className="lives">
              {Array.from({ length: game.max_attempts }, (_, index) => (
                <span
                  key={index}
                  className={index < game.attempts ? "life life-active" : "life"}
                  aria-label={
                    index < game.attempts ? "Vida restante" : "Vida perdida"
                  }
                />
              ))}
            </div>

            <p className="attempt-caption">
              {game.attempts === 1
                ? "Última vida. Atenção!"
                : `${game.attempts} vidas restantes`}
            </p>
          </div>

          <div className="hints-card">
            <h2>Dicas</h2>

            <p>
              Cada dica utilizada custa uma vida. Use-as com estratégia!
            </p>

            <p>
              Dicas utilizadas: {hintsUsed}/{game.hints.length}
            </p>

            {availableHints > 0 && !finished && (
              <button
                className="primary-button"
                onClick={useHint}
                disabled={!canUseHint}
                style={{ display: "block", visibility: "visible" }}
              >
                {game.attempts <= 1
                  ? "Vidas insuficientes"
                  : "Usar dica (-1 vida)"}
              </button>
            )}

            {hintsUsed > 0 && (
              <ul>
                {game.hints.slice(0, hintsUsed).map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            )}

            {availableHints === 0 && (
              <p>Você já utilizou todas as dicas disponíveis.</p>
            )}
          </div>
        </aside>
      </section>
      
      {finished && (
          <GameResultModal
            won={won}
            answer={game.answer ?? "Não disponível"}
            explanation={game.explanation}
            onPlayAgain={loadGame}
          />
        )}

      <footer className="footer">
        <span>kjdhvyfs</span>
        <span>Aprender também pode ser um desafio.</span>
      </footer>
    </main>
  );
}
