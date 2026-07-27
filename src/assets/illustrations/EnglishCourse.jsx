/**
 * EnglishCourse — Illustrative badge/icon showing "ENGLISH COURSE" in a 
 * stylized stamp/badge form. Used as a decorative element in the Services section.
 * Matches the KIS reference red stamp seen above the English program card.
 */
export default function EnglishCourse({ className = "", width = 90, height = 80, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 80"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Stamp background */}
      <rect x="5" y="5" width="80" height="60" rx="10" fill="#EF5350" transform="rotate(-5 45 35)" />
      {/* Inner border */}
      <rect x="10" y="10" width="70" height="50" rx="7" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" transform="rotate(-5 45 35)" />

      {/* Text */}
      <g transform="rotate(-5 45 35)">
        <text x="45" y="30" fontSize="10" fontWeight="800" fill="white" fontFamily="Poppins, sans-serif" textAnchor="middle" letterSpacing="2">
          ENGLISH
        </text>
        <text x="45" y="48" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="Poppins, sans-serif" textAnchor="middle" letterSpacing="1.5">
          COURSE
        </text>
      </g>

      {/* Small star */}
      <circle cx="16" cy="16" r="3" fill="#FDBB30" transform="rotate(-5 45 35)" />
      <circle cx="74" cy="50" r="2" fill="#FDBB30" transform="rotate(-5 45 35)" />
    </svg>
  );
}
