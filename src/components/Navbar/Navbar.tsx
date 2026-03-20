import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.scss';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Igor Fugiwara
        </a>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Navegação principal">
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>{t.navbar.projects}</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>{t.navbar.experience}</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.navbar.contact}</a>
        </nav>

        {/* Controls */}
        <div className="navbar__controls">
          <button
            className="navbar__lang-btn"
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            aria-label="Trocar idioma"
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            {language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
          </button>

          <button
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label="Trocar tema"
            title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-label="Menu mobile">
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>{t.navbar.projects}</a>
        <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>{t.navbar.experience}</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.navbar.contact}</a>
      </nav>
    </header>
  );
}
