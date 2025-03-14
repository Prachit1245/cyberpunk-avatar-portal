
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
    
    // Possible characters to display
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    
    // Create matrix characters
    for (let i = 0; i < columns; i++) {
      const x = i * fontSize;
      const character = document.createElement('div');
      character.className = 'matrix-rain animate-matrix-rain';
      character.style.left = `${x}px`;
      character.style.animationDelay = `${Math.random() * 5}s`;
      character.textContent = chars[Math.floor(Math.random() * chars.length)];
      container.appendChild(character);
    }
    
    // Animation interval
    const interval = setInterval(() => {
      // Get all existing rain drops
      const rainDrops = container.querySelectorAll('.matrix-rain');
      
      // Random chance to add new drops
      if (Math.random() > 0.6) {
        const colIndex = Math.floor(Math.random() * columns);
        const x = colIndex * fontSize;
        const character = document.createElement('div');
        character.className = 'matrix-rain animate-matrix-rain';
        character.style.left = `${x}px`;
        character.textContent = chars[Math.floor(Math.random() * chars.length)];
        container.appendChild(character);
      }
      
      // Remove elements that have completed animation
      if (rainDrops.length > 300) { // Limit total elements
        for (let i = 0; i < 5; i++) {
          if (rainDrops[i]) {
            rainDrops[i].remove();
          }
        }
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="matrix-rain-container"></div>;
};

export default MatrixRain;
