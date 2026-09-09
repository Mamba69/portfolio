import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import SplashCursor from "./components/Cursor/SplashCursor";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Philosophy from "./components/Philosophy";
import LatestResearch from "./components/CaseStudy";
import WorkExperience from "./components/WorkExperience";
import Stack from "./components/Stack";
import TrustedBy from "./components/TrustedBy";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import ShivamCV from "./components/CV/ShivamCV";
import "./App.css";
import ShiftyCaseStudy from "./pages/ShiftyCaseStudy";
import RideOnCaseStudy from "./pages/RideOnCaseStudy";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lenisRef = useRef(null);
  const location = useLocation();

  // Create Lenis once for the whole app's lifetime.
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Every time the route changes, jump to top and force Lenis to
  // re-measure the new page's height. Without this, Lenis keeps using
  // whichever page's height it calculated first, so scrolling can get
  // stuck or stop working entirely on pages of a different length.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });

    // Re-measure again shortly after mount, since images inside the new
    // page (case study screens, etc.) can still be loading and will
    // change the page's real height after Lenis's first measurement.
    const raf1 = requestAnimationFrame(() => lenis.resize());
    const t1 = setTimeout(() => lenis.resize(), 200);
    const t2 = setTimeout(() => lenis.resize(), 800);

    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  return (
    <>
      <SplashCursor
        CURL={6}
        SPLAT_RADIUS={0.25}
        COLOR_UPDATE_SPEED={7}
        RAINBOW_MODE
        DENSITY_DISSIPATION={4}
        VELOCITY_DISSIPATION={2}
      />
      <Routes>
        <Route path="/" element={
          <div className="app">
            <div className="ambient-glow"></div>
            <Navbar onHireClick={() => setIsModalOpen(true)} />
            <Hero />
            <Marquee />
            <LatestResearch />
            <div className="section-divider"></div>
            <WorkExperience />
            <div className="section-divider"></div>
            <Stack />
            <div className="section-divider"></div>
            <TrustedBy />
            <div className="section-divider"></div>
            <Services />
            <div className="section-divider"></div>
            <Philosophy />
            <Testimonials />
            <FAQ />
            <Contact onHireClick={() => setIsModalOpen(true)} />
            <Footer />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        } />
        <Route path="/cv" element={<ShivamCV />} />
        <Route path="/work/shifty" element={<ShiftyCaseStudy />} />
        <Route path="/work/ride-on" element={<RideOnCaseStudy />} />
      </Routes>
    </>
  );
}

export default App;
