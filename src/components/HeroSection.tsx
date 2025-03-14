
import { useEffect, useRef, useState } from 'react';
import { Terminal, ChevronDown } from 'lucide-react';
import MatrixRain from './MatrixRain';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const typingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Simulating a terminal typing effect
    if (typingRef.current) {
      const element = typingRef.current;
      const text = "Hello, world. Welcome to my cybersecurity portal.";
      element.textContent = "";
      
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 80);
      
      return () => clearInterval(typeInterval);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-20 z-[-1]"></div>
      
      {/* Content */}
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {/* Cyberpunk Avatar (Placeholder) */}
          <div className="mx-auto w-44 h-44 mb-6 relative animate-float">
            <div className="absolute inset-0 bg-gradient-cyber rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute inset-1 bg-cyber-darker rounded-full flex items-center justify-center overflow-hidden">
              <Terminal size={56} className="text-cyber-purple animate-glow-pulse" />
            </div>
            <div className="absolute -inset-1 border border-cyber-purple rounded-full opacity-50"></div>
            <div className="absolute -inset-3 border border-cyber-blue rounded-full opacity-30"></div>
          </div>
          
          {/* Name and Title with Glitch Effect */}
          <h1 className="text-4xl md:text-6xl font-cyber mb-4 text-glow animate-glow-pulse">
            <span className="inline-block hover:animate-glitch">PRACHIT</span>{" "}
            <span className="text-cyber-blue inline-block hover:animate-glitch">REGMI</span>
          </h1>
          
          <div className="h-0.5 w-40 md:w-60 mx-auto bg-gradient-cyber my-6"></div>
          
          {/* Descriptive Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="px-3 py-1 bg-cyber-purple/20 border border-cyber-purple/40 rounded text-sm font-mono">CYBERSECURITY</span>
            <span className="px-3 py-1 bg-cyber-blue/20 border border-cyber-blue/40 rounded text-sm font-mono">GRAPHIC DESIGN</span>
            <span className="px-3 py-1 bg-cyber-orange/20 border border-cyber-orange/40 rounded text-sm font-mono">ETHICAL HACKING</span>
          </div>
          
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-cyber-darker/80 border border-cyber-purple/30 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse"></div>
            <span className="text-sm font-mono text-cyber-purple">NEPAL</span>
          </div>
          
          {/* Terminal Text Effect */}
          <div className="max-w-2xl mx-auto mb-10 px-4 py-3 bg-cyber-darker border border-cyber-purple/40 rounded font-mono text-sm md:text-base">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-cyber-orange mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-purple mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-blue mr-2"></div>
              <span className="text-xs text-cyber-purple/70">terminal@prachit:~$</span>
            </div>
            <div ref={typingRef} className="text-left min-h-[24px] overflow-hidden"></div>
            <div className="inline-block w-3 h-5 ml-1 bg-cyber-purple/70 animate-blink-caret"></div>
          </div>
          
          {/* Scroll Indicator */}
          <a href="#about" className="inline-block mt-4 text-cyber-purple hover:text-cyber-purple-bright animate-bounce">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
