/**
 * FloatingHexagon — Small decorative wireframe hexagon.
 * Used as a scattered floating element in hero and section backgrounds.
 */
export default function FloatingHexagon({ className = "", width = 32, height = 36, color = "#1B1F3B", opacity = 0.2, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 36"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    >
      <polygon
        points="16,2 30,10 30,26 16,34 2,26 2,10"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity={opacity}
      />
    </svg>
  );
}
