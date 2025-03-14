
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    // Clear existing characters
    container.innerHTML = '';
    
    // Calculate number of columns based on width
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    
    // Create initial array of y positions
    const drops: number[] = Array(columns).fill(1);
    
    // Possible characters to display - mix of Matrix characters, code snippets, and cybersecurity terms
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン>_$sudo./hackscript.shSECURITY{}<>=+-*/&|!";
    
    // Terminal command snippets for random inclusion
    const commands = [
      "$ nmap -sV target.com",
      "$ sudo apt-get install",
      "> ssh root@server",
      "$ ./exploit.py -t target",
      "$ cat /etc/passwd",
      "$ ping -c 4 8.8.8.8",
      "$ sudo service start",
      "> SELECT * FROM users",
      "$ chmod +x script.sh"
    ];
    
    // Animation interval
    const interval = setInterval(() => {
      // Random chance to add new drops
      if (Math.random() > 0.6) {
        const colIndex = Math.floor(Math.random() * columns);
        const x = colIndex * fontSize;
        
        // Randomly decide to add a character or a command snippet
        if (Math.random() > 0.95) {
          // Add command snippet
          const command = commands[Math.floor(Math.random() * commands.length)];
          const commandDiv = document.createElement('div');
          commandDiv.className = 'terminal-command animate-matrix-rain';
          commandDiv.style.left = `${x}px`;
          commandDiv.textContent = command;
          commandDiv.style.color = '#0EA5E9'; // Blue color for commands
          commandDiv.style.fontSize = '10px';
          commandDiv.style.textShadow = '0 0 5px #0EA5E9';
          container.appendChild(commandDiv);
        } else {
          // Add matrix character
          const character = document.createElement('div');
          character.className = 'matrix-rain animate-matrix-rain';
          character.style.left = `${x}px`;
          character.style.animationDelay = `${Math.random() * 5}s`;
          
          // Randomly change colors between cyber theme colors
          const colors = ['#9b87f5', '#0EA5E9', '#F97316'];
          character.style.color = colors[Math.floor(Math.random() * colors.length)];
          
          character.textContent = chars[Math.floor(Math.random() * chars.length)];
          container.appendChild(character);
        }
      }
      
      // Remove elements that have completed animation
      const rainElements = container.querySelectorAll('.matrix-rain, .terminal-command');
      if (rainElements.length > 300) { // Limit total elements
        for (let i = 0; i < 5; i++) {
          if (rainElements[i]) {
            rainElements[i].remove();
          }
        }
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="matrix-rain-container"></div>;
};

export default MatrixRain;
