import { ProjectData } from '../../content/translations';
import './Projects.scss';

interface ProjectCardProps {
  project: ProjectData;
  visitLabel: string;
}

const badgeIcons: Record<string, string> = {
  ai: '✦',
  realtime: '⚡',
  api: '⟳',
  cms: '⊞',
  seo: '◈',
};

export default function ProjectCard({ project, visitLabel }: ProjectCardProps) {
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
    </article>
  );
}
