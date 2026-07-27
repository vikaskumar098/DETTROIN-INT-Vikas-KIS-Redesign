import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { ACADEMIC_STAGES } from "../../data/content";
import { cn } from "../../utils/cn";

/**
 * Signature element: a real 4-stage academic journey (numbered because
 * it genuinely is a sequence — Pre-Primary through Senior Secondary),
 * replacing the original's 11 fragmented, overlapping academic sub-pages
 * with one scannable, tabbed overview.
 */
export default function AcademicsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-ink-950 text-white" id="academics">
      <div className="container-kis">
        <SectionHeading
          eyebrow="Academic Journey"
          title="One clear path, from Nursery to Grade XII"
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
            {ACADEMIC_STAGES.map((s, i) => (
              <button
                key={s.stage}
                onClick={() => setActive(i)}
                className={cn(
                  "flex shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-colors lg:shrink",
                  active === i ? "bg-white/10" : "hover:bg-white/5"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs",
                    active === i ? "text-gold-400" : "text-white/40"
                  )}
                >
                  0{i + 1}
                </span>
                <span className={cn("text-sm font-medium whitespace-nowrap", active === i ? "text-white" : "text-white/60")}>
                  {s.stage}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl2 bg-white/5 p-8 ring-1 ring-white/10 sm:p-10"
            >
              <span className="eyebrow text-gold-400">{ACADEMIC_STAGES[active].grades}</span>
              <h3 className="mt-3 text-display-md text-white">{ACADEMIC_STAGES[active].stage}</h3>
              <p className="mt-4 max-w-lg leading-relaxed text-ink-100/75">
                {ACADEMIC_STAGES[active].focus}
              </p>
              <div className="mt-7">
                <Button to="/academics" variant="gold">
                  Explore Academics
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
