import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "./shared/SectionHeading";
import DecorativeBlob from "./shared/DecorativeBlob";
import { FACULTY_PROGRAMS } from "../../data/landingContent";

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 lg:py-32 relative bg-bgLight">
      {/* Background blobs */}
      <DecorativeBlob color="bg-blob2" size="w-64 h-64" className="-right-20 top-20 opacity-60" />
      <DecorativeBlob color="bg-blob1" size="w-40 h-40" className="left-10 bottom-10 opacity-60" />

      <div className="container-vid relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center">
            <SectionHeading>Explore KIS</SectionHeading>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-navy mt-4 leading-tight">
            Here is the Reason How We Help <br className="hidden lg:block"/>
            Students to Explore Their Talent.
          </h3>
        </div>

        {/* 2×2 grid matching the original layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FACULTY_PROGRAMS.map((program, index) => {
            const Icon = program.icon;
            
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-soft group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Image area */}
                <div className="h-48 relative overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>
                
                {/* Text content */}
                <div className="p-8">
                  <h4 className="font-bold text-navy text-xl mb-3">{program.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {program.description}
                  </p>
                  <Link to={program.route} className="inline-block mt-4 text-primary font-bold text-sm hover:text-primaryDark transition-colors">
                    Explore now
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
