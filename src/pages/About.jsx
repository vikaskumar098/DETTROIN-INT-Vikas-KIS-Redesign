import PageHero from "../components/layout/PageHero";
import About from "../components/sections/About";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Achievements from "../components/sections/Achievements";
import FacultySpotlight from "../components/sections/FacultySpotlight";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KIS"
        title="A five-acre campus built for curiosity"
        description="Our mission, our values, and the people who bring them to life every day."
      />
      <About />
      <WhyChooseUs />
      <FacultySpotlight />
      <Achievements />
    </>
  );
}
