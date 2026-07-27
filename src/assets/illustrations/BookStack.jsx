/**
 * BookStack — Illustrative icon of stacked books for the Services "Reading program" card.
 * A stylized stack of 3 books with varied colors and a small bookmark.
 */
export default function BookStack({ className = "", width = 80, height = 80, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Bottom book (navy/dark) */}
      <rect x="12" y="52" width="56" height="14" rx="3" fill="#1B1F3B" />
      <rect x="12" y="52" width="56" height="3" rx="1" fill="#2A3050" />
      {/* Spine */}
      <line x1="14" y1="55" x2="14" y2="64" stroke="#3A4565" strokeWidth="1" />

      {/* Middle book (blue, slightly offset) */}
      <g transform="rotate(-3 40 44)">
        <rect x="15" y="38" width="50" height="13" rx="3" fill="#2F6FED" />
        <rect x="15" y="38" width="50" height="3" rx="1" fill="#1E4FBB" />
        <line x1="17" y1="41" x2="17" y2="49" stroke="#4A8AFF" strokeWidth="1" />
      </g>

      {/* Top book (orange/accent, offset other direction) */}
      <g transform="rotate(4 40 30)">
        <rect x="18" y="26" width="44" height="12" rx="2" fill="#FDBB30" />
        <rect x="18" y="26" width="44" height="3" rx="1" fill="#E8A61E" />
        <line x1="20" y1="29" x2="20" y2="36" stroke="#D4941A" strokeWidth="1" />
        {/* Bookmark ribbon */}
        <path d="M52 26 L52 18 L55 22 L58 18 L58 26" fill="#EF5350" />
      </g>

      {/* Small reading glasses on top */}
      <ellipse cx="38" cy="22" rx="6" ry="4" fill="none" stroke="#1B1F3B" strokeWidth="1.2" opacity="0.3" />
      <ellipse cx="52" cy="22" rx="6" ry="4" fill="none" stroke="#1B1F3B" strokeWidth="1.2" opacity="0.3" />
      <line x1="44" y1="22" x2="46" y2="22" stroke="#1B1F3B" strokeWidth="1" opacity="0.3" />
      <line x1="32" y1="22" x2="28" y2="20" stroke="#1B1F3B" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
