
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-cyber-dark flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-cyber-purple border-r-cyber-blue border-b-cyber-orange border-l-transparent rounded-full animate-spin mb-4"></div>
          <div className="font-mono text-sm text-cyber-purple relative">
            <span className="animate-pulse">INITIALIZING SYSTEM</span>
            <span className="absolute -bottom-6 left-0 right-0 text-xs text-gray-500">
              LOADING CYBERSECURITY PORTFOLIO
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark text-white relative">
      {/* The MatrixRain component is now added as a global background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <MatrixRain />
      </div>
      
      {/* Overlay grid for better readability */}
      <div className="fixed inset-0 bg-cyber-grid bg-cyber-grid-size opacity-10 z-0"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
