/**
 * Mission feature icons — Line-style icons for the "Our Mission" section feature list.
 * Each matches the KIS reference: rocket, checkmark-shield, tablet, lightbulb, palette.
 */

/** Comprehensive growth — sprouting plant / growth icon */
export function GrowthIcon({ className = "", size = 36, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="18" cy="18" r="16" fill="#DCEBFF" />
      {/* Pot */}
      <path d="M12 24 L14 30 L22 30 L24 24Z" fill="#2F6FED" opacity="0.3" />
      <rect x="11" y="22" width="14" height="3" rx="1" fill="#2F6FED" opacity="0.5" />
      {/* Stem */}
      <path d="M18 22 L18 12" stroke="#2F6FED" strokeWidth="1.5" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M18 16 C14 14 12 10 14 8 C16 10 18 14 18 16Z" fill="#2F6FED" />
      <path d="M18 18 C22 16 24 12 22 10 C20 12 18 16 18 18Z" fill="#2F6FED" opacity="0.7" />
      {/* Small sprout */}
      <circle cx="18" cy="8" r="2" fill="#FDBB30" />
    </svg>
  );
}

/** Carefully developed curriculum — clipboard/checklist */
export function CurriculumIcon({ className = "", size = 36, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="18" cy="18" r="16" fill="#FDE7C7" />
      {/* Clipboard */}
      <rect x="10" y="8" width="16" height="22" rx="2" fill="white" stroke="#FDBB30" strokeWidth="1.2" />
      {/* Clip */}
      <rect x="14" y="6" width="8" height="5" rx="1.5" fill="#FDBB30" />
      {/* Checkmarks */}
      <path d="M13 15 L15 17 L19 13" stroke="#2F6FED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 21 L15 23 L19 19" stroke="#2F6FED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lines */}
      <line x1="21" y1="15" x2="24" y2="15" stroke="#E0E0E0" strokeWidth="1" />
      <line x1="21" y1="21" x2="24" y2="21" stroke="#E0E0E0" strokeWidth="1" />
      {/* Star */}
      <path d="M22 26 L23 24 L24 26 L23 28Z" fill="#FDBB30" opacity="0.5" />
    </svg>
  );
}

/** Children run their own education — rocket / launch */
export function RocketIcon({ className = "", size = 36, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="18" cy="18" r="16" fill="#DCEBFF" />
      {/* Rocket body */}
      <path d="M18 6 C14 12 13 18 14 24 L22 24 C23 18 22 12 18 6Z" fill="#2F6FED" />
      {/* Window */}
      <circle cx="18" cy="15" r="3" fill="white" />
      <circle cx="18" cy="15" r="1.5" fill="#DCEBFF" />
      {/* Fins */}
      <path d="M14 20 L10 24 L14 24Z" fill="#EF5350" />
      <path d="M22 20 L26 24 L22 24Z" fill="#EF5350" />
      {/* Flame */}
      <path d="M16 24 L18 30 L20 24" fill="#FDBB30" />
      <path d="M17 24 L18 28 L19 24" fill="#EF5350" />
    </svg>
  );
}

/** Practical learning materials — lightbulb / idea */
export function LightbulbIcon({ className = "", size = 36, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="18" cy="18" r="16" fill="#FDE7C7" />
      {/* Bulb */}
      <path d="M18 6 C12 6 8 10.5 8 15.5 C8 19 10 21.5 13 23 L13 27 L23 27 L23 23 C26 21.5 28 19 28 15.5 C28 10.5 24 6 18 6Z" fill="#FDBB30" />
      {/* Highlight */}
      <path d="M14 12 C14 10 16 8 18 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Base */}
      <rect x="14" y="27" width="8" height="2" rx="1" fill="#E8A61E" />
      <rect x="15" y="29" width="6" height="2" rx="1" fill="#D4941A" />
      {/* Rays */}
      <line x1="18" y1="2" x2="18" y2="4" stroke="#FDBB30" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="8" x2="30" y2="6" stroke="#FDBB30" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="8" x2="6" y2="6" stroke="#FDBB30" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="32" y1="16" x2="34" y2="16" stroke="#FDBB30" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="2" y1="16" x2="4" y2="16" stroke="#FDBB30" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Personalized education — palette / creative */
export function PaletteIcon({ className = "", size = 36, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="18" cy="18" r="16" fill="#DCEBFF" />
      {/* Palette shape */}
      <path
        d="M18 6 C10 6 4 12 4 18 C4 24 10 30 18 30 C20 30 22 28 22 26 C22 24 20 22 20 20 C20 18 22 16 24 16 L28 16 C30 16 32 14 32 12 C32 8 26 6 18 6Z"
        fill="white"
        stroke="#2F6FED"
        strokeWidth="1"
      />
      {/* Color dots */}
      <circle cx="12" cy="14" r="2.5" fill="#EF5350" />
      <circle cx="10" cy="20" r="2.5" fill="#FDBB30" />
      <circle cx="14" cy="25" r="2.5" fill="#2F6FED" />
      <circle cx="18" cy="12" r="2.5" fill="#4CAF50" />
    </svg>
  );
}
