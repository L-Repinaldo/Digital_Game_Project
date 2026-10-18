
interface HangmanProps {
  mistakes: number;
  maxAttempts: number;
}

export default function Hangman({
  mistakes,
  maxAttempts,
}: HangmanProps) {
  const parts = [
    <circle key="head" cx="140" cy="55" r="17" />,
    <line key="body" x1="140" y1="72" x2="140" y2="120" />,
    <line key="left-arm" x1="140" y1="85" x2="115" y2="105" />,
    <line key="right-arm" x1="140" y1="85" x2="165" y2="105" />,
    <line key="left-leg" x1="140" y1="120" x2="117" y2="150" />,
    <line key="right-leg" x1="140" y1="120" x2="163" y2="150" />,
  ];

  const visibleParts = Math.min(
    mistakes,
    parts.length,
    maxAttempts,
  );

  return (
    <div className="hangman">
      <svg
        viewBox="0 0 220 180"
        role="img"
        aria-label={`Forca: ${mistakes} erros`}
      >
        <g className="gallows">
          <line x1="30" y1="165" x2="190" y2="165" />
          <line x1="65" y1="165" x2="65" y2="15" />
          <line x1="65" y1="15" x2="140" y2="15" />
          <line x1="140" y1="15" x2="140" y2="38" />
        </g>

        <g className="hangman-parts">
          {parts.slice(0, visibleParts)}
        </g>
      </svg>
    </div>
  );
}
