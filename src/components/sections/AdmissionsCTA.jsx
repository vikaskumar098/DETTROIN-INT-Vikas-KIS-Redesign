import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Button from "../ui/Button";

const STEPS = ["Enquire", "Campus Visit", "Apply", "Assessment", "Offer & Enroll"];

/**
 * A single high-emphasis conversion band with a visible process —
 * the original scattered admissions across 4+ pages/domains with no
 * step-by-step visibility, which is a top driver of funnel drop-off.
 */
export default function AdmissionsCTA() {
  return (
    <section className="bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 py-20 text-white">
      <div className="container-kis text-center">
        <span className="eyebrow text-gold-400 justify-center">Admissions Open — 2026-27</span>
        <h2 className="mx-auto mt-4 max-w-2xl text-display-lg">
          Ready to begin your child's journey with us?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-ink-100/75">
          A simple, five-step path from enquiry to enrollment — guided by our admissions team at every stage.
        </p>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {STEPS.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm ring-1 ring-white/15">
                <span className="font-mono text-xs text-gold-400">0{i + 1}</span>
                {step}
              </span>
              {i < STEPS.length - 1 && <FiArrowRight className="text-white/30" size={14} />}
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Button to="/admissions" variant="gold" icon={FiArrowRight}>
            Start Your Application
          </Button>
        </div>
      </div>
    </section>
  );
}
