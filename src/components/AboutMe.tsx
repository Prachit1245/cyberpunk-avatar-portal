
import { Shield, Terminal, Code, Zap, GraduationCap, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
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

  const timelineItems = [
    {
      year: "NOW",
      title: "CSIT Student",
      description: "Metahorizon College",
      icon: <GraduationCap className="text-cyber-orange" size={24} />,
      color: "border-cyber-orange",
      bgColor: "bg-cyber-orange/20"
    },
    {
      year: "JOURNEY",
      title: "Self-Learning",
      description: "Cybersecurity & Ethical Hacking",
      icon: <Shield className="text-cyber-purple" size={24} />,
      color: "border-cyber-purple",
      bgColor: "bg-cyber-purple/20"
    },
    {
      year: "SKILL",
      title: "Web Development",
      description: "Learning front-end technologies",
      icon: <Code className="text-cyber-blue" size={24} />,
      color: "border-cyber-blue",
      bgColor: "bg-cyber-blue/20"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyber-grid bg-cyber-grid-size opacity-10 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-purple/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="flex items-center mb-12">
            <Terminal size={28} className="text-cyber-purple mr-3" />
            <h2 className="text-3xl font-cyber text-glow">ABOUT<span className="text-cyber-blue">::</span>ME</h2>
            <div className="h-px flex-grow bg-gradient-cyber ml-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Profile Info Card */}
            <div className="bg-cyber-darker/60 rounded-lg p-6 border border-cyber-purple/30 cyber-border relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-cyber-darker rounded flex items-center justify-center border border-cyber-purple/30">
                <Zap size={20} className="text-cyber-purple" />
              </div>
              
              <h3 className="text-xl font-cyber mb-4 text-cyber-purple">IDENTITY<span className="text-white">::</span>PROFILE</h3>
              
              <p className="font-mono text-sm leading-relaxed mb-6 text-gray-300">
                I am a CSIT student with a passion for cybersecurity and ethical hacking. Currently exploring the digital realm 
                to develop skills in penetration testing, web security, and programming. My focus is on building expertise in 
                securing digital systems and understanding vulnerabilities.
              </p>
              
              {/* Personal Details */}
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-start">
                  <div className="w-28 flex items-center text-cyber-purple">
                    <User size={16} className="mr-2" />
                    <span>NAME</span>
                  </div>
                  <div className="flex-1">Prachit Regmi</div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-28 flex items-center text-cyber-purple">
                    <MapPin size={16} className="mr-2" />
                    <span>LOCATION</span>
                  </div>
                  <div className="flex-1">Nepal</div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-28 flex items-center text-cyber-purple">
                    <Mail size={16} className="mr-2" />
                    <span>EMAIL</span>
                  </div>
                  <div className="flex-1 break-all">prachitregmi4546@gmail.com</div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-28 flex items-center text-cyber-purple">
                    <Phone size={16} className="mr-2" />
                    <span>PHONE</span>
                  </div>
                  <div className="flex-1">9843681979</div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-28 flex items-center text-cyber-purple">
                    <GraduationCap size={16} className="mr-2" />
                    <span>EDUCATION</span>
                  </div>
                  <div className="flex-1">CSIT Student at Metahorizon College</div>
                </div>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-purple via-cyber-blue to-cyber-orange"></div>
              
              <div className="space-y-12 relative">
                {timelineItems.map((item, index) => (
                  <div key={index} className={`ml-12 relative transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    {/* Timeline node */}
                    <div className={`absolute -left-[40px] w-10 h-10 ${item.bgColor} rounded-full border ${item.color} flex items-center justify-center z-10`}>
                      {item.icon}
                    </div>
                    
                    <div className="font-mono text-xs text-cyber-purple mb-1">{item.year}</div>
                    <h4 className="text-lg font-cyber mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Missing imports
import { User, Mail, Phone } from 'lucide-react';

export default AboutMe;
