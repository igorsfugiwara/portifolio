import { useLanguage } from '../../context/LanguageContext';
import { skills } from '../../content/translations';
import './About.scss';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title reveal">{t.about.title}</h2>
        <span className="section-line reveal" />

        <div className="about__grid">
          <div className="about__bio reveal">
            <p>{t.about.bio}</p>
          </div>

          <div className="about__skills">
            <h3 className="about__skills-title reveal">{t.about.skillsTitle}</h3>

            <div className="about__categories reveal-group">
              <div className="about__category reveal">
                <span className="about__category-label">{t.about.categories.frontend}</span>
                <div className="about__pills">
                  {skills.frontend.map((s) => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
              </div>

              <div className="about__category reveal">
                <span className="about__category-label">{t.about.categories.ai}</span>
                <div className="about__pills">
                  {skills.ai.map((s) => (
                    <span key={s} className="pill pill--accent">{s}</span>
                  ))}
                </div>
              </div>

              <div className="about__category reveal">
                <span className="about__category-label">{t.about.categories.tools}</span>
                <div className="about__pills">
                  {skills.tools.map((s) => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
