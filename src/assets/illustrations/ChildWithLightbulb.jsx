/**
 * ChildWithLightbulb — Flat-style illustration of a girl sitting beside a giant lightbulb.
 * Matches the KIS hero right-column reference: coral/red-topped girl with dark hair,
 * sitting cross-legged near an oversized lightbulb with a zigzag filament and dashed orbit.
 */
export default function ChildWithLightbulb({ className = "", width = 320, height = 360, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 360"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* --- Lightbulb glow aura --- */}
      <ellipse cx="160" cy="160" rx="110" ry="110" fill="#FDBB30" opacity="0.10" />
      <ellipse cx="160" cy="160" rx="85" ry="85" fill="#FDBB30" opacity="0.12" />

      {/* --- Dashed orbit path --- */}
      <ellipse
        cx="160"
        cy="175"
        rx="130"
        ry="90"
        stroke="#FDBB30"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.5"
        transform="rotate(-12 160 175)"
      />

      {/* --- Giant Lightbulb --- */}
      {/* Bulb glass */}
      <path
        d="M120 170 C120 110 145 60 160 55 C175 60 200 110 200 170 C200 195 190 210 180 215 L140 215 C130 210 120 195 120 170Z"
        fill="#FDBB30"
      />
      {/* Bulb highlight/shine */}
      <path
        d="M135 130 C138 105 150 75 160 70 C155 75 143 105 140 135 C138 150 138 160 140 170"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Bulb base/screw */}
      <rect x="140" y="215" width="40" height="8" rx="2" fill="#E8A61E" />
      <rect x="143" y="223" width="34" height="6" rx="2" fill="#D4941A" />
      <rect x="146" y="229" width="28" height="5" rx="2" fill="#E8A61E" />
      <rect x="150" y="234" width="20" height="4" rx="2" fill="#C9880F" />
      {/* Zigzag filament */}
      <polyline
        points="152,210 156,190 160,205 164,185 168,200 172,180"
        stroke="#1B1F3B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.35"
      />
      {/* Small glow dots around bulb */}
      <circle cx="105" cy="130" r="3" fill="#FDBB30" opacity="0.5" />
      <circle cx="215" cy="120" r="2.5" fill="#FDBB30" opacity="0.4" />
      <circle cx="100" cy="180" r="2" fill="#FDBB30" opacity="0.35" />

      {/* --- Girl sitting cross-legged --- */}
      {/* Shadow under girl */}
      <ellipse cx="240" cy="340" rx="50" ry="8" fill="#1B1F3B" opacity="0.06" />

      {/* Legs (cross-legged, navy pants) */}
      <path
        d="M215 310 C220 320 230 330 240 332 C250 330 260 320 265 310 L260 295 C255 300 245 305 240 305 C235 305 225 300 220 295 Z"
        fill="#1B1F3B"
      />
      {/* Left foot */}
      <ellipse cx="218" cy="325" rx="10" ry="5" fill="#1B1F3B" />
      {/* Right foot */}
      <ellipse cx="262" cy="325" rx="10" ry="5" fill="#1B1F3B" />

      {/* Body / Torso (coral/red top) */}
      <path
        d="M225 270 C222 280 220 295 220 300 L260 300 C260 295 258 280 255 270 Z"
        fill="#EF5350"
      />
      {/* Collar detail */}
      <path
        d="M230 270 L240 278 L250 270"
        stroke="#D32F2F"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Left arm */}
      <path
        d="M225 278 C215 282 205 290 200 298"
        stroke="#F5B898"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left hand */}
      <circle cx="198" cy="300" r="5" fill="#F5B898" />

      {/* Right arm (resting on knee) */}
      <path
        d="M255 278 C260 285 262 295 258 305"
        stroke="#F5B898"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right hand */}
      <circle cx="258" cy="307" r="5" fill="#F5B898" />

      {/* Neck */}
      <rect x="235" y="260" width="10" height="12" rx="5" fill="#F5B898" />

      {/* Head */}
      <ellipse cx="240" cy="248" rx="22" ry="24" fill="#F5B898" />

      {/* Hair (dark, long) */}
      <path
        d="M218 245 C218 225 228 215 240 213 C252 215 262 225 262 245 C262 240 260 235 255 237 C250 230 230 230 225 237 C220 235 218 240 218 245Z"
        fill="#1B1F3B"
      />
      {/* Hair strands on sides */}
      <path d="M218 245 C216 255 216 265 220 272" stroke="#1B1F3B" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M262 245 C264 255 264 265 260 272" stroke="#1B1F3B" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* Face details */}
      {/* Eyes */}
      <ellipse cx="233" cy="248" rx="2.5" ry="3" fill="#1B1F3B" />
      <ellipse cx="247" cy="248" rx="2.5" ry="3" fill="#1B1F3B" />
      {/* Eye highlights */}
      <circle cx="234" cy="247" r="1" fill="white" />
      <circle cx="248" cy="247" r="1" fill="white" />
      {/* Smile */}
      <path
        d="M235 256 C238 260 242 260 245 256"
        stroke="#1B1F3B"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Blush */}
      <circle cx="228" cy="254" r="4" fill="#FFAB91" opacity="0.4" />
      <circle cx="252" cy="254" r="4" fill="#FFAB91" opacity="0.4" />
    </svg>
  );
}
