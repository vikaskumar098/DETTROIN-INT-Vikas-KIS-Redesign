import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export default function FloatingIllustration({
  children,
  className,
  duration = 4,
  delay = 0,
  amplitudeY = -12,
  amplitudeRotate = 2,
}) {
  return (
    <motion.div
      animate={{
        y: [0, amplitudeY, 0],
        rotate: [0, amplitudeRotate, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={cn("absolute", className)}
    >
      {children}
    </motion.div>
  );
}
