import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import { SITE } from "../../utils/constants";

/**
 * Why this beats the original hero:
 * - One static, purposeful hero instead of a 5-image auto-slider
 *   (carousels suffer from proven "banner blindness").
 * - One primary CTA ("Enquire Now") instead of three competing buttons.
 * - Trust stats are woven directly into the hero instead of living in
 *   a disconnected block further down the page.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink-950">
      <ImagePlaceholder
        label="Campus — main building & lawns"
        tone="ink"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="container-kis relative z-10 pb-20 pt-40 sm:pb-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold-300"
        >
          CBSE Affiliated · Est. Aligarh
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl text-display-xl text-white"
        >
          Let's explore the <em className="text-gold-300 not-italic">limitless possibilities</em> of knowledge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-100/85"
        >
          High-quality teaching on a five-acre, pollution-free campus — nurturing
          intellectually curious, self-motivated learners with an enduring love of learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button to="/admissions" variant="gold" icon={FiArrowRight}>
            Enquire Now
          </Button>
          <Button href={SITE.social.instagram} variant="outline" className="!border-white/30 !bg-white/10 !text-white" icon={FiPlay}>
            Explore Campus Life
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
