import { motion } from "framer-motion";
import ImagePlaceholder from "../ui/ImagePlaceholder";

/**
 * Shared, condensed hero band for inner pages — consistent with the
 * homepage hero's visual language but shorter, since inner pages need
 * to get to content faster than the homepage's brand moment.
 */
export default function PageHero({ eyebrow, title, description, tone = "ink" }) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-ink-950 pt-28">
      <ImagePlaceholder label={title} tone={tone} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container-kis relative z-10 pb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-gold-300"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-3 max-w-2xl text-display-lg text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 max-w-xl text-ink-100/80"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
