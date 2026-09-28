import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, Translations, translations } from '../content/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // ignore
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch {
      // ignore
    }
  };

  const t = translations[language];

  // O <html lang> acompanha o idioma escolhido: leitor de tela e buscador
  // leem a página na língua em que ela está.
  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
