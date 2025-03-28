import { useTranslation } from '@/hooks/use-translation';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useTranslation();
  
  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 text-sm font-montserrat font-medium bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label={language === 'en' ? 'Switch to Serbian' : 'Switch to English'}
    >
      <span>{language === 'en' ? 'SR' : 'EN'}</span>
    </button>
  );
};

export default LanguageToggle;
