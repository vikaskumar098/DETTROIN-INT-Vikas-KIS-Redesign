import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PillButton from "./shared/PillButton";
import SectionHeading from "./shared/SectionHeading";
import DecorativeBlob from "./shared/DecorativeBlob";
import aboutImg from "../../assets/images/imgi_8_website 1.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <DecorativeBlob color="bg-blob1" size="w-24 h-24" className="-left-12 top-40" />
      <DecorativeBlob color="bg-blob2" size="w-32 h-32" className="-bottom-16 -left-16" />

      <div className="container-vid">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Text */}
          <div>
            <SectionHeading>About us</SectionHeading>
            <h3 className="font-bold text-navy text-2xl lg:text-3xl mt-4">Krishna International School</h3>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Amongst the best CBSE schools in Aligarh, the school is set amidst 5 acres of land, away from the city's pollution. The school provides an ideal environment for academic and co-curricular excellence. The school has all facilities required for the overall development of children. Facilities such as an equipped library, theatre, science laboratories and sports for students, so they excel in academics and enhance their co-curricular skills and talents.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The school is committed to the cause of promoting sound moral values, encouraging a scientific temperament and developing the overall personality of its students. Regular counselling of students gives them an insight into the competitive world ahead and encourages students to build a healthy spirit of competition.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Under the canopy of the school motto, "dedicated to excellence," the staff and the management of K.I.S. endeavour, students not only excel in academics but gives opportunities in different fields besides academics. K.I.S. also imbue them with social awareness and pride in our rich cultural heritage.
            </p>
            <div className="mt-8">
              <PillButton variant="secondary" className="!bg-accent/20 hover:!bg-accent !text-accentDark">
                Read more
              </PillButton>
            </div>
          </div>

          {/* Right Photo Area */}
          <div className="relative">
            {/* The photo mask / container */}
            <div className="rounded-[4rem] rounded-bl-[6rem] overflow-hidden bg-bgLight aspect-[4/3] shadow-soft relative">
              <img
                src={aboutImg}
                alt="School Activities"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Carousel Arrows (decorative for now) */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                <button className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md text-accentDark hover:bg-bgLight transition" aria-label="Previous image">
                  <FiChevronLeft />
                </button>
                <button className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md text-accentDark hover:bg-bgLight transition" aria-label="Next image">
                  <FiChevronRight />
                </button>
              </div>
            </div>

            {/* Floating Highlight Card */}
            <div className="absolute -bottom-8 -left-8 lg:-left-16 bg-white p-6 rounded-[2rem] shadow-highlight max-w-[280px]">
              <div className="flex gap-4 items-start">
                <div className="bg-blob1 rounded-full p-3 text-primary mt-1 shrink-0">
                  {/* Small icon representing team/education */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <p className="font-bold text-navy leading-snug">
                  Dedicated to excellence, imparting <span className="text-primary underline decoration-2 underline-offset-4">social awareness</span> and <span className="text-primary">pride</span> in our heritage.
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
