import PageHero from "../components/layout/PageHero";
import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/sections/FAQSection";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to show you around"
        description="Book a campus visit, ask a question, or reach our admissions team directly."
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}
