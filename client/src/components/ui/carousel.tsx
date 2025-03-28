import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  indicators?: boolean;
  controls?: boolean;
}

const Carousel = ({
  children,
  autoPlay = true,
  interval = 5000,
  indicators = true,
  controls = true
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Reset active index when children change
  useEffect(() => {
    setActiveIndex(0);
  }, [children]);
  
  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    const tick = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, interval);
    
    return () => clearInterval(tick);
  }, [autoPlay, interval, isPaused, children.length]);
  
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Items */}
      <div className="overflow-hidden w-full h-full">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              {child}
            </div>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      {controls && (
        <>
          <button 
            onClick={goToPrevious} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={goToNext} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
      
      {/* Indicators */}
      {indicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
