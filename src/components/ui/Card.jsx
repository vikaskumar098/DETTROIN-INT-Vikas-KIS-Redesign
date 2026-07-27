import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function Card({ children, className, hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("card", hover && "card-hover", className)}
    >
      {children}
    </motion.div>
  );
}
