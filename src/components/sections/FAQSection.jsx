import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import { FAQS } from "../../data/content";

export default function FAQSection() {
  return (
    <section className="section-pad bg-ivory" id="faq">
      <div className="container-kis max-w-2xl">
        <SectionHeading eyebrow="Common Questions" title="Frequently asked questions" align="center" />
        <div className="mt-12">
          <Accordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
