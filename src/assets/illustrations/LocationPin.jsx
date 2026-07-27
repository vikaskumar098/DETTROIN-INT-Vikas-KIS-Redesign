/**
 * LocationPin — Small decorative map-pin icon used near the bottom of the hero.
 * Styled with the accent color palette.
 */
export default function LocationPin({ className = "", width = 28, height = 40, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 40"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Pin shadow */}
      <ellipse cx="14" cy="37" rx="6" ry="2" fill="#1B1F3B" opacity="0.08" />

      {/* Pin body */}
      <path
        d="M14 38 C14 38 4 22 4 14 C4 8.5 8.5 4 14 4 C19.5 4 24 8.5 24 14 C24 22 14 38 14 38Z"
        fill="#2F6FED"
      />
      {/* Inner circle */}
      <circle cx="14" cy="14" r="5" fill="white" />
      {/* Center dot */}
      <circle cx="14" cy="14" r="2" fill="#2F6FED" />

      {/* Highlight on pin */}
      <path
        d="M10 10 C10 8 12 6 14 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
