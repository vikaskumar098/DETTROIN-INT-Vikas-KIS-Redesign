import { cn } from "../../utils/cn";

const TONES = {
  gold: "bg-gold-50 text-gold-800 ring-gold-200",
  ink: "bg-ink-900 text-ivory ring-ink-900",
  sage: "bg-sage-100 text-sage-600 ring-sage-100",
};

export default function Badge({ children, tone = "gold", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1",
        TONES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
