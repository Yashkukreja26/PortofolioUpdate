import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BhagautiSection from "./components/BhagautiSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';

const Footer = () => (
  <footer className="relative z-10 py-8 bg-[#030014]/80 backdrop-blur-md border-t border-white/10">
    <div className="container mx-auto px-4 text-center">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-sm text-slate-400 mb-3">
        <a href="#Home" className="hover:text-white transition-colors">Home</a>
        <span className="text-slate-600">•</span>
        <a href="#About" className="hover:text-white transition-colors">About</a>
        <span className="text-slate-600">•</span>
        <a href="#Bhagauti" className="text-pink-400 hover:text-white transition-colors font-semibold">Bhagauti.in</a>
        <span className="text-slate-600">•</span>
        <a href="#Experience" className="hover:text-white transition-colors">Experience</a>
        <span className="text-slate-600">•</span>
        <a href="#Portofolio" className="hover:text-white transition-colors">Portfolio</a>
        <span className="text-slate-600">•</span>
        <a href="#Contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <span className="block text-xs sm:text-sm text-slate-500">
        © {new Date().getFullYear()} Yash Kukreja. Founder at{" "}
        <a href="https://bhagauti.in" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
          Bhagauti Engineering
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
);

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <BhagautiSection />
          <ExperienceTimeline />
          <Portofolio />
          <ContactPage />
          <Footer />
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <Footer />
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;