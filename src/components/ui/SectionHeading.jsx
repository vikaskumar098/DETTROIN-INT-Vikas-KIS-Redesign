import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * Consistent eyebrow + heading + supporting copy block used at the top
 * of every section. Centralizing this enforces the type scale and
 * vertical rhythm defined in the design system across the whole site.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2
        className={cn(
          "mt-3 text-display-lg",
          light ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-ink-100/80" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
