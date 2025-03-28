import { useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '../lib/translations';

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Initialize from localStorage if available
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'sr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'sr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: TranslationKey): string => {
    // Split the key by dots to access nested properties
    const parts = key.split('.');
    let result: any = translations[language];
    
    for (const part of parts) {
      if (result && result[part] !== undefined) {
        result = result[part];
      } else {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
    }
    
    return result;
  };

  return { language, toggleLanguage, t };
};
