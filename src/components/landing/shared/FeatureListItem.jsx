import { motion } from "framer-motion";

export default function FeatureListItem({ title, description, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        {Icon && <Icon size={22} />}
      </div>
      <div>
        <h4 className="font-bold text-navy text-lg leading-snug">
          {title}
        </h4>
        {description && (
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
