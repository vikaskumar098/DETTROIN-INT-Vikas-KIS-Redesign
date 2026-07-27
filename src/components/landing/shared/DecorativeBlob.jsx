import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export default function DecorativeBlob({
  color = "bg-blob1",
  size = "w-32 h-32",
  className,
  floatDelay = 0,
}) {
  return (
    <motion.div
      animate={{ x: [0, 8, 0], y: [0, 6, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
      className={cn("absolute rounded-full z-0 opacity-80", color, size, className)}
      aria-hidden="true"
    />
  );
}
