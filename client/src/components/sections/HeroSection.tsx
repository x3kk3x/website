import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { HeroSlide } from '@/types';
import ParticlesBackground from '../ui/particles-background';
import ParallaxContainer from '../ui/parallax-container';
import FloatingTile from '../ui/floating-tile';

const heroSlides: HeroSlide[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    titleKey: 'hero.slide1.title',
    subtitleKey: 'hero.slide1.subtitle'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    titleKey: 'hero.slide2.title',
    subtitleKey: 'hero.slide2.subtitle'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    titleKey: 'hero.slide3.title',
    subtitleKey: 'hero.slide3.subtitle'
  }
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen pt-20 flex items-center overflow-hidden parallax-section"
    >
      <ParticlesBackground />
      
      {/* Floating 3D Ceramic Tiles */}
      <div className="absolute top-1/3 left-20 z-10 hidden md:block">
        <FloatingTile size={80} color="#2A4B8D" />
      </div>
      
      <div className="absolute bottom-1/4 right-32 z-10 hidden md:block">
        <FloatingTile size={60} />
      </div>
      
      <div className="absolute top-1/4 right-48 z-10 hidden lg:block">
        <FloatingTile size={50} color="#D3D3D3" />
      </div>
      
      {/* Hero Carousel */}
      <div className="w-full h-full absolute top-0 left-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center parallax-background"
              style={{
                backgroundImage: `url('${slide.imageUrl}')`,
                backgroundAttachment: 'fixed',
                transform: `translateY(${scrollY * 0.4}px)` // Parallax effect
              }}
            >
              <div className="w-full h-full bg-black/40 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center text-white">
                    <ParallaxContainer speed={0.3} direction="up">
                      <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
                        {t(slide.titleKey)}
                      </h1>
                    </ParallaxContainer>
                    
                    <ParallaxContainer speed={0.5} direction="up">
                      <p className="font-montserrat text-xl md:text-2xl mb-8 drop-shadow-md">
                        {t(slide.subtitleKey)}
                      </p>
                    </ParallaxContainer>
                    
                    <ParallaxContainer speed={0.2} direction="up">
                      <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-[#1A2B6D] hover:bg-[#1A2B6D]/90 text-white font-montserrat font-medium rounded-md transition-all transform hover:scale-105 shadow-lg"
                      >
                        {t('hero.cta')}
                      </a>
                    </ParallaxContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
