import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "../../../utils/cn";

export default function PillButton({
  children,
  variant = "primary",
  icon = FiArrowRight,
  className,
  onClick,
  href,
  type = "button",
  ...props
}) {
  const Icon = icon;

  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold transition-colors";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primaryDark",
    secondary: "bg-accent text-navy hover:bg-accentDark",
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { type, onClick };

  return (
    <Component
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], className)}
      {...linkProps}
      {...props}
    >
      {children}
      {Icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <Icon size={18} />
        </span>
      )}
    </Component>
  );
}
