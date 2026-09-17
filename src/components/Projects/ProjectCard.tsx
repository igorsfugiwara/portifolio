import { ProjectData } from '../../content/translations';
import './Projects.scss';

interface ProjectCardProps {
  project: ProjectData;
  visitLabel: string;
  caseStudyLabel: string;
}

const badgeIcons: Record<string, string> = {
  ai: '✦',
  realtime: '⚡',
  api: '⟳',
  cms: '⊞',
  seo: '◈',
};

export default function ProjectCard({ project, visitLabel, caseStudyLabel }: ProjectCardProps) {
  const icon = project.badgeType ? badgeIcons[project.badgeType] : '✦';

  return (
    <article className={`project-card reveal${project.featured ? ' project-card--featured' : ''}`}>
      {project.featured && (
        <div className="project-card__featured-label">Featured Project</div>
      )}

      <div className="project-card__header">
        <span className={`project-card__badge badge--${project.badgeType ?? 'ai'}`}>
          <span className="project-card__badge-icon">{icon}</span>
          {project.badge}
        </span>
      </div>

      <h3 className="project-card__name">{project.name}</h3>

      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span key={tech} className="project-card__tech">{tech}</span>
        ))}
      </div>

      <div className="project-card__links">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            aria-label={`${visitLabel}: ${project.name}`}
          >
            {visitLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        ) : (
          project.privateNote && (
            <span className="project-card__private">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              {project.privateNote}
            </span>
          )
        )}

        {project.caseStudy && (
          <a
            href={project.caseStudy}
            // Sem app ao vivo, o estudo de caso é o link principal do card
            className={`project-card__link${project.link ? ' project-card__link--secondary' : ''}`}
            aria-label={`${caseStudyLabel}: ${project.name}`}
          >
            {caseStudyLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
