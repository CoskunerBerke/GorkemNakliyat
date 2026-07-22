import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('gorkem_lang') || 'tr';
  });

  const setLang = (newLang) => {
    if (newLang === 'tr' || newLang === 'en') {
      setLangState(newLang);
      localStorage.setItem('gorkem_lang', newLang);
    }
  };

  const toggleLang = () => {
    const nextLang = lang === 'tr' ? 'en' : 'tr';
    setLang(nextLang);
  };

  const t = translations[lang] || translations.tr;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
