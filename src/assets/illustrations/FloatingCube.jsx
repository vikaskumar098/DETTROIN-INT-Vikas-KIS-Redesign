/**
 * FloatingCube — Flat-style 3D wireframe/solid cube floating in space.
 * Small decorative element matching the KIS hero — a blue-tinted
 * isometric cube with subtle face shading.
 */
export default function FloatingCube({ className = "", width = 60, height = 70, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 70"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Top face (lightest) */}
      <polygon
        points="30,8 55,22 30,36 5,22"
        fill="#DCEBFF"
        stroke="#2F6FED"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Left face (medium) */}
      <polygon
        points="5,22 30,36 30,60 5,46"
        fill="#B3D4FF"
        stroke="#2F6FED"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Right face (darkest) */}
      <polygon
        points="55,22 30,36 30,60 55,46"
        fill="#8ABAFF"
        stroke="#2F6FED"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Top edge highlight */}
      <line x1="5" y1="22" x2="30" y2="8" stroke="#5A9CFF" strokeWidth="0.5" opacity="0.5" />
      <line x1="30" y1="8" x2="55" y2="22" stroke="#5A9CFF" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}
