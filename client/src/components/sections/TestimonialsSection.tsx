import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    nameKey: 'testimonials.items.0.name',
    textKey: 'testimonials.items.0.text',
    rating: 5,
    detailedText: "I never thought my bathroom could look this good. The team was professional, clean, and worked within the timeframe they promised."
  },
  {
    nameKey: 'testimonials.items.1.name',
    textKey: 'testimonials.items.1.text',
    rating: 5,
    detailedText: "The attention to detail in my kitchen renovation was exceptional. They solved complex problems with creative solutions."
  },
  {
    nameKey: 'testimonials.items.2.name',
    textKey: 'testimonials.items.2.text',
    rating: 5,
    detailedText: "Their expertise in outdoor tiling is unmatched. They recommended the perfect materials for our climate and installed them flawlessly."
  }
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const { elementRef: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver();
  const { elementRef: cardRef, isIntersecting: isCardVisible } = useIntersectionObserver();
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-20 pb-40 bg-gray-50 dark:bg-[#1C2526]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={`font-montserrat font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
              isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            {t('testimonials.title')}
          </h2>
          <p
            className={`font-montserrat text-xl text-[#1A2B6D] dark:text-[#D3D3D3] transition-all duration-700 delay-300 ${
              isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative py-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={index === testimonialSlide ? cardRef as React.RefObject<HTMLDivElement> : null}
                className={`transition-all duration-500 absolute w-full ${
                  testimonialSlide === index
                    ? 'opacity-100 transform translate-x-0 z-10'
                    : 'opacity-0 transform -translate-x-20 z-0'
                }`}
              >
                <div className={`h-64 w-full perspective-1000 transition-all duration-700 ${
                  isCardVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="relative w-full h-full transform-style-3d transition-transform duration-700 hover:rotate-y-180">
                    <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col justify-center backface-hidden">
                      <div className="text-[#1A2B6D] dark:text-[#D3D3D3] text-4xl mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                        {t(testimonial.textKey)}
                      </p>
                      <div className="mt-auto">
                        <p className="font-montserrat font-semibold text-gray-900 dark:text-white">
                          {t(testimonial.nameKey)}
                        </p>
                      </div>
                    </div>
                    <div className="absolute w-full h-full bg-[#1A2B6D] dark:bg-[#1A2B6D]/80 text-white rounded-xl shadow-lg p-8 flex flex-col justify-center backface-hidden rotate-y-180">
                      <div className="text-white text-4xl mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                        </svg>
                      </div>
                      <p className="mb-6">{'⭐'.repeat(testimonial.rating)}</p>
                      <p className="italic">{testimonial.detailedText}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialSlide(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-all ${
                    testimonialSlide === index
                      ? 'bg-[#1A2B6D] scale-125'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
