import { useLanguage } from '../../context/LanguageContext';
import ParticleCanvas from './ParticleCanvas';
import './Hero.scss';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <ParticleCanvas />

      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__eyebrow animate-slide-up delay-1">
            <span className="hero__dot" />
            São Paulo, Brasil
          </div>

          <h1 className="hero__name animate-slide-up delay-2">
            Igor<br />Fugiwara
          </h1>

          <p className="hero__tagline animate-slide-up delay-3">
            {t.hero.tagline}
          </p>

          <p className="hero__subtitle animate-slide-up delay-4">
            {t.hero.subtitle}
          </p>

          <div className="hero__cta animate-slide-up delay-5">
            <button className="btn btn--primary" onClick={scrollToProjects}>
              {t.hero.ctaProjects}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn btn--ghost" onClick={scrollToContact}>
              {t.hero.ctaContact}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
