import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeContext';

// Import the particles.js library at runtime
const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    // Load particles.js script dynamically
    const loadParticlesJS = async () => {
      // Check if particles.js is already loaded
      if (typeof window.particlesJS === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
        script.async = true;
        
        script.onload = () => {
          initParticles();
        };
        
        document.body.appendChild(script);
      } else {
        initParticles();
      }
    };
    
    const initParticles = () => {
      if (typeof window.particlesJS !== 'undefined' && containerRef.current) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: theme === 'dark' ? '#ffffff' : '#1A2B6D' },
            opacity: { value: 0.1, random: false },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: theme === 'dark' ? '#ffffff' : '#1A2B6D',
              opacity: 0.1,
              width: 1
            },
            move: { enable: true, speed: 2 }
          }
        });
      }
    };
    
    loadParticlesJS();
    
    // Cleanup function
    return () => {
      // No cleanup needed as particles.js does not provide a cleanup method
    };
  }, [theme]);
  
  return (
    <div
      id="particles-js"
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full z-0 opacity-50"
    ></div>
  );
};

// Add the particlesJS to the window type
declare global {
  interface Window {
    particlesJS: (
      id: string,
      options: {
        particles: {
          number: { value: number; density: { enable: boolean; value_area: number } };
          color: { value: string };
          opacity: { value: number; random: boolean };
          size: { value: number; random: boolean };
          line_linked: {
            enable: boolean;
            distance: number;
            color: string;
            opacity: number;
            width: number;
          };
          move: { enable: boolean; speed: number };
        };
      }
    ) => void;
  }
}

export default ParticlesBackground;
