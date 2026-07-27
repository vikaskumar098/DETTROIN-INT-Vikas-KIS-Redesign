import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import PillButton from "./shared/PillButton";
import DecorativeBlob from "./shared/DecorativeBlob";
import FloatingIllustration from "./shared/FloatingIllustration";
import { ChildWithLightbulb, ChildOnPencil, RulerTriangle, FloatingCube, LocationPin } from "../../assets/illustrations";
import { SITE } from "../../utils/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container-vid relative z-10">
        
        {/* Large left blob background */}
        <DecorativeBlob 
          color="bg-blob1" 
          size="w-[800px] h-[800px]" 
          className="rounded-[80px] -top-20 -left-64 z-0 opacity-100" 
          floatDelay={0}
        />

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
          
          {/* Left Column (Text) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Giant quote mark in background */}
            <span className="absolute -top-16 -left-8 text-9xl font-display font-bold text-white opacity-80 select-none z-[-1]">
              “
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-[1.15] tracking-tight">
              <span className="text-primary">Let's explore</span> the limitless possibilities of knowledge.
            </h1>

            <p className="mt-8 text-gray-700 leading-relaxed max-w-md">
              We are committed to providing high-quality teaching and developing intellectually curious, self-motivated, enthusiastic young children with an endearing love of learning.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PillButton variant="primary" href="https://krishnaintf.accevate.com/registration/">Click to Enroll</PillButton>
              <PillButton variant="secondary" href="https://krishnaintf.accevate.com/online/main">Pay School Fee</PillButton>
            </div>
          </motion.div>


          {/* Right Column (Illustrations) */}
          <div className="relative h-[450px] lg:h-[550px] w-full hidden md:block">
            {/* Child with Lightbulb */}
            <FloatingIllustration duration={5} amplitudeY={-15} className="bottom-0 left-0">
              <ChildWithLightbulb width={300} height={340} />
            </FloatingIllustration>

            {/* Child on Pencil */}
            <FloatingIllustration duration={4} delay={1} amplitudeY={-10} amplitudeRotate={4} className="top-10 right-0">
              <ChildOnPencil width={260} height={320} />
            </FloatingIllustration>

            {/* Ruler Triangle */}
            <FloatingIllustration duration={6} delay={2} amplitudeY={-8} className="top-20 left-10">
              <RulerTriangle width={120} height={120} />
            </FloatingIllustration>

            {/* Small Cubes */}
            <FloatingIllustration duration={3} delay={0.5} amplitudeY={-6} className="top-60 -left-10">
              <FloatingCube width={40} height={46} />
            </FloatingIllustration>
            <FloatingIllustration duration={4} delay={1.5} amplitudeY={8} className="top-32 right-10">
              <FloatingCube width={50} height={58} />
            </FloatingIllustration>

            {/* Location Pin */}
            <div className="absolute bottom-10 left-10">
              <LocationPin width={24} height={34} />
            </div>
          </div>
        </div>

        {/* Contact info block bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex flex-col items-end absolute bottom-0 right-10 z-20"
        >
          <div className="flex items-center gap-3">
            <span className="font-bold text-navy text-xl">+ (91) 983-70-50000</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accentDark">
              <FiPhone size={14} />
            </div>
          </div>
          <span className="text-[11px] text-textMuted font-medium tracking-wide mt-1">
            Monday - Friday, 9:00 AM - 5:00 PM
          </span>
        </motion.div>
      </div>
    </section>
  );
}
