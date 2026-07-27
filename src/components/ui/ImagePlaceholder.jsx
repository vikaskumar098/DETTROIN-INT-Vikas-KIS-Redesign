import { cn } from "../../utils/cn";

/**
 * Styled placeholder standing in for real campus photography.
 * Swap the `src` prop in for a real <img> once photo assets are
 * supplied — the aspect ratio / rounding / overlay classes are
 * designed to be reused as-is with real images.
 */
export default function ImagePlaceholder({ label, className, tone = "ink" }) {
  const tones = {
    ink: "from-ink-700 via-ink-800 to-ink-950",
    gold: "from-gold-600 via-gold-700 to-ink-900",
    sage: "from-sage-600 via-ink-800 to-ink-950",
  };
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br text-center",
        tones[tone],
        className
      )}
    >
      <div className="absolute inset-0 bg-grain" />
      <span className="relative px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
        {label}
      </span>
    </div>
  );
}
