import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useTranslation } from '@/hooks/use-translation';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/theme-toggle';
import LanguageToggle from '@/components/ui/language-toggle';

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-[#1C2526]/95 shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-[#1A2B6D] dark:text-white text-2xl font-montserrat font-bold">
            Tile<span className="text-[#808080]">Masters</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="font-montserrat text-gray-800 dark:text-white hover:text-[#1A2B6D] dark:hover:text-[#D3D3D3] transition-all">
            {t('nav.home')}
          </a>
          <a href="#about" className="font-montserrat text-gray-800 dark:text-white hover:text-[#1A2B6D] dark:hover:text-[#D3D3D3] transition-all">
            {t('nav.about')}
          </a>
          <a href="#gallery" className="font-montserrat text-gray-800 dark:text-white hover:text-[#1A2B6D] dark:hover:text-[#D3D3D3] transition-all">
            {t('nav.gallery')}
          </a>
          <a href="#testimonials" className="font-montserrat text-gray-800 dark:text-white hover:text-[#1A2B6D] dark:hover:text-[#D3D3D3] transition-all">
            {t('nav.testimonials')}
          </a>
          <a href="#contact" className="font-montserrat text-gray-800 dark:text-white hover:text-[#1A2B6D] dark:hover:text-[#D3D3D3] transition-all">
            {t('nav.contact')}
          </a>
        </div>
        
        {/* Theme and Language Toggles */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1C2526] shadow-lg transition-all">
          <div className="container mx-auto px-4 py-3 flex flex-col">
            <a href="#home" onClick={closeMobileMenu} className="py-2 px-4 font-montserrat text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              {t('nav.home')}
            </a>
            <a href="#about" onClick={closeMobileMenu} className="py-2 px-4 font-montserrat text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              {t('nav.about')}
            </a>
            <a href="#gallery" onClick={closeMobileMenu} className="py-2 px-4 font-montserrat text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              {t('nav.gallery')}
            </a>
            <a href="#testimonials" onClick={closeMobileMenu} className="py-2 px-4 font-montserrat text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              {t('nav.testimonials')}
            </a>
            <a href="#contact" onClick={closeMobileMenu} className="py-2 px-4 font-montserrat text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              {t('nav.contact')}
            </a>
            
            <div className="flex items-center space-x-4 mt-4 mb-2 px-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
