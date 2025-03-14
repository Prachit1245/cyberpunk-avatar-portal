
import { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Terminal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [terminalText, setTerminalText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
          
          // Start terminal text animation
          if (!isTyping) {
            typeTerminalText();
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTyping]);
  
  const typeTerminalText = () => {
    setIsTyping(true);
    const text = "Initiating contact protocols... Systems ready for message transmission. Secure channel established.";
    let i = 0;
    let timer = setInterval(() => {
      if (i < text.length) {
        setTerminalText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 50);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !message) {
      toast({
        title: "Validation Error",
        description: "All fields are required",
        variant: "destructive",
      });
      return;
    }
    
    if (!email.includes('@')) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // Show success message - in a real app, this would send the data to a server
    toast({
      title: "Message Transmitted",
      description: "Your message has been sent successfully",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-cyber-darker/50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-10 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-purple/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="flex items-center mb-12">
            <Mail size={28} className="text-cyber-purple mr-3" />
            <h2 className="text-3xl font-cyber text-glow">CONTACT<span className="text-cyber-blue">::</span>PANEL</h2>
            <div className="h-px flex-grow bg-gradient-cyber ml-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-cyber-darker/80 rounded-lg p-6 border border-cyber-purple/30 cyber-border">
              <h3 className="text-xl font-cyber mb-6 text-cyber-purple">MESSAGE<span className="text-white">::</span>TRANSMISSION</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-gray-300 mb-2">IDENTIFIER::</label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="bg-cyber-dark border-cyber-purple/30 font-mono text-sm focus:border-cyber-purple focus:ring-cyber-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-gray-300 mb-2">COMM-CHANNEL::</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-cyber-dark border-cyber-purple/30 font-mono text-sm focus:border-cyber-purple focus:ring-cyber-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-gray-300 mb-2">DATA-PAYLOAD::</label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    rows={5}
                    className="bg-cyber-dark border-cyber-purple/30 font-mono text-sm focus:border-cyber-purple focus:ring-cyber-purple resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cyber-purple hover:bg-cyber-purple-bright text-white font-cyber flex items-center justify-center gap-2 py-6"
                >
                  <Send size={16} />
                  TRANSMIT MESSAGE
                </Button>
              </form>
            </div>
            
            {/* Contact Info & Terminal */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-cyber-darker/80 rounded-lg p-6 border border-cyber-blue/30 cyber-border">
                <h3 className="text-xl font-cyber mb-6 text-cyber-blue">DIRECT<span className="text-white">::</span>CHANNELS</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded flex items-center justify-center mr-3 bg-cyber-blue/20 text-cyber-blue">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-cyber text-sm">EMAIL CHANNEL</h4>
                      <a href="mailto:prachitregmi4546@gmail.com" className="text-sm font-mono text-gray-300 hover:text-cyber-blue transition-colors">
                        prachitregmi4546@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded flex items-center justify-center mr-3 bg-cyber-purple/20 text-cyber-purple">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-cyber text-sm">COMM LINK</h4>
                      <a href="tel:9843681979" className="text-sm font-mono text-gray-300 hover:text-cyber-purple transition-colors">
                        9843681979
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded flex items-center justify-center mr-3 bg-cyber-orange/20 text-cyber-orange">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-cyber text-sm">LOCATION NODE</h4>
                      <p className="text-sm font-mono text-gray-300">
                        Nepal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Terminal Output */}
              <div className="bg-cyber-dark rounded-lg overflow-hidden border border-cyber-purple/30">
                <div className="bg-cyber-darker px-4 py-2 flex items-center border-b border-cyber-purple/30">
                  <div className="w-3 h-3 rounded-full bg-cyber-orange mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-purple mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-blue mr-2"></div>
                  <span className="text-xs font-mono text-cyber-purple/70">terminal@prachit:~/contact$</span>
                </div>
                
                <div className="p-4 font-mono text-sm h-40">
                  <div className="text-cyber-purple mb-2">
                    {">"} <span className="text-white">./init_contact.sh</span>
                  </div>
                  
                  <div className="text-green-400">
                    {terminalText}
                    <span className="inline-block w-2 h-4 bg-green-400 animate-blink-caret ml-1"></span>
                  </div>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="text-center text-sm font-mono text-cyber-purple/70 mt-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse"></div>
                  <span>AVERAGE RESPONSE TIME: 24-48 HOURS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
