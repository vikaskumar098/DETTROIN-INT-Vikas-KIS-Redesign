import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import AboutUs from "../components/landing/AboutUs";
import Faculty from "../components/landing/Faculty";
import OurMission from "../components/landing/OurMission";
import Services from "../components/landing/Services";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden w-full max-w-[100vw]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Faculty />
        <OurMission />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

