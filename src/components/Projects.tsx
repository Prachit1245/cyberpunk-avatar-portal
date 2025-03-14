
import { useState, useEffect } from 'react';
import { FolderKanban, ExternalLink, Code, Shield, Eye, Terminal } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const projects = [
    {
      title: "XSS Vulnerability Scanner",
      description: "A tool developed to identify cross-site scripting vulnerabilities in web applications.",
      tags: ["Security", "JavaScript", "Web"],
      icon: <Shield size={24} className="text-cyber-purple" />,
      status: "In Progress",
      color: "border-cyber-purple",
      bgColor: "group-hover:bg-cyber-purple/20"
    },
    {
      title: "Personal Cybersecurity Portfolio",
      description: "This website showcasing my skills and projects in a futuristic cyberpunk style.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      icon: <Code size={24} className="text-cyber-orange" />,
      status: "Active",
      color: "border-cyber-orange",
      bgColor: "group-hover:bg-cyber-orange/20"
    },
    {
      title: "Network Traffic Analyzer",
      description: "A simple tool to monitor and analyze network traffic for security threats.",
      tags: ["Python", "Networking", "Security"],
      icon: <Eye size={24} className="text-cyber-blue" />,
      status: "Planning",
      color: "border-cyber-blue",
      bgColor: "group-hover:bg-cyber-blue/20"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-cyber-grid bg-cyber-grid-size opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-orange/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="flex items-center mb-12">
            <FolderKanban size={28} className="text-cyber-orange mr-3" />
            <h2 className="text-3xl font-cyber text-glow">PROJECT<span className="text-cyber-blue">::</span>LAB</h2>
            <div className="h-px flex-grow bg-gradient-cyber ml-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group transition-all duration-700 delay-${index * 150} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`h-full bg-cyber-darker/60 rounded-lg p-6 border ${project.color} hover:border-opacity-100 border-opacity-30 transition-all duration-300 relative overflow-hidden`}>
                  {/* Status indicator */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-cyber-darker text-xs font-mono rounded-full border border-cyber-purple/30">
                    {project.status === "Active" && (
                      <span className="text-green-400 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
                        ACTIVE
                      </span>
                    )}
                    {project.status === "In Progress" && (
                      <span className="text-cyber-orange flex items-center">
                        <span className="w-2 h-2 rounded-full bg-cyber-orange mr-1.5 animate-pulse"></span>
                        IN PROGRESS
                      </span>
                    )}
                    {project.status === "Planning" && (
                      <span className="text-cyber-blue flex items-center">
                        <span className="w-2 h-2 rounded-full bg-cyber-blue mr-1.5 animate-pulse"></span>
                        PLANNING
                      </span>
                    )}
                  </div>
                  
                  {/* Project Content */}
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded flex items-center justify-center mr-3 transition-colors ${project.bgColor}`}>
                        {project.icon}
                      </div>
                      <h3 className="font-cyber text-lg">{project.title}</h3>
                    </div>
                    
                    <p className="text-sm text-gray-300 mb-4 flex-grow">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-2 py-1 bg-cyber-darker border border-cyber-purple/20 rounded font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-cyber-purple/20">
                      <button className="text-xs font-mono text-cyber-blue flex items-center">
                        <Terminal size={14} className="mr-1" />
                        DETAILS
                      </button>
                      
                      <button className="text-xs font-mono text-cyber-purple flex items-center">
                        <ExternalLink size={14} className="mr-1" />
                        PREVIEW
                      </button>
                    </div>
                  </div>
                  
                  {/* Animated corner */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 border-t-2 border-l-2 border-cyber-purple/30 transform rotate-45 group-hover:border-cyber-purple transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Cyberpunk Terminal Showcase */}
          <div className={`mt-12 bg-cyber-darker rounded-lg overflow-hidden border border-cyber-purple/30 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-cyber-dark px-4 py-2 flex items-center border-b border-cyber-purple/30">
              <div className="w-3 h-3 rounded-full bg-cyber-orange mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-purple mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-blue mr-2"></div>
              <span className="text-xs font-mono text-cyber-purple/70">terminal@prachit:~/projects$</span>
            </div>
            
            <div className="p-4 font-mono text-sm">
              <div className="text-cyber-purple">
                {">"} <span className="text-white">./run_security_scanner.sh --target=example.com</span>
              </div>
              
              <div className="mt-2">
                <div className="text-cyber-orange mb-1">[+] Initializing security scan...</div>
                <div className="text-cyber-blue mb-1">[+] Checking for XSS vulnerabilities...</div>
                <div className="text-green-400 mb-1">[+] Analyzing response headers...</div>
                <div className="text-cyber-pink mb-1">[+] Testing input validation...</div>
                <div className="text-white mb-1">
                  <span className="inline-block w-2 h-4 bg-white animate-blink-caret"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
