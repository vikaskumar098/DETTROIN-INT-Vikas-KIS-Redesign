import { cn } from "../../../utils/cn";

export default function SectionHeading({ children, className }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="w-8 h-[2px] bg-primary" aria-hidden="true" />
      <h2 className="text-lg md:text-xl font-bold text-primary uppercase tracking-wide">
        {children}
      </h2>
      <span className="w-8 h-[2px] bg-primary" aria-hidden="true" />
    </div>
  );
}
