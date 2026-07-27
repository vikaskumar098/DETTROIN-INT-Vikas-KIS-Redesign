import { motion } from "framer-motion";
import SectionHeading from "./shared/SectionHeading";
import DecorativeBlob from "./shared/DecorativeBlob";
import { SERVICES } from "../../data/landingContent";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Background blobs */}
      <DecorativeBlob color="bg-blob1" size="w-[500px] h-[500px]" className="-right-[200px] -top-[100px] opacity-20" />
      <DecorativeBlob color="bg-blob2" size="w-[300px] h-[300px]" className="-left-[100px] bottom-[50px] opacity-20" />

      <div className="container-vid relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center">
            <SectionHeading>Our Achievements</SectionHeading>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-4 leading-tight">
            By the Numbers
          </h2>
        </div>

        {/* Stats in a row — matching original's horizontal stat bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bgLight rounded-[2rem] p-8 lg:p-10 text-center shadow-soft hover:shadow-highlight transition-shadow duration-300 group"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.titleWord}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
