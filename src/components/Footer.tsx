
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-cyber-purple/20 bg-cyber-darker/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-6 w-6 text-cyber-purple mr-2" />
            <span className="font-cyber text-base">
              PRACHIT<span className="text-cyber-blue">::</span>REGMI
            </span>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="w-8 h-8 rounded-full border border-cyber-purple/30 flex items-center justify-center text-cyber-purple hover:bg-cyber-purple/20 transition-colors">
              <Github size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-cyber-blue/30 flex items-center justify-center text-cyber-blue hover:bg-cyber-blue/20 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:prachitregmi4546@gmail.com" className="w-8 h-8 rounded-full border border-cyber-orange/30 flex items-center justify-center text-cyber-orange hover:bg-cyber-orange/20 transition-colors">
              <Mail size={16} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-xs font-mono text-gray-400">
            &copy; {currentYear} <span className="text-cyber-purple">PRACHIT REGMI</span>. ALL RIGHTS RESERVED.
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 text-center text-xs font-mono text-gray-500">
          <div className="inline-block px-4 py-1 border border-cyber-purple/20 rounded-full bg-cyber-darker">
            <span className="text-cyber-purple">CYBERSECURITY</span> • <span className="text-cyber-blue">ETHICAL HACKING</span> • <span className="text-cyber-orange">WEB DEVELOPMENT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
