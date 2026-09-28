// Renderização no build (scripts/prerender.mjs), não no navegador.
//
// O site é React no cliente: sem isto, o HTML que o Google baixa tem só um
// <div id="root"></div> vazio — nenhum nome, nenhum texto — e a indexação
// depende de o robô voltar depois para executar o JavaScript. Com isto, o
// conteúdo da página (no idioma padrão, inglês) já vem escrito no HTML.
//
// No navegador, o main.tsx monta o app por cima com createRoot: o HTML daqui
// só existe até o React assumir, e é o mesmo que ele desenha.
import { renderToString } from 'react-dom/server';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import { assistenteCasaContent, assistenteCasaLinks } from './content/caseStudies/assistenteCasa';
import { pdvCasaOContent, pdvCasaOLinks } from './content/caseStudies/pdvCasaO';

export const pages: Record<string, () => string> = {
  'index.html': () => renderToString(<App />),
  'assistente-de-casa.html': () =>
    renderToString(
      <ThemeProvider>
        <LanguageProvider>
          <CaseStudy content={assistenteCasaContent} links={assistenteCasaLinks} />
        </LanguageProvider>
      </ThemeProvider>
    ),
  'pdv-casa-o.html': () =>
    renderToString(
      <ThemeProvider>
        <LanguageProvider>
          <CaseStudy content={pdvCasaOContent} links={pdvCasaOLinks} />
        </LanguageProvider>
      </ThemeProvider>
    ),
};
