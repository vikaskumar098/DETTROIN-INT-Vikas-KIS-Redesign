import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import { FACULTY } from "../../data/content";

/**
 * Puts named educators front and center — the original site had no
 * faculty-facing content on the homepage at all, despite this being a
 * strong trust signal for parents evaluating a school.
 */
export default function FacultySpotlight() {
  return (
    <section className="section-pad bg-ivory" id="faculty">
      <div className="container-kis">
        <SectionHeading eyebrow="Our Educators" title="Teachers who know every student by name" align="center" />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {FACULTY.map((f, i) => (
            <Card key={f.name} delay={i * 0.08} className="overflow-hidden">
              <ImagePlaceholder label={f.name} tone={i % 2 ? "sage" : "ink"} className="aspect-square w-full" />
              <div className="p-4">
                <h3 className="font-display text-base text-ink-900">{f.name}</h3>
                <p className="mt-0.5 text-xs text-gold-700">{f.role}</p>
                <p className="mt-1 text-xs text-slate-500">{f.years}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
