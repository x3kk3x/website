import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setShow(scrollPosition > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ${
      show ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        className="block w-10 h-10 bg-gray-800 dark:bg-gray-700 hover:bg-[#1A2B6D] dark:hover:bg-[#1A2B6D] rounded-full shadow-lg flex items-center justify-center text-white transition-all transform hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
};

export default BackToTop;
