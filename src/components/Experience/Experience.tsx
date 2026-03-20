import { useLanguage } from '../../context/LanguageContext';
import './Experience.scss';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title reveal">{t.experience.title}</h2>
        <span className="section-line reveal" />

        <div className="experience__list reveal-group">
          {t.experience.items.map((item, i) => (
            <article key={i} className="experience__item reveal">
              <div className="experience__left">
                <span className="experience__period">{item.period}</span>
              </div>

              <div className="experience__connector">
                <div className="experience__dot" />
                <div className="experience__line" />
              </div>

              <div className="experience__right">
                <h3 className="experience__company">{item.company}</h3>
                <span className="experience__role">{item.role}</span>
                <p className="experience__desc">{item.description}</p>
                {item.stack && (
                  <div className="experience__stack">
                    {item.stack.map((tech) => (
                      <span key={tech} className="experience__tech">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
