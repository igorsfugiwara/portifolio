import { useLanguage } from '../../context/LanguageContext';
import ProjectCard from './ProjectCard';
import './Projects.scss';

export default function Projects() {
  const { t } = useLanguage();
  const [featured, ...rest] = t.projects.items;

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title reveal">{t.projects.title}</h2>
        <span className="section-line reveal" />

        {/* Featured project — Ótica Roland */}
        {featured && (
          <ProjectCard project={featured} visitLabel={t.projects.visitLabel} />
        )}

        {/* Other projects */}
        <div className="projects__grid reveal-group">
          {rest.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              visitLabel={t.projects.visitLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
