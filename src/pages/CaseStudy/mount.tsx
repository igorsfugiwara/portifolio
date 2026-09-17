import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '../../context/ThemeContext';
import { LanguageProvider } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { CaseStudyContent, CaseStudyLinks } from '../../content/caseStudies/types';
import { Language } from '../../content/translations';
import CaseStudy from './CaseStudy';
import '../../styles/main.scss';

/** Sobe uma página de estudo de caso com os mesmos providers da home. */
export function mountCaseStudy(content: Record<Language, CaseStudyContent>, links: CaseStudyLinks) {
  function Page() {
    useReveal();
    return <CaseStudy content={content} links={links} />;
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeProvider>
        <LanguageProvider>
          <Page />
        </LanguageProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
