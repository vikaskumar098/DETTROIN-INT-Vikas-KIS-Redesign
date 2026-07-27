import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import SectionHeading from "./shared/SectionHeading";
import { FAQS } from "../../data/landingContent";
import DecorativeBlob from "./shared/DecorativeBlob";

export default function FAQ() {
  const [openId, setOpenId] = useState(FAQS[0]?.id);

  return (
    <section id="faq" className="py-20 lg:py-32 relative bg-white overflow-hidden">
      <DecorativeBlob color="bg-blob1" size="w-72 h-72" className="-left-20 top-20 opacity-30" />
      
      <div className="container-vid relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <SectionHeading>FAQ</SectionHeading>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-4">
            Answers to your most frequently <br className="hidden sm:block"/> asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id}
                className={`border-2 rounded-[2rem] transition-colors duration-300 overflow-hidden ${
                  isOpen ? 'border-primary bg-bgLight/30' : 'border-transparent bg-bgLight'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-lg text-navy pr-4">{faq.q}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-primary text-white' : 'bg-white text-navy shadow-sm'
                  }`}>
                    {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0 text-textMuted leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
