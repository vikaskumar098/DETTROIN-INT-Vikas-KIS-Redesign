/**
 * ChildReading — Flat-style illustration of a girl sitting on a stack of books, reading.
 * Used near the FAQ section and volunteer card. The girl has dark hair with a braid,
 * wearing a blue top, sitting on colorful stacked books.
 */
export default function ChildReading({ className = "", width = 220, height = 280, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 280"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* --- Stack of books --- */}
      {/* Book 1 (bottom, widest - navy) */}
      <rect x="50" y="220" width="120" height="18" rx="3" fill="#1B1F3B" />
      <rect x="50" y="220" width="120" height="4" rx="1" fill="#2A3050" />
      {/* Book 2 (orange) */}
      <rect x="55" y="204" width="110" height="16" rx="3" fill="#FDBB30" />
      <rect x="55" y="204" width="110" height="4" rx="1" fill="#E8A61E" />
      {/* Book 3 (blue) */}
      <rect x="60" y="190" width="100" height="14" rx="3" fill="#2F6FED" />
      <rect x="60" y="190" width="100" height="3" rx="1" fill="#1E4FBB" />
      {/* Book 4 (top, red) */}
      <rect x="65" y="178" width="90" height="12" rx="2" fill="#EF5350" />
      <rect x="65" y="178" width="90" height="3" rx="1" fill="#D32F2F" />

      {/* Book spines detail */}
      <line x1="52" y1="224" x2="52" y2="236" stroke="#3A4060" strokeWidth="0.8" />
      <line x1="57" y1="208" x2="57" y2="218" stroke="#D4941A" strokeWidth="0.8" />
      <line x1="62" y1="193" x2="62" y2="202" stroke="#1A55CC" strokeWidth="0.8" />

      {/* --- Girl sitting on books --- */}
      {/* Legs (hanging off books) */}
      <path
        d="M90 178 C88 190 85 210 82 225"
        stroke="#1B1F3B"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M120 178 C122 190 125 210 128 225"
        stroke="#1B1F3B"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Shoes */}
      <ellipse cx="80" cy="228" rx="10" ry="5" fill="#FDBB30" />
      <ellipse cx="130" cy="228" rx="10" ry="5" fill="#FDBB30" />

      {/* Body (blue top) */}
      <path
        d="M88 130 C85 140 84 155 86 170 C90 180 118 180 122 170 C124 155 123 140 120 130 Z"
        fill="#2F6FED"
      />

      {/* Left arm (holding open book) */}
      <path
        d="M88 145 C78 148 68 152 60 150"
        stroke="#F5B898"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right arm (holding open book) */}
      <path
        d="M120 145 C130 148 140 152 148 150"
        stroke="#F5B898"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Open book in hands */}
      {/* Left page */}
      <path
        d="M58 142 L58 162 C58 165 70 168 104 165 L104 145 C80 148 62 145 58 142Z"
        fill="white"
        stroke="#E0E0E0"
        strokeWidth="0.8"
      />
      {/* Right page */}
      <path
        d="M150 142 L150 162 C150 165 138 168 104 165 L104 145 C128 148 146 145 150 142Z"
        fill="#F5F5F5"
        stroke="#E0E0E0"
        strokeWidth="0.8"
      />
      {/* Book spine */}
      <line x1="104" y1="143" x2="104" y2="166" stroke="#BDBDBD" strokeWidth="1.5" />
      {/* Text lines on pages */}
      <line x1="68" y1="150" x2="95" y2="150" stroke="#E0E0E0" strokeWidth="1" />
      <line x1="68" y1="154" x2="90" y2="154" stroke="#E0E0E0" strokeWidth="1" />
      <line x1="68" y1="158" x2="92" y2="158" stroke="#E0E0E0" strokeWidth="1" />
      <line x1="112" y1="150" x2="140" y2="150" stroke="#E0E0E0" strokeWidth="1" />
      <line x1="112" y1="154" x2="135" y2="154" stroke="#E0E0E0" strokeWidth="1" />
      <line x1="112" y1="158" x2="138" y2="158" stroke="#E0E0E0" strokeWidth="1" />

      {/* Hands holding book */}
      <circle cx="58" cy="152" r="4" fill="#F5B898" />
      <circle cx="150" cy="152" r="4" fill="#F5B898" />

      {/* Neck */}
      <rect x="100" y="115" width="8" height="15" rx="4" fill="#F5B898" />

      {/* Head */}
      <ellipse cx="104" cy="100" rx="22" ry="24" fill="#F5B898" />

      {/* Hair (dark, with side braid) */}
      <path
        d="M82 96 C82 75 92 64 104 62 C116 64 126 75 126 96 C126 88 122 83 117 85 C112 78 96 78 91 85 C86 83 82 88 82 96Z"
        fill="#1B1F3B"
      />
      {/* Side hair */}
      <path d="M82 96 C80 106 80 116 84 124" stroke="#1B1F3B" strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* Braid on right side */}
      <path d="M126 96 C128 106 128 116 126 126" stroke="#1B1F3B" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Braid details */}
      <circle cx="127" cy="108" r="2" fill="#2A3050" />
      <circle cx="127" cy="116" r="2" fill="#2A3050" />
      <circle cx="126" cy="124" r="2" fill="#2A3050" />
      {/* Hair bow/band */}
      <circle cx="126" cy="128" r="3.5" fill="#FDBB30" />

      {/* Face */}
      {/* Eyes (looking down at book) */}
      <ellipse cx="97" cy="100" rx="2.5" ry="1.5" fill="#1B1F3B" />
      <ellipse cx="111" cy="100" rx="2.5" ry="1.5" fill="#1B1F3B" />
      {/* Eyelashes */}
      <path d="M94 98 L93 96" stroke="#1B1F3B" strokeWidth="1" strokeLinecap="round" />
      <path d="M114 98 L115 96" stroke="#1B1F3B" strokeWidth="1" strokeLinecap="round" />
      {/* Gentle smile */}
      <path
        d="M99 108 C102 112 106 112 109 108"
        stroke="#1B1F3B"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Blush */}
      <circle cx="91" cy="106" r="4" fill="#FFAB91" opacity="0.35" />
      <circle cx="117" cy="106" r="4" fill="#FFAB91" opacity="0.35" />

      {/* --- Small decorative elements --- */}
      {/* Stars/sparkles around the reading child */}
      <path d="M40 100 L42 95 L44 100 L42 105Z" fill="#FDBB30" opacity="0.4" />
      <path d="M170 90 L172 85 L174 90 L172 95Z" fill="#2F6FED" opacity="0.3" />
      <circle cx="180" cy="130" r="3" fill="#FDBB30" opacity="0.3" />
      <circle cx="35" cy="140" r="2.5" fill="#2F6FED" opacity="0.25" />
    </svg>
  );
}
