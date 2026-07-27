import { motion } from "framer-motion";
import { FiArrowLeft, FiMail } from "react-icons/fi";
import Button from "../components/ui/Button";

/**
 * The original site had no dedicated 404 — dead links (several `href="#"`
 * anchors) simply went nowhere. This page explains what happened, in
 * plain language, and offers two clear ways forward.
 */
export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink-950 px-6 text-center text-white">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-7xl text-gold-400 sm:text-8xl"
      >
        404
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-display-md"
      >
        This page hasn't been built yet
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3 max-w-sm text-ink-200/70"
      >
        The page you're looking for doesn't exist or may have moved. Head back home,
        or reach out if you think this is a mistake.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        <Button to="/" variant="gold" icon={FiArrowLeft}>
          Back to Home
        </Button>
        <Button to="/contact" variant="outline" className="!border-white/30 !bg-white/10 !text-white" icon={FiMail}>
          Contact Us
        </Button>
      </motion.div>
    </section>
  );
}
