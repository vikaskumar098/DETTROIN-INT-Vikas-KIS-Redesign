/**
 * ChildOnPencil — Flat-style illustration of a boy floating/riding on a giant pencil.
 * Matches the KIS hero: a boy in a blue shirt reaching upward while balanced on
 * a large red pencil angled diagonally, with a ruler/set-square nearby.
 */
export default function ChildOnPencil({ className = "", width = 280, height = 340, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 340"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* --- Giant Pencil (angled) --- */}
      <g transform="rotate(-35 140 200)">
        {/* Pencil body */}
        <rect x="80" y="120" width="30" height="180" rx="2" fill="#E53935" />
        {/* Pencil stripe */}
        <rect x="80" y="120" width="30" height="180" rx="2" fill="#EF5350" />
        <rect x="80" y="120" width="10" height="180" fill="#D32F2F" />
        {/* Pencil wood tip section */}
        <polygon points="80,300 110,300 95,340" fill="#F5CBA7" />
        {/* Pencil lead tip */}
        <polygon points="90,325 100,325 95,340" fill="#1B1F3B" />
        {/* Pencil eraser band */}
        <rect x="80" y="112" width="30" height="8" rx="1" fill="#C0C0C0" />
        {/* Pencil eraser */}
        <rect x="82" y="102" width="26" height="12" rx="4" fill="#FF8A80" />
      </g>

      {/* --- Boy character --- */}
      {/* Shadow */}
      <ellipse cx="145" cy="195" rx="25" ry="5" fill="#1B1F3B" opacity="0.05" />

      {/* Legs */}
      {/* Left leg */}
      <path
        d="M128 168 C125 180 120 195 118 205"
        stroke="#1B1F3B"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left shoe */}
      <ellipse cx="116" cy="208" rx="10" ry="5" fill="#1B1F3B" />

      {/* Right leg (bent, riding the pencil) */}
      <path
        d="M148 168 C155 178 158 188 162 200"
        stroke="#1B1F3B"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right shoe */}
      <ellipse cx="164" cy="203" rx="10" ry="5" fill="#1B1F3B" />

      {/* Body / Torso (blue t-shirt) */}
      <path
        d="M122 120 C120 130 118 145 120 160 C125 170 145 172 150 160 C152 145 150 130 148 120 Z"
        fill="#2F6FED"
      />
      {/* Shirt collar */}
      <path
        d="M128 120 L135 128 L142 120"
        stroke="#1E4FBB"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Left arm (reaching up) */}
      <path
        d="M122 130 C112 120 105 105 100 85"
        stroke="#F5B898"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left hand (reaching) */}
      <circle cx="99" cy="83" r="5" fill="#F5B898" />
      {/* Fingers spread */}
      <path d="M95 80 L92 75" stroke="#F5B898" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M98 79 L96 73" stroke="#F5B898" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M101 79 L101 73" stroke="#F5B898" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M104 80 L106 75" stroke="#F5B898" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right arm (out to side for balance) */}
      <path
        d="M148 132 C158 128 170 130 178 138"
        stroke="#F5B898"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right hand */}
      <circle cx="180" cy="140" r="5" fill="#F5B898" />

      {/* Neck */}
      <rect x="131" y="108" width="8" height="12" rx="4" fill="#F5B898" />

      {/* Head */}
      <ellipse cx="135" cy="95" rx="20" ry="22" fill="#F5B898" />

      {/* Hair (dark, messy/short) */}
      <path
        d="M115 90 C115 72 125 62 135 60 C145 62 155 72 155 90 C155 82 150 78 145 80 C140 74 130 74 125 80 C120 78 115 82 115 90Z"
        fill="#1B1F3B"
      />
      {/* Spiky hair top */}
      <path d="M125 68 L122 58 L130 65" fill="#1B1F3B" />
      <path d="M135 63 L134 52 L140 62" fill="#1B1F3B" />
      <path d="M145 68 L148 56 L142 65" fill="#1B1F3B" />

      {/* Face */}
      {/* Eyes */}
      <ellipse cx="129" cy="94" rx="2.5" ry="3" fill="#1B1F3B" />
      <ellipse cx="141" cy="94" rx="2.5" ry="3" fill="#1B1F3B" />
      {/* Eye highlights */}
      <circle cx="130" cy="93" r="1" fill="white" />
      <circle cx="142" cy="93" r="1" fill="white" />
      {/* Open mouth (excited) */}
      <ellipse cx="135" cy="104" rx="5" ry="3.5" fill="#1B1F3B" />
      <ellipse cx="135" cy="103" rx="4" ry="2" fill="#E57373" />
      {/* Blush */}
      <circle cx="123" cy="100" r="4" fill="#FFAB91" opacity="0.35" />
      <circle cx="147" cy="100" r="4" fill="#FFAB91" opacity="0.35" />

      {/* --- Small decorative elements --- */}
      {/* Small blue circle */}
      <circle cx="200" cy="100" r="6" fill="#2F6FED" opacity="0.4" />
      {/* Small accent circle */}
      <circle cx="70" cy="150" r="4" fill="#FDBB30" opacity="0.5" />
      {/* Tiny hexagon */}
      <polygon
        points="220,160 226,163 226,170 220,173 214,170 214,163"
        fill="none"
        stroke="#1B1F3B"
        strokeWidth="1.2"
        opacity="0.25"
      />
    </svg>
  );
}
