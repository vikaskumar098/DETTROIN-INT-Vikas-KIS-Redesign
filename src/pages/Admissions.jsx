import { FiCheck, FiArrowRight } from "react-icons/fi";
import PageHero from "../components/layout/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import AdmissionsCTA from "../components/sections/AdmissionsCTA";
import FAQSection from "../components/sections/FAQSection";
import { SITE } from "../utils/constants";

const AGE_CHART = [
  { grade: "Nursery", age: "3+ years" },
  { grade: "LKG", age: "4+ years" },
  { grade: "UKG", age: "5+ years" },
  { grade: "Grade I", age: "6+ years" },
];

const DOCUMENTS = [
  "Completed application form",
  "Birth certificate (original + copy)",
  "Previous school records, if applicable",
  "4 passport-size photographs",
  "Address proof",
];

/**
 * Consolidates admissions — previously split across 4+ separate pages
 * and a different domain — into one page with eligibility, documents,
 * and a single clear enrollment CTA.
 */
export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions 2026-27"
        title="Begin your child's journey at KIS"
        description="A transparent, guided process — from first enquiry to your child's first day."
        tone="gold"
      />

      <section className="section-pad bg-white" id="fees">
        <div className="container-kis grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Eligibility" title="Age chart by grade" />
            <div className="mt-8 overflow-hidden rounded-xl2 ring-1 ring-ink-100">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink-900 text-white">
                  <tr>
                    <th className="px-5 py-3.5 font-medium">Grade</th>
                    <th className="px-5 py-3.5 font-medium">Minimum Age (as of Mar 31)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100 bg-white">
                  {AGE_CHART.map((row) => (
                    <tr key={row.grade}>
                      <td className="px-5 py-3.5 font-medium text-ink-900">{row.grade}</td>
                      <td className="px-5 py-3.5 text-slate-600">{row.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Fee structure varies by grade — request the detailed breakdown during your enquiry.
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="Checklist" title="Documents required" />
            <ul className="mt-8 space-y-3">
              {DOCUMENTS.map((doc) => (
                <li key={doc} className="flex items-start gap-3 rounded-xl bg-ivory p-4">
                  <FiCheck className="mt-0.5 shrink-0 text-sage-600" size={16} />
                  <span className="text-sm text-ink-800">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={SITE.enrollUrl} variant="primary" icon={FiArrowRight}>
                Proceed to Enrollment Portal
              </Button>
              <Button to="/contact" variant="outline">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCTA />
      <FAQSection />
    </>
  );
}
