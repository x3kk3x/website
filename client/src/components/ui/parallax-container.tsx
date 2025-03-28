import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number; // Speed of the parallax effect (1 is normal, <1 is slower, >1 is faster)
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ParallaxContainer = ({ 
  children, 
  speed = 0.5, 
  direction = 'up', 
  className = '' 
}: ParallaxContainerProps) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the viewport center in percentage
      const distanceFromCenter = (elementTop + elementHeight / 2 - scrollTop - windowHeight / 2) / windowHeight;
      
      // Set the offset based on the distance from center
      setOffset(distanceFromCenter * speed * 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };
  
  return (
    <div
      ref={elementRef}
      className={`parallax-container ${className}`}
      style={{
        transform: getTransform(),
        transition: 'transform 0.1s ease-out',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;