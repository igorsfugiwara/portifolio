import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, Translations, translations } from '../content/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// A home tem um endereço por idioma: / (inglês) e /pt/ (português). O
// endereço manda — é o que o Google vê. Nas outras páginas vale a escolha
// guardada.
const isHome = (path: string) => path === '/' || path === '/index.html' || /^\/pt\/?(index\.html)?$/.test(path);
const languageFromPath = (path: string): Language | null =>
  /^\/pt(\/|$)/.test(path) ? 'pt' : isHome(path) ? 'en' : null;

function getInitialLanguage(): Language {
  try {
    const fromPath = languageFromPath(window.location.pathname);
    if (fromPath) return fromPath;
  } catch {
    // sem window (renderização no build): quem manda é o initialLanguage
  }
  try {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // ignore
  }
  return 'en';
}

export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage?: Language }) {
  const [language, setLanguageState] = useState<Language>(() => initialLanguage ?? getInitialLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Na home, trocar de idioma troca de endereço: recarregar mostra a mesma
    // língua, e o link copiado leva a quem recebe a versão certa.
    try {
      if (isHome(window.location.pathname)) {
        window.history.replaceState(null, '', (lang === 'pt' ? '/pt/' : '/') + window.location.hash);
      }
    } catch {
      // ignore
    }
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
