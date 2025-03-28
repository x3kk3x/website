import { MessageSquare } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a 
        href="#contact" 
        className="block w-14 h-14 bg-[#1A2B6D] hover:bg-[#1A2B6D]/90 rounded-full shadow-lg flex items-center justify-center text-white transition-all transform hover:scale-110 animate-pulse"
        aria-label="Contact Us"
      >
        <MessageSquare size={22} />
      </a>
    </div>
  );
};

export default FloatingCTA;
