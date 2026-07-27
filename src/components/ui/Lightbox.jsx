import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useCallback } from "react";

/**
 * Native on-site lightbox for the Gallery. Replaces the original
 * site's approach of sending users off to Facebook/Instagram to
 * view photos — keeps visitors, and their attention, on-site.
 */
export default function Lightbox({ images, index, onClose, onNav }) {
  const handleKey = useCallback(
    (e) => {
      if (index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    },
    [index, onClose, onNav]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (index === null) return null;
  const item = images[index];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/92 backdrop-blur-sm p-4"
        role="dialog"
        aria-modal="true"
        aria-label={item.alt}
        onClick={onClose}
      >
        <button
          className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <FiX size={20} />
        </button>
        <button
          className="absolute left-3 sm:left-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();
            onNav(-1);
          }}
          aria-label="Previous image"
        >
          <FiChevronLeft size={22} />
        </button>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="max-h-[80vh] max-w-4xl overflow-hidden rounded-xl2"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="flex h-[60vh] w-[85vw] max-w-3xl items-center justify-center bg-ink-800 text-ink-200 sm:h-[70vh]"
            aria-hidden="true"
          >
            <span className="font-mono text-sm">{item.alt}</span>
          </div>
        </motion.div>
        <button
          className="absolute right-3 sm:right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();
            onNav(1);
          }}
          aria-label="Next image"
        >
          <FiChevronRight size={22} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
