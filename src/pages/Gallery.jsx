import PageHero from "../components/layout/PageHero";
import GalleryPreview from "../components/sections/GalleryPreview";
import Facilities from "../components/sections/Facilities";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Life at Krishna International"
        description="Academics, sports, arts, and everyday campus moments — all in one place, on our own site."
        tone="sage"
      />
      <GalleryPreview />
      <Facilities />
    </>
  );
}
