import { useLanguage } from '../../context/LanguageContext';
import ProjectCard from './ProjectCard';
import './Projects.scss';

export default function Projects() {
  const { t } = useLanguage();
  const [featured, ...rest] = t.projects.items;
  // Os projetos com vídeo ganham card largo logo abaixo do destaque; o resto
  // segue na grade.
  const withVideo = rest.filter((p) => p.video);
  const grid = rest.filter((p) => !p.video);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title reveal">{t.projects.title}</h2>
        <span className="section-line reveal" />

        {/* Featured project — Ótica Roland */}
        {featured && (
          <ProjectCard
            project={featured}
            visitLabel={t.projects.visitLabel}
            caseStudyLabel={t.projects.caseStudyLabel}
          />
        )}

        {/* Projetos com vídeo de apresentação */}
        {withVideo.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            visitLabel={t.projects.visitLabel}
            caseStudyLabel={t.projects.caseStudyLabel}
          />
        ))}

        {/* Other projects */}
        <div className="projects__grid reveal-group">
          {grid.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              visitLabel={t.projects.visitLabel}
              caseStudyLabel={t.projects.caseStudyLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
