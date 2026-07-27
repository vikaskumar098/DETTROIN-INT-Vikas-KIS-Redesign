import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import { ACHIEVEMENTS } from "../../data/content";

/**
 * A real vertical timeline (chronological, so numbering/ordering here is
 * meaningful) instead of the original's unstructured "60+ awards" stat
 * with no supporting detail or credibility trail.
 */
export default function Achievements() {
  return (
    <section className="section-pad bg-white" id="achievements">
      <div className="container-kis max-w-3xl">
        <SectionHeading eyebrow="Recognition & Awards" title="A track record built year over year" />
        <div className="mt-12 space-y-0">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 border-l-2 border-ink-100 py-6 pl-6 last:pb-0"
            >
              <div className="-ml-[calc(1.5rem+9px)] mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gold-500 ring-4 ring-white">
                <FiAward size={9} className="text-ink-900" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-gold-700">{a.year}</span>
                  <Badge tone="ink">{a.level}</Badge>
                </div>
                <h3 className="mt-2 font-display text-lg text-ink-900">{a.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
