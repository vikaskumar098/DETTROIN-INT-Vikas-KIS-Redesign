/**
 * RulerTriangle — Flat-style golden/yellow set-square (triangular ruler).
 * Matches the KIS hero: a large angled set-square with measurement marks,
 * positioned as a prominent decorative element.
 */
export default function RulerTriangle({ className = "", width = 200, height = 200, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Shadow */}
      <polygon
        points="15,185 185,185 185,15"
        fill="#1B1F3B"
        opacity="0.04"
        transform="translate(3,3)"
      />

      {/* Main triangle body */}
      <polygon
        points="10,180 180,180 180,10"
        fill="#FDBB30"
      />

      {/* Inner cutout triangle (to make it look like a set-square) */}
      <polygon
        points="45,170 160,170 160,55"
        fill="white"
        opacity="0.92"
      />

      {/* Darker edge for depth */}
      <polygon
        points="10,180 180,180 180,10"
        fill="none"
        stroke="#E8A61E"
        strokeWidth="2"
      />

      {/* Measurement marks along bottom edge */}
      {Array.from({ length: 16 }, (_, i) => (
        <line
          key={`bm-${i}`}
          x1={20 + i * 10}
          y1="180"
          x2={20 + i * 10}
          y2={i % 5 === 0 ? 170 : 174}
          stroke="#E8A61E"
          strokeWidth={i % 5 === 0 ? 1.2 : 0.8}
        />
      ))}

      {/* Measurement marks along right edge (vertical) */}
      {Array.from({ length: 16 }, (_, i) => (
        <line
          key={`rm-${i}`}
          x1="180"
          y1={170 - i * 10}
          x2={i % 5 === 0 ? 170 : 174}
          y2={170 - i * 10}
          stroke="#E8A61E"
          strokeWidth={i % 5 === 0 ? 1.2 : 0.8}
        />
      ))}

      {/* Measurement marks along hypotenuse */}
      {Array.from({ length: 12 }, (_, i) => {
        const t = (i + 1) / 13;
        const x = 10 + (180 - 10) * t;
        const y = 180 + (10 - 180) * t;
        const len = i % 5 === 0 ? 8 : 4;
        // Perpendicular to hypotenuse (direction: 45 degrees inward)
        const dx = len * 0.707;
        const dy = len * 0.707;
        return (
          <line
            key={`hm-${i}`}
            x1={x}
            y1={y}
            x2={x + dx}
            y2={y + dy}
            stroke="#E8A61E"
            strokeWidth={i % 5 === 0 ? 1.2 : 0.8}
          />
        );
      })}

      {/* Angle indicator arc at bottom-right corner */}
      <path
        d="M165 180 A15 15 0 0 0 180 165"
        fill="none"
        stroke="#E8A61E"
        strokeWidth="1"
      />
      {/* 90° dot */}
      <rect x="173" y="173" width="4" height="4" fill="#E8A61E" />

      {/* Number labels on bottom */}
      <text x="20" y="177" fontSize="5" fill="#C9880F" fontFamily="Inter, sans-serif">0</text>
      <text x="68" y="177" fontSize="5" fill="#C9880F" fontFamily="Inter, sans-serif">5</text>
      <text x="116" y="177" fontSize="5" fill="#C9880F" fontFamily="Inter, sans-serif">10</text>
      <text x="162" y="177" fontSize="5" fill="#C9880F" fontFamily="Inter, sans-serif">15</text>
    </svg>
  );
}
