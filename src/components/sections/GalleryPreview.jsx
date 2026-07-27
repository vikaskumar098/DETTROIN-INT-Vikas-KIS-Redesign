import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Button from "../ui/Button";
import Lightbox from "../ui/Lightbox";

const ITEMS = [
  { alt: "Annual Day performance on the main stage", tone: "gold", span: "sm:col-span-2 sm:row-span-2" },
  { alt: "Students in the chemistry lab", tone: "sage" },
  { alt: "Inter-house sports day relay", tone: "ink" },
  { alt: "Fine arts studio session", tone: "sage" },
  { alt: "Campus lawns at golden hour", tone: "gold" },
];

/**
 * Native, on-site gallery grid with a working lightbox — replacing the
 * original site's "Gallery" nav item, which linked out to Facebook/Instagram
 * and sent visitors off the school's own website entirely.
 */
export default function GalleryPreview() {
  const [index, setIndex] = useState(null);

  const nav = (dir) => setIndex((i) => (i + dir + ITEMS.length) % ITEMS.length);

  return (
    <section className="section-pad bg-ivory" id="gallery">
      <div className="container-kis">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Campus Gallery"
            title="Life at Krishna International, in pictures"
            className="mb-0"
          />
          <Button to="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-auto-rows:180px]">
          {ITEMS.map((item, i) => (
            <button
              key={item.alt}
              onClick={() => setIndex(i)}
              className={`group relative overflow-hidden rounded-xl2 ${item.span || ""}`}
            >
              <ImagePlaceholder label={item.alt} tone={item.tone} className="h-full w-full transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/20" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox images={ITEMS} index={index} onClose={() => setIndex(null)} onNav={nav} />
    </section>
  );
}
