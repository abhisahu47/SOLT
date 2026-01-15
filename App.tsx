import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WisdomLab from './components/WisdomLab';
import SpecimenRoom from './components/SpecimenRoom';
import FunZone from './components/FunZone';
import Footer from './components/Footer';

// Lazy load heavy page components for performance (Code Splitting)
const SpecimenGallery = React.lazy(() => import('./components/SpecimenGallery'));
const StudyMaterial = React.lazy(() => import('./components/StudyMaterial'));
const Interesting = React.lazy(() => import('./components/Interesting'));
const EvolutionChapter = React.lazy(() => import('./components/EvolutionChapter'));
const CareerMap = React.lazy(() => import('./components/CareerMap'));

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-slate-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-forest-600"></div>
  </div>
);

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'specimen', 'wisdom', 'funzone'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is roughly in viewport
          if (rect.top >= -300 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <SpecimenRoom />
      <WisdomLab />
      <FunZone />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<SpecimenGallery />} />
          <Route path="/study" element={<StudyMaterial />} />
          <Route path="/study/evolution" element={<EvolutionChapter />} />
          <Route path="/interesting" element={<Interesting />} />
          <Route path="/career-map" element={<CareerMap />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;