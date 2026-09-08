import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
      </Routes>
    </>
  );
}

export default App;
