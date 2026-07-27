import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Button from "../ui/Button";

/**
 * Asymmetric 2-column layout replacing the original's single wall of
 * text stacked above four unrelated images. Copy is trimmed to the
 * essential narrative; supporting detail moves to the About page.
 */
export default function About() {
  return (
    <section className="section-pad bg-white" id="about">
      <div className="container-kis grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <ImagePlaceholder
            label="Students in the science lab"
            tone="sage"
            className="aspect-[4/5] w-full rounded-xl2 shadow-lifted"
          />
          <div className="absolute -bottom-6 -right-6 hidden w-48 rounded-xl2 bg-white p-5 shadow-lifted ring-1 ring-ink-50 sm:block">
            <p className="font-display text-2xl text-ink-900">5 Acres</p>
            <p className="mt-1 text-xs text-slate-600">Green, pollution-free campus in the heart of Aligarh</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="About Krishna International"
            title="Dedicated to excellence, on and off the timetable"
            description="Amongst the best CBSE schools in Aligarh, our five-acre campus sits away from the city's pollution — an ideal setting for academic and co-curricular excellence, with equipped labs, a full library, theatre, and sports facilities."
          />
          <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
            Under the motto "dedicated to excellence," our staff and management help students excel
            academically while building social awareness, cultural pride, and a sense of responsibility —
            supported by regular counselling that prepares them for the world ahead.
          </p>
          <div className="mt-8">
            <Button to="/about" variant="primary">
              Read Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
