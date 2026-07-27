/**
 * ChildPeeking — Flat-style illustration of a small girl peeking from behind/below
 * something, used on the "Volunteer Program" highlight card. The child has dark hair,
 * is in a blue outfit, and peers curiously around the edge.
 */
export default function ChildPeeking({ className = "", width = 140, height = 160, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 160"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* --- Girl body (partially visible — peeking from bottom-right) --- */}

      {/* Body (blue dress) */}
      <path
        d="M70 80 C65 90 62 105 60 120 L120 120 C118 105 115 90 110 80 Z"
        fill="#2F6FED"
      />
      {/* Dress hem detail */}
      <path
        d="M60 120 C70 125 110 125 120 120"
        stroke="#1E4FBB"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Left arm (reaching/holding edge) */}
      <path
        d="M70 90 C60 88 50 82 45 75"
        stroke="#F5B898"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left hand gripping */}
      <circle cx="44" cy="74" r="5" fill="#F5B898" />

      {/* Right arm */}
      <path
        d="M110 90 C115 95 118 105 116 115"
        stroke="#F5B898"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right hand */}
      <circle cx="116" cy="117" r="4.5" fill="#F5B898" />

      {/* Legs */}
      <path
        d="M78 120 C75 135 72 148 70 155"
        stroke="#1B1F3B"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M102 120 C105 135 108 148 110 155"
        stroke="#1B1F3B"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Shoes */}
      <ellipse cx="68" cy="157" rx="8" ry="4" fill="#EF5350" />
      <ellipse cx="112" cy="157" rx="8" ry="4" fill="#EF5350" />

      {/* Neck */}
      <rect x="86" y="67" width="8" height="14" rx="4" fill="#F5B898" />

      {/* Head */}
      <ellipse cx="90" cy="52" rx="22" ry="24" fill="#F5B898" />

      {/* Hair (dark, with pigtails / buns) */}
      <path
        d="M68 48 C68 28 78 18 90 16 C102 18 112 28 112 48 C112 40 108 36 103 38 C98 30 82 30 77 38 C72 36 68 40 68 48Z"
        fill="#1B1F3B"
      />
      {/* Left pigtail */}
      <circle cx="68" cy="35" r="10" fill="#1B1F3B" />
      <circle cx="68" cy="35" r="5" fill="#FDBB30" /> {/* Hair tie */}
      {/* Right pigtail */}
      <circle cx="112" cy="35" r="10" fill="#1B1F3B" />
      <circle cx="112" cy="35" r="5" fill="#EF5350" /> {/* Hair tie */}

      {/* Face */}
      {/* Eyes (wide, curious) */}
      <ellipse cx="83" cy="50" rx="3.5" ry="4" fill="#1B1F3B" />
      <ellipse cx="97" cy="50" rx="3.5" ry="4" fill="#1B1F3B" />
      {/* Eye highlights */}
      <circle cx="84.5" cy="49" r="1.5" fill="white" />
      <circle cx="98.5" cy="49" r="1.5" fill="white" />
      {/* Curious "o" mouth */}
      <ellipse cx="90" cy="61" rx="3.5" ry="3" fill="#1B1F3B" />
      <ellipse cx="90" cy="60.5" rx="2.5" ry="2" fill="#E57373" />
      {/* Blush */}
      <circle cx="76" cy="56" r="4.5" fill="#FFAB91" opacity="0.35" />
      <circle cx="104" cy="56" r="4.5" fill="#FFAB91" opacity="0.35" />

      {/* Small decorative star */}
      <path d="M130 30 L132 24 L134 30 L132 36Z" fill="#FDBB30" opacity="0.5" />
    </svg>
  );
}
