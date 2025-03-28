import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/components/ThemeContext';

interface FloatingTileProps {
  className?: string;
  color?: string;
  size?: number;
  onClick?: () => void;
}

const FloatingTile = ({ 
  className = '', 
  color, 
  size = 100,
  onClick
}: FloatingTileProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  // Use theme-based colors if no color is provided
  const tileColor = color || (theme === 'dark' ? '#D3D3D3' : '#1A2B6D');
  
  // Handle mouse movement for 3D rotation effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tileRef.current) return;
    
    const rect = tileRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    // Calculate rotation based on mouse position
    // We want the rotation to be more subtle, so we divide by a larger number
    const rotX = -(y - rect.height / 2) / 10;
    const rotY = (x - rect.width / 2) / 10;
    
    setRotation({ x: rotX, y: rotY });
  };
  
  // Random floating animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) { // Only animate if not being hovered
        setPosition({
          x: Math.sin(Date.now() / 1000) * 5,
          y: Math.cos(Date.now() / 1500) * 5
        });
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [isHovered]);
  
  return (
    <div
      ref={tileRef}
      className={`relative ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        perspective: '500px',
        cursor: onClick ? 'pointer' : 'default',
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.5s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      onClick={onClick}
    >
      <div
        className="w-full h-full transition-transform duration-200"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Top face (main tile face) */}
        <div
          className="absolute w-full h-full rounded shadow-md"
          style={{
            backgroundColor: tileColor,
            transform: 'translateZ(5px)',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Tile pattern */}
          <div className="w-full h-full opacity-20 bg-grid-pattern"></div>
        </div>
        
        {/* Bottom face */}
        <div
          className="absolute w-full h-full rounded"
          style={{
            backgroundColor: tileColor,
            transform: 'translateZ(-5px) rotateX(180deg)',
            backfaceVisibility: 'hidden'
          }}
        ></div>
        
        {/* Side faces */}
        {/* Front edge */}
        <div
          className="absolute h-[10px] w-full"
          style={{
            backgroundColor: theme === 'dark' ? '#A0A0A0' : '#0A1A5C',
            transform: 'rotateX(-90deg) translateZ(-5px)',
            transformOrigin: 'bottom'
          }}
        ></div>
        
        {/* Back edge */}
        <div
          className="absolute h-[10px] w-full bottom-0"
          style={{
            backgroundColor: theme === 'dark' ? '#A0A0A0' : '#0A1A5C',
            transform: 'rotateX(90deg) translateZ(-5px)',
            transformOrigin: 'top'
          }}
        ></div>
        
        {/* Left edge */}
        <div
          className="absolute w-[10px] h-full left-0"
          style={{
            backgroundColor: theme === 'dark' ? '#B8B8B8' : '#142B7D',
            transform: 'rotateY(90deg) translateZ(-5px)',
            transformOrigin: 'left'
          }}
        ></div>
        
        {/* Right edge */}
        <div
          className="absolute w-[10px] h-full right-0"
          style={{
            backgroundColor: theme === 'dark' ? '#B8B8B8' : '#142B7D',
            transform: 'rotateY(-90deg) translateZ(-5px)',
            transformOrigin: 'right'
          }}
        ></div>
      </div>
      
      {/* Shadow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[10px] rounded-full opacity-20 bg-black"
        style={{
          filter: 'blur(5px)',
          transformOrigin: 'center',
          transform: `scale(${isHovered ? 1.1 : 1})`
        }}
      ></div>
    </div>
  );
};

export default FloatingTile;