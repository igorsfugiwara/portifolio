import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { CaseStudyContent, CaseStudyLinks } from '../../content/caseStudies/types';
import { Language } from '../../content/translations';
import './CaseStudy.scss';

interface CaseStudyProps {
  content: Record<Language, CaseStudyContent>;
  links: CaseStudyLinks;
}

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const Lock = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export default function CaseStudy({ content, links }: CaseStudyProps) {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const c = content[language];

  return (
    <div className="case">
      {/* Barra de topo: volta pro portfólio + os mesmos controles da home */}
      <header className="case__bar">
        <div className="case__bar-inner container">
          <a href="/" className="case__back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {c.backLabel}
          </a>

          <div className="case__bar-controls">
            <button
              className="case__icon-btn"
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              aria-label="Trocar idioma"
              title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              {language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
            </button>
            <button
              className="case__icon-btn"
              onClick={toggleTheme}
              aria-label="Trocar tema"
              title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="case__hero">
          <div className="container">
            <div className="case__eyebrow animate-slide-up delay-1">
              <span className="case__dot" />
              {c.eyebrow}
            </div>

            <h1 className="case__title animate-slide-up delay-2">{c.title}</h1>
            <p className="case__tagline animate-slide-up delay-3">{c.tagline}</p>
            <p className="case__intro animate-slide-up delay-4">{c.intro}</p>

            {(links.live || links.repo) && (
              <div className="case__cta animate-slide-up delay-5">
                {links.live && c.ctaLive && (
                  <a className="btn btn--primary" href={links.live} target="_blank" rel="noopener noreferrer">
                    {c.ctaLive}
                    <ArrowUpRight />
                  </a>
                )}
                {links.repo && c.ctaRepo && (
                  <a className="btn btn--ghost" href={links.repo} target="_blank" rel="noopener noreferrer">
                    {c.ctaRepo}
                  </a>
                )}
              </div>
            )}

            {/* Sem link público: explica o porquê em vez de deixar um botão morto */}
            {c.access && (
              <aside className="case__access animate-slide-up delay-5">
                <h2 className="case__access-label">
                  <Lock />
                  {c.access.label}
                </h2>
                <p className="case__access-text">{c.access.text}</p>
              </aside>
            )}

            <dl className="case__stats animate-fade-in delay-6">
              {c.stats.map((stat) => (
                <div key={stat.label} className="case__stat">
                  <dt className="case__stat-value">{stat.value}</dt>
                  <dd className="case__stat-label">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Problema */}
        <section className="case__section case__section--muted">
          <div className="container">
            <h2 className="section-title reveal">{c.problem.title}</h2>
            <span className="section-line reveal" />

            <p className="case__lead reveal">{c.problem.lead}</p>

            <ul className="case__pains reveal-group">
              {c.problem.pains.map((pain) => (
                <li key={pain} className="case__pain reveal">
                  <span className="case__pain-mark" aria-hidden="true" />
                  {pain}
                </li>
              ))}
            </ul>

            <p className="case__turn reveal">{c.problem.turn}</p>
          </div>
        </section>

        {/* Telas */}
        <section className="case__section">
          <div className="container">
            <h2 className="section-title reveal">{c.screens.title}</h2>
            <span className="section-line reveal" />
            <p className="case__lead reveal">{c.screens.lead}</p>

            <div className="case__screens reveal-group">
              {c.screens.items.map((screen, i) => (
                <article key={screen.name} className="case__screen reveal">
                  <span className="case__screen-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="case__screen-name">{screen.name}</h3>
                  <span className="case__screen-tag">{screen.tag}</span>
                  <p className="case__screen-desc">{screen.description}</p>
                  <ul className="case__screen-bullets">
                    {screen.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Prints do app — só aparece quando existem */}
        {c.shots && c.shots.items.length > 0 && (
          <section className="case__section case__section--muted">
            <div className="container">
              <h2 className="section-title reveal">{c.shots.title}</h2>
              <span className="section-line reveal" />
              <p className="case__lead reveal">{c.shots.lead}</p>

              <div className="case__shots reveal-group">
                {c.shots.items.map((shot) => (
                  <figure key={shot.src} className="case__shot reveal">
                    <img src={shot.src} alt={shot.alt} loading="lazy" />
                    <figcaption>{shot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        <section className={`case__section${c.shots ? '' : ' case__section--muted'}`}>
          <div className="container">
            <h2 className="section-title reveal">{c.features.title}</h2>
            <span className="section-line reveal" />
            <p className="case__lead reveal">{c.features.lead}</p>

            <div className="case__grid reveal-group">
              {c.features.items.map((item) => (
                <article key={item.name} className="case__card reveal">
                  <h3 className="case__card-name">{item.name}</h3>
                  <p className="case__card-desc">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de uso */}
        <section className={`case__section${c.shots ? ' case__section--muted' : ''}`}>
          <div className="container">
            <h2 className="section-title reveal">{c.useCases.title}</h2>
            <span className="section-line reveal" />
            <p className="case__lead reveal">{c.useCases.lead}</p>

            <div className="case__cases reveal-group">
              {c.useCases.items.map((item) => (
                <article key={item.name} className="case__use reveal">
                  <h3 className="case__use-name">{item.name}</h3>
                  <p className="case__use-desc">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Engenharia */}
        <section className={`case__section${c.shots ? '' : ' case__section--muted'}`}>
          <div className="container">
            <h2 className="section-title reveal">{c.engineering.title}</h2>
            <span className="section-line reveal" />
            <p className="case__lead reveal">{c.engineering.lead}</p>

            <div className="case__grid reveal-group">
              {c.engineering.items.map((item) => (
                <article key={item.name} className="case__card reveal">
                  <h3 className="case__card-name">{item.name}</h3>
                  <p className="case__card-desc">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className={`case__section${c.shots ? ' case__section--muted' : ''}`}>
          <div className="container">
            <h2 className="section-title reveal">{c.stack.title}</h2>
            <span className="section-line reveal" />

            <div className="case__stack reveal-group">
              {c.stack.groups.map((group) => (
                <div key={group.name} className="case__stack-group reveal">
                  <h3 className="case__stack-name">{group.name}</h3>
                  <div className="case__stack-items">
                    {group.items.map((item) => (
                      <span key={item} className="case__chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fechamento */}
        <section className="case__closing">
          <div className="container">
            <div className="case__closing-box reveal">
              <h2 className="case__closing-title">{c.closing.title}</h2>
              <p className="case__closing-text">{c.closing.text}</p>
              <div className="case__cta">
                {links.live && c.closing.ctaLive && (
                  <a className="btn btn--primary" href={links.live} target="_blank" rel="noopener noreferrer">
                    {c.closing.ctaLive}
                    <ArrowUpRight />
                  </a>
                )}
                <a className={`btn ${links.live ? 'btn--ghost' : 'btn--primary'}`} href="/#projects">
                  {c.closing.ctaBack}
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
