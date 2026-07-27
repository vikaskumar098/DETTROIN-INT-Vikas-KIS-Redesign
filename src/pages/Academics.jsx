import PageHero from "../components/layout/PageHero";
import AcademicsSection from "../components/sections/AcademicsSection";
import FAQSection from "../components/sections/FAQSection";

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A curriculum that grows with every student"
        description="CBSE-affiliated teaching from Pre-Primary through Senior Secondary, delivered with rigor and individual attention."
        tone="gold"
      />
      <AcademicsSection />
      <FAQSection />
    </>
  );
}
