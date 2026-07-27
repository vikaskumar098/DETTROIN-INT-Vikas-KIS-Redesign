/**
 * SpeechBubbleCharacter — Illustrative icon for the "English program" service card.
 * A playful character with a speech bubble containing "Hi!".
 */
export default function SpeechBubbleCharacter({ className = "", width = 90, height = 90, ...props }) {
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
      {/* Speech bubble */}
      <rect x="30" y="5" width="55" height="35" rx="12" fill="#DCEBFF" />
      {/* Bubble tail */}
      <polygon points="40,40 48,40 42,50" fill="#DCEBFF" />
      {/* "Hi!" text in bubble */}
      <text x="48" y="28" fontSize="16" fontWeight="700" fill="#2F6FED" fontFamily="Poppins, sans-serif" textAnchor="middle">
        Hi!
      </text>

      {/* Character body */}
      {/* Body circle */}
      <ellipse cx="32" cy="68" rx="16" ry="14" fill="#2F6FED" />
      {/* Head */}
      <circle cx="32" cy="52" r="12" fill="#F5B898" />
      {/* Hair */}
      <path
        d="M20 49 C20 40 25 36 32 35 C39 36 44 40 44 49 C44 45 41 42 38 44 C36 40 28 40 26 44 C23 42 20 45 20 49Z"
        fill="#1B1F3B"
      />
      {/* Eyes */}
      <circle cx="28" cy="52" r="1.8" fill="#1B1F3B" />
      <circle cx="36" cy="52" r="1.8" fill="#1B1F3B" />
      {/* Smile */}
      <path d="M29 56 C31 58 33 58 35 56" stroke="#1B1F3B" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Blush */}
      <circle cx="24" cy="55" r="2.5" fill="#FFAB91" opacity="0.35" />
      <circle cx="40" cy="55" r="2.5" fill="#FFAB91" opacity="0.35" />

      {/* Waving hand */}
      <path
        d="M48 62 C52 58 55 54 56 50"
        stroke="#F5B898"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="56" cy="49" r="3.5" fill="#F5B898" />
      {/* Fingers waving */}
      <path d="M54 46 L53 43" stroke="#F5B898" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 46 L56 42" stroke="#F5B898" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 47 L60 44" stroke="#F5B898" strokeWidth="2" strokeLinecap="round" />

      {/* Legs */}
      <line x1="26" y1="80" x2="24" y2="88" stroke="#1B1F3B" strokeWidth="4" strokeLinecap="round" />
      <line x1="38" y1="80" x2="40" y2="88" stroke="#1B1F3B" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
