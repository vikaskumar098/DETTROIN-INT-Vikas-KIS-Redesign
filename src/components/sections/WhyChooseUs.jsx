import { FiBookOpen, FiHeart, FiHome, FiGlobe } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { PILLARS } from "../../data/content";

const ICONS = { book: FiBookOpen, heart: FiHeart, building: FiHome, globe: FiGlobe };

/**
 * The 4 homepage feature cards from the original ("Academics / Admission /
 * Co-Curricular / Gallery") are re-scoped here into value pillars —
 * "why choose us" reasons rather than a site directory disguised as content.
 */
export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-ivory" id="why-choose-us">
      <div className="container-kis">
        <SectionHeading
          eyebrow="Why Choose KIS"
          title="Four pillars that shape every student"
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Card key={p.title} delay={i * 0.08} className="p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-display-sm text-ink-900">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
