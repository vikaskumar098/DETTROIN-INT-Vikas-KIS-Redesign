import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import { NEWS_EVENTS } from "../../data/content";

export default function NewsEvents() {
  return (
    <section className="section-pad bg-white" id="news">
      <div className="container-kis">
        <SectionHeading eyebrow="News & Events" title="What's happening at KIS" align="center" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {NEWS_EVENTS.map((n, i) => (
            <Card key={n.title} delay={i * 0.08} className="overflow-hidden">
              <ImagePlaceholder label={n.title} tone={i % 2 ? "gold" : "ink"} className="aspect-[16/10] w-full" />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <Badge tone={n.tag === "Event" ? "sage" : "gold"}>{n.tag}</Badge>
                  <span className="font-mono text-xs text-slate-500">{n.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg text-ink-900">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{n.desc}</p>
                <button className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold-700 link-underline">
                  Read more <FiArrowUpRight size={14} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
