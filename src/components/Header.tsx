
import { useState, useEffect } from 'react';
import { Terminal, Shield, Code, User, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const menuItems = [
    { name: 'Home', icon: <Terminal size={18} />, href: '#home' },
    { name: 'About', icon: <User size={18} />, href: '#about' },
    { name: 'Skills', icon: <Shield size={18} />, href: '#skills' },
    { name: 'Projects', icon: <Code size={18} />, href: '#projects' },
    { name: 'Contact', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6",
        scrolled ? "bg-cyber-darker/80 backdrop-blur-md border-b border-cyber-purple/20" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <Shield className="h-8 w-8 text-cyber-purple animate-glow-pulse" />
          <span className="font-cyber text-xl font-bold text-glow group-hover:text-cyber-purple transition-colors">
            PRACHIT<span className="text-cyber-blue">::</span>REGMI
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="group flex items-center space-x-2 text-sm font-mono transition-colors hover:text-cyber-purple"
            >
              <span className="text-cyber-purple">{item.icon}</span>
              <span className="relative overflow-hidden">
                <span className="block group-hover:opacity-0 transition-opacity">
                  {item.name}
                </span>
                <span className="block absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-glow">
                  {item.name}
                </span>
              </span>
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 group" 
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-cyber-purple transition-all",
            menuOpen && "rotate-45 translate-y-2"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-cyber-purple transition-all",
            menuOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-cyber-purple transition-all",
            menuOpen && "-rotate-45 -translate-y-2"
          )}></span>
        </button>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-cyber-darker/95 backdrop-blur-sm flex flex-col pt-24 px-6 transition-all duration-300 md:hidden clip-terminal",
          menuOpen ? "top-0" : "-top-full"
        )}>
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-lg py-2 border-b border-cyber-purple/20 hover:bg-cyber-purple/10 px-4 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-cyber-purple">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-auto mb-12 flex flex-col space-y-3 text-sm font-mono text-cyber-purple/70">
            <a href="mailto:prachitregmi4546@gmail.com" className="flex items-center space-x-2">
              <Mail size={16} />
              <span>prachitregmi4546@gmail.com</span>
            </a>
            <a href="tel:9843681979" className="flex items-center space-x-2">
              <Phone size={16} />
              <span>9843681979</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
