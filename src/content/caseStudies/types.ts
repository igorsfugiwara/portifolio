/** Formato compartilhado pelas páginas de estudo de caso (/assistente-de-casa, /pdv-casa-o) */

export interface CaseStat {
  value: string;
  label: string;
}

export interface CaseItem {
  name: string;
  description: string;
}

export interface CaseScreen extends CaseItem {
  tag: string;
  bullets: string[];
}

/** Print do app. `src` sai de /public — ex.: '/shots/assistente-hoje.png' */
export interface CaseShot {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudyContent {
  backLabel: string;
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  /** Rótulo do botão que abre o app. Ausente quando não existe link público. */
  ctaLive?: string;
  /** Rótulo do botão que abre o código. Ausente quando o repositório é privado. */
  ctaRepo?: string;
  /** Explica por que não há link público, quando não há. */
  access?: {
    label: string;
    text: string;
  };
  stats: CaseStat[];
  problem: {
    title: string;
    lead: string;
    pains: string[];
    turn: string;
  };
  screens: {
    title: string;
    lead: string;
    items: CaseScreen[];
  };
  /** Galeria de prints. A seção só aparece quando existe pelo menos um. */
  shots?: {
    title: string;
    lead: string;
    items: CaseShot[];
  };
  features: {
    title: string;
    lead: string;
    items: CaseItem[];
  };
  useCases: {
    title: string;
    lead: string;
    items: CaseItem[];
  };
  engineering: {
    title: string;
    lead: string;
    items: CaseItem[];
  };
  stack: {
    title: string;
    groups: { name: string; items: string[] }[];
  };
  closing: {
    title: string;
    text: string;
    ctaLive?: string;
    ctaBack: string;
  };
}

export interface CaseStudyLinks {
  live?: string;
  repo?: string;
}
