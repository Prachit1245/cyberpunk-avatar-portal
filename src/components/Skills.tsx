
import { useState, useEffect } from 'react';
import { Shield, Terminal, Code, Database, Cpu, Laptop } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState({
    c: 0,
    web: 0,
    security: 0,
    xss: 0,
    design: 0
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
          
          // Animate progress bars when section becomes visible
          setTimeout(() => {
            setProgressValues({
              c: 60, 
              web: 75,
              security: 70,
              xss: 65,
              design: 80
            });
          }, 300);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const skills = [
    {
      name: "C Programming",
      progress: progressValues.c,
      description: "Fundamentals and application development",
      icon: <Cpu size={24} className="text-cyber-blue" />,
      color: "from-cyber-blue to-cyber-purple"
    },
    {
      name: "Web Development",
      progress: progressValues.web,
      description: "HTML, CSS, JavaScript and responsive design",
      icon: <Code size={24} className="text-cyber-orange" />,
      color: "from-cyber-orange to-cyber-purple"
    },
    {
      name: "Cybersecurity",
      progress: progressValues.security,
      description: "System security principles and best practices",
      icon: <Shield size={24} className="text-cyber-purple" />,
      color: "from-cyber-purple to-cyber-blue"
    },
    {
      name: "Ethical Hacking (XSS)",
      progress: progressValues.xss,
      description: "Cross-site scripting detection and prevention",
      icon: <Terminal size={24} className="text-cyber-purple-bright" />,
      color: "from-cyber-purple-bright to-cyber-pink"
    },
    {
      name: "Graphic Design",
      progress: progressValues.design,
      description: "Digital art and visual communication",
      icon: <Laptop size={24} className="text-cyber-pink" />,
      color: "from-cyber-pink to-cyber-orange"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-cyber-darker/50">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-10 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="flex items-center mb-12">
            <Database size={28} className="text-cyber-blue mr-3" />
            <h2 className="text-3xl font-cyber text-glow">SKILL<span className="text-cyber-purple">::</span>MATRIX</h2>
            <div className="h-px flex-grow bg-gradient-cyber ml-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills Overview */}
            <div>
              <div className="bg-cyber-darker/80 rounded-lg p-6 border border-cyber-blue/30 cyber-border h-full">
                <h3 className="text-xl font-cyber mb-6 text-cyber-blue">ABILITIES<span className="text-white">::</span>OVERVIEW</h3>
                
                <p className="font-mono text-sm leading-relaxed mb-6 text-gray-300">
                  Currently focused on developing key skills in programming and cybersecurity. My learning path includes 
                  practical applications of ethical hacking techniques, front-end development skills, and system security 
                  principles.
                </p>
                
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-start">
                    <Shield size={18} className="text-cyber-purple mr-2 mt-0.5" />
                    <div>
                      <span className="block text-white mb-1">Security Mindset</span>
                      <span className="text-gray-400">Approaching problems with security awareness</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Terminal size={18} className="text-cyber-blue mr-2 mt-0.5" />
                    <div>
                      <span className="block text-white mb-1">Technical Adaptability</span>
                      <span className="text-gray-400">Quick learning of new programming languages and tools</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Code size={18} className="text-cyber-orange mr-2 mt-0.5" />
                    <div>
                      <span className="block text-white mb-1">Problem Solving</span>
                      <span className="text-gray-400">Analytical approach to debugging and system optimization</span>
                    </div>
                  </div>
                </div>
                
                {/* Future Skills Prediction */}
                <div className="mt-8 p-4 bg-cyber-darker border border-cyber-purple/30 rounded-md relative">
                  <div className="absolute -top-3 left-3 px-2 bg-cyber-darker text-cyber-purple text-xs font-cyber">AI PREDICTION</div>
                  <h4 className="text-sm font-cyber mb-2">FUTURE SKILLS::<span className="text-cyber-purple">PREDICTION</span></h4>
                  <p className="text-xs font-mono text-gray-400">Based on current learning trajectory:</p>
                  <ul className="mt-2 text-xs font-mono space-y-1">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyber-purple mr-2"></div>
                      <span>Advanced Network Security</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyber-blue mr-2"></div>
                      <span>Full-Stack Development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyber-orange mr-2"></div>
                      <span>Penetration Testing Certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Skills Progress */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 delay-${index * 150} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-cyber-darker border border-cyber-purple/30 flex items-center justify-center mr-3">
                        {skill.icon}
                      </div>
                      <h4 className="font-cyber text-base">{skill.name}</h4>
                    </div>
                    <span className="text-sm font-mono text-cyber-purple">{skill.progress}%</span>
                  </div>
                  
                  <div className="relative h-3 w-full bg-cyber-darker border border-cyber-purple/30 rounded overflow-hidden">
                    <div className="absolute inset-0 bg-[length:10px_10px] bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)]"></div>
                    <Progress 
                      value={skill.progress} 
                      className="h-full border-none bg-transparent" 
                      indicatorClassName={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                  
                  <p className="text-xs font-mono text-gray-400 mt-1">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
