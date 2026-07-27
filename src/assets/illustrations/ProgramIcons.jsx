/**
 * Program Icons — Small illustrative icons for the Faculty/Programs grid cards.
 * Each is a self-contained inline SVG component matching the KIS reference
 * card icons (book, parent-child, math, reading, language).
 */

/** Children's Books Library icon — open book with sparkle */
export function BookLibraryIcon({ className = "", size = 40, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="18" fill="#FDE7C7" />
      {/* Open book */}
      <path d="M10 28 L10 14 C10 13 12 12 20 14 L20 28 C14 26 11 27 10 28Z" fill="#FDBB30" />
      <path d="M30 28 L30 14 C30 13 28 12 20 14 L20 28 C26 26 29 27 30 28Z" fill="#E8A61E" />
      <line x1="20" y1="14" x2="20" y2="28" stroke="white" strokeWidth="0.8" />
      {/* Text lines */}
      <line x1="13" y1="18" x2="18" y2="19" stroke="white" strokeWidth="0.6" opacity="0.7" />
      <line x1="13" y1="21" x2="17" y2="22" stroke="white" strokeWidth="0.6" opacity="0.7" />
      <line x1="22" y1="19" x2="27" y2="18" stroke="white" strokeWidth="0.6" opacity="0.5" />
      <line x1="22" y1="22" x2="26" y2="21" stroke="white" strokeWidth="0.6" opacity="0.5" />
      {/* Sparkle */}
      <path d="M28 10 L29 8 L30 10 L29 12Z" fill="#FDBB30" />
      <path d="M27 10 L29 9 L31 10 L29 11Z" fill="#FDBB30" />
    </svg>
  );
}

/** Parent Toddler Program icon — adult+child figures */
export function ParentToddlerIcon({ className = "", size = 40, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="18" fill="#DCEBFF" />
      {/* Parent figure */}
      <circle cx="16" cy="13" r="4" fill="#2F6FED" />
      <path d="M12 19 C12 17 14 16 16 16 C18 16 20 17 20 19 L20 28 L12 28Z" fill="#2F6FED" />
      {/* Child figure */}
      <circle cx="26" cy="17" r="3" fill="#FDBB30" />
      <path d="M23 22 C23 21 24 20 26 20 C28 20 29 21 29 22 L29 28 L23 28Z" fill="#FDBB30" />
      {/* Connecting hand */}
      <path d="M20 23 L23 23" stroke="#1B1F3B" strokeWidth="1.2" strokeLinecap="round" />
      {/* Heart */}
      <path d="M20 11 C20 10 21 9 22 10 C22 9 23 10 23 11 L21.5 13Z" fill="#EF5350" opacity="0.6" />
    </svg>
  );
}

/** Math Program icon — calculator with numbers */
export function MathProgramIcon({ className = "", size = 40, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="18" fill="#FDE7C7" />
      {/* Calculator body */}
      <rect x="12" y="10" width="16" height="20" rx="3" fill="white" stroke="#FDBB30" strokeWidth="1.2" />
      {/* Screen */}
      <rect x="14" y="12" width="12" height="6" rx="1.5" fill="#FDBB30" opacity="0.3" />
      {/* "123" */}
      <text x="20" y="17" fontSize="5" fontWeight="700" fill="#E8A61E" fontFamily="Poppins, sans-serif" textAnchor="middle">123</text>
      {/* Buttons grid */}
      <circle cx="16" cy="22" r="1.5" fill="#FDBB30" />
      <circle cx="20" cy="22" r="1.5" fill="#FDBB30" />
      <circle cx="24" cy="22" r="1.5" fill="#FDBB30" />
      <circle cx="16" cy="26" r="1.5" fill="#FDBB30" />
      <circle cx="20" cy="26" r="1.5" fill="#2F6FED" />
      <circle cx="24" cy="26" r="1.5" fill="#FDBB30" />
    </svg>
  );
}

/** Reading Program icon — open book with magnifying glass */
export function ReadingProgramIcon({ className = "", size = 40, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="18" fill="#DCEBFF" />
      {/* Book pages */}
      <rect x="8" y="14" width="20" height="16" rx="2" fill="white" stroke="#2F6FED" strokeWidth="1" />
      <line x1="18" y1="14" x2="18" y2="30" stroke="#2F6FED" strokeWidth="0.8" />
      {/* Text lines */}
      <line x1="10" y1="18" x2="16" y2="18" stroke="#DCEBFF" strokeWidth="1" />
      <line x1="10" y1="21" x2="15" y2="21" stroke="#DCEBFF" strokeWidth="1" />
      <line x1="10" y1="24" x2="16" y2="24" stroke="#DCEBFF" strokeWidth="1" />
      <line x1="20" y1="18" x2="26" y2="18" stroke="#DCEBFF" strokeWidth="1" />
      <line x1="20" y1="21" x2="25" y2="21" stroke="#DCEBFF" strokeWidth="1" />
      {/* Magnifying glass */}
      <circle cx="29" cy="24" r="5" fill="none" stroke="#2F6FED" strokeWidth="1.5" />
      <line x1="33" y1="28" x2="36" y2="32" stroke="#2F6FED" strokeWidth="2" strokeLinecap="round" />
      {/* Lens shine */}
      <path d="M27 22 C27 21 28 20 29 20" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

/** English Program icon — speech bubble with "Aa" */
export function EnglishProgramIcon({ className = "", size = 40, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="18" fill="#FDE7C7" />
      {/* Speech bubble */}
      <rect x="8" y="8" width="24" height="18" rx="6" fill="white" stroke="#FDBB30" strokeWidth="1.2" />
      {/* Bubble tail */}
      <polygon points="14,26 18,26 15,32" fill="white" stroke="#FDBB30" strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="14" y1="26" x2="18" y2="26" stroke="white" strokeWidth="2" />
      {/* "Aa" text */}
      <text x="20" y="21" fontSize="11" fontWeight="800" fill="#FDBB30" fontFamily="Poppins, sans-serif" textAnchor="middle">
        Aa
      </text>
    </svg>
  );
}
