/**
 * MathSymbols — Illustrative icon for the "Math program" service card.
 * A playful composition of math symbols (numbers, plus, equals, pi)
 * arranged in a colorful, bouncy layout.
 */
export default function MathSymbols({ className = "", width = 90, height = 90, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 90"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Background circle */}
      <circle cx="45" cy="45" r="40" fill="#FDE7C7" opacity="0.5" />

      {/* Chalkboard / calculator shape */}
      <rect x="15" y="18" width="60" height="54" rx="8" fill="white" stroke="#E0E0E0" strokeWidth="1.5" />

      {/* Grid lines for calculator look */}
      <line x1="45" y1="18" x2="45" y2="72" stroke="#F0F0F0" strokeWidth="0.8" />
      <line x1="15" y1="45" x2="75" y2="45" stroke="#F0F0F0" strokeWidth="0.8" />

      {/* Math symbols */}
      {/* "2" */}
      <text x="28" y="40" fontSize="18" fontWeight="800" fill="#2F6FED" fontFamily="Poppins, sans-serif" textAnchor="middle">
        2
      </text>
      {/* "+" */}
      <text x="58" y="40" fontSize="20" fontWeight="700" fill="#FDBB30" fontFamily="Poppins, sans-serif" textAnchor="middle">
        +
      </text>
      {/* "3" */}
      <text x="28" y="65" fontSize="18" fontWeight="800" fill="#EF5350" fontFamily="Poppins, sans-serif" textAnchor="middle">
        3
      </text>
      {/* "=" */}
      <text x="58" y="65" fontSize="20" fontWeight="700" fill="#1B1F3B" fontFamily="Poppins, sans-serif" textAnchor="middle">
        =
      </text>

      {/* Result badge */}
      <circle cx="75" cy="18" r="12" fill="#FDBB30" />
      <text x="75" y="23" fontSize="14" fontWeight="800" fill="white" fontFamily="Poppins, sans-serif" textAnchor="middle">
        5
      </text>

      {/* π symbol floating */}
      <text x="10" y="22" fontSize="12" fontWeight="600" fill="#2F6FED" fontFamily="serif" opacity="0.4">
        π
      </text>

      {/* Small decorative dots */}
      <circle cx="82" cy="50" r="2" fill="#FDBB30" opacity="0.5" />
      <circle cx="8" cy="60" r="1.5" fill="#2F6FED" opacity="0.4" />
    </svg>
  );
}
