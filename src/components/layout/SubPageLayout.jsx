import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

/**
 * Shared layout for sub-pages (Academics, Admission, Co-Curricular).
 * Props:
 *   title      — page title shown on the hero banner
 *   heroImage  — banner background image
 *   tabs       — array of { id, label, content }
 */
export default function SubPageLayout({ title, heroImage, tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className="relative overflow-hidden w-full max-w-[100vw]">
      <Navbar />

      {/* ─── Hero Banner ─── */}
      <section className="relative h-[340px] lg:h-[420px] overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-navy/20" />
        <div className="container-vid relative z-10 h-full flex flex-col justify-end pb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-4 transition-colors w-fit"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide font-display">
            {title}
          </h1>
        </div>
      </section>

      {/* ─── Tab Navigation ─── */}
      <nav className="bg-bgLight border-b border-gray-200 sticky top-0 z-30">
        <div className="container-vid overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Tab Content ─── */}
      <main className="bg-white min-h-[60vh]">
        <div className="container-vid py-12 lg:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeContent && <TabContent content={activeContent} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/**
 * Renders tab content dynamically based on the content shape.
 */
function TabContent({ content }) {
  return (
    <div className="max-w-4xl">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-bold text-navy font-display uppercase tracking-wide">
        {content.heading}
      </h2>
      <div className="w-16 h-1 bg-primary mt-4 mb-8 rounded-full" />

      {/* Paragraphs */}
      {content.paragraphs?.map((p, i) => (
        <p key={i} className="text-gray-700 leading-relaxed mb-4 text-[15px]">
          {p}
        </p>
      ))}

      {/* Terms (Admission) */}
      {content.terms && (
        <div className="my-6 space-y-2">
          {content.terms.map((term, i) => (
            <p key={i} className="text-gray-800">
              <span className="font-bold">{term.label}:</span>{" "}
              <span className="text-primary font-semibold">{term.value}</span>
            </p>
          ))}
        </div>
      )}

      {/* Key Strengths (Academics) */}
      {content.keyStrengths && (
        <div className="mt-8">
          <h3 className="text-primary font-bold text-lg mb-4">Key Strengths</h3>
          <ul className="space-y-3">
            {content.keyStrengths.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Simple list */}
      {content.list && (
        <ul className="mt-6 space-y-3">
          {content.list.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Simple bullets */}
      {content.bullets && (
        <ul className="mt-6 space-y-3">
          {content.bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Sections with sub-bullets (Admission) */}
      {content.sections?.map((section, i) => (
        <div key={i} className="mt-10">
          <h3 className="text-primary font-bold text-xl mb-3 uppercase tracking-wide">
            {section.title}
          </h3>
          {section.text && (
            <p className="text-gray-700 leading-relaxed mb-4 text-[15px]">{section.text}</p>
          )}
          {section.bullets && (
            <ul className="space-y-3">
              {section.bullets.map((bullet, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-700 text-[15px]">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* External link button */}
      {content.externalLink && (
        <div className="mt-8">
          <a
            href={content.externalLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-primaryDark transition-colors shadow-md hover:shadow-lg"
          >
            {content.externalLink.label}
            <FiExternalLink size={16} />
          </a>
        </div>
      )}
    </div>
  );
}
