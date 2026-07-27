import { motion } from "framer-motion";

/**
 * Minimal, playful splash screen for the initial app load.
 */
export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bgBlue overflow-hidden"
    >
      {/* Playful background blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 bg-accent/20 rounded-full -bottom-10 -right-10 blur-xl"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-4"
      >
        <span className="font-display text-2xl sm:text-4xl font-bold tracking-tight bg-white px-8 py-4 rounded-[2rem] shadow-highlight text-center leading-snug">
          <span className="text-accent">Krishna</span>{" "}
          <span className="text-navy">International School</span>
        </span>
        
        {/* Bouncing dots loader */}
        <div className="flex gap-2 mt-2">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-3 h-3 bg-white rounded-full" />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }} className="w-3 h-3 bg-accent rounded-full" />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-3 h-3 bg-navy rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  );
}
