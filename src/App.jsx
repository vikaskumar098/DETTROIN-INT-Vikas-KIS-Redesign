import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/layout/LoadingScreen";
import Home from "./pages/Home";
import IllustrationPreview from "./pages/IllustrationPreview";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionPage from "./pages/AdmissionPage";
import CoCurricularPage from "./pages/CoCurricularPage";
import GalleryPage from "./pages/GalleryPage";

/** Scrolls to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/co-curricular" element={<CoCurricularPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/illustrations" element={<IllustrationPreview />} />
          {/* Catch all to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // slightly longer loader to show off
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
