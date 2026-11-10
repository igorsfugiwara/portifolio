import { useLanguage } from '../../context/LanguageContext';
import { contactLinks } from '../../content/translations';
import './Contact.scss';

interface ContactLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  display: string;
}

function ContactItem({ href, label, icon, display }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="contact__item reveal"
      aria-label={label}
    >
      <span className="contact__item-icon">{icon}</span>
      <div className="contact__item-text">
        <span className="contact__item-label">{label}</span>
        <span className="contact__item-display">{display}</span>
      </div>
      <svg className="contact__item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </a>
  );
}

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__header">
          <h2 className="contact__title reveal">{t.contact.title}</h2>
          <p className="contact__subtitle reveal">{t.contact.subtitle}</p>
        </div>

        <div className="contact__links reveal-group">
          <ContactItem
            href={`mailto:${contactLinks.email}`}
            label={t.contact.emailLabel}
            icon={<EmailIcon />}
            display={contactLinks.email}
          />
          <ContactItem
            href={contactLinks.linkedin}
            label={t.contact.linkedinLabel}
            icon={<LinkedInIcon />}
            display="igor-s-fugiwara"
          />
          <ContactItem
            href={contactLinks.github}
            label={t.contact.githubLabel}
            icon={<GitHubIcon />}
            display="igorsfugiwara"
          />
        </div>

        <footer className="contact__footer reveal">
          <p>© {new Date().getFullYear()} Igor Fugiwara. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
