import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import { FACILITIES } from "../../data/content";

/**
 * Consolidates campus infrastructure into one scannable grid instead of
 * scattering it across prose paragraphs on the original About page.
 */
export default function Facilities() {
  return (
    <section className="section-pad bg-white" id="facilities">
      <div className="container-kis">
        <SectionHeading
          eyebrow="Campus & Facilities"
          title="Everything a growing mind needs, in one place"
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-xl2 shadow-card ring-1 ring-ink-50"
            >
              <ImagePlaceholder
                label={f.title}
                tone={i % 3 === 0 ? "ink" : i % 3 === 1 ? "gold" : "sage"}
                className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="bg-white p-5">
                <h3 className="font-display text-lg text-ink-900">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
