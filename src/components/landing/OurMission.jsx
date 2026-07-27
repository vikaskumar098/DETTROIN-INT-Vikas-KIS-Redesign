import { motion } from "framer-motion";
import SectionHeading from "./shared/SectionHeading";
import FeatureListItem from "./shared/FeatureListItem";
import { MISSION_FEATURES } from "../../data/landingContent";
import { GrowthIcon, CurriculumIcon, RocketIcon, PaletteIcon, LightbulbIcon } from "../../assets/illustrations";
import missionImg from "../../assets/images/imgi_9_website 2.jpg";

const ICON_MAP = {
  GrowthIcon,
  CurriculumIcon,
  RocketIcon,
  PaletteIcon,
  LightbulbIcon
};

export default function OurMission() {
  return (
    <section id="mission" className="py-20 lg:py-32 relative bg-white">
      <div className="container-vid relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Area - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* The photo mask / container */}
            <div className="rounded-[4rem] rounded-tl-[10rem] overflow-hidden bg-bgBlue aspect-square shadow-soft relative flex items-center justify-center p-8">
               <img 
                 src={missionImg} 
                 alt="School building" 
                 className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
               />
               <div className="relative z-10 text-center text-white bg-navy/40 p-8 rounded-3xl backdrop-blur-sm">
                 <h3 className="font-display font-bold text-3xl mb-2">Dedicated to Excellence</h3>
                 <p className="font-medium text-white/90">Shaping the future, one student at a time.</p>
               </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/20 rounded-full z-[-1] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-accent/10 rounded-full z-[-1] pointer-events-none" />
          </motion.div>


          {/* Right Text / Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading>Our Mission</SectionHeading>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-4 leading-tight">
              An ideal environment for academic and co-curricular excellence
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The school has all facilities required for the overall development of children — an equipped library, theatre, science laboratories and sports facilities.
            </p>

            <div className="mt-10 space-y-5">
              {MISSION_FEATURES.map((feature, index) => {
                const IconComponent = ICON_MAP[feature.icon];
                return (
                  <FeatureListItem 
                    key={feature.id} 
                    title={feature.title} 
                    delay={index * 0.1}
                    icon={IconComponent}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
