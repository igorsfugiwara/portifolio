export type Language = 'pt' | 'en';

export interface ProjectData {
  name: string;
  badge: string;
  description: string;
  stack: string[];
  link: string;
  featured?: boolean;
  badgeType?: 'ai' | 'realtime' | 'api' | 'cms' | 'seo';
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  description: string;
  stack?: string[];
}

export interface Translations {
  navbar: {
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    scrollHint: string;
  };
  about: {
    title: string;
    bio: string;
    skillsTitle: string;
    categories: {
      frontend: string;
      ai: string;
      tools: string;
    };
  };
  projects: {
    title: string;
    visitLabel: string;
    items: ProjectData[];
  };
  experience: {
    title: string;
    items: ExperienceData[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    whatsappLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
}

const projectsPt: ProjectData[] = [
  {
    name: 'Ótica Roland',
    badge: 'AI-Powered',
    badgeType: 'ai',
    featured: true,
    description:
      'E-commerce completo para uma ótica premium em São Paulo. Chatbot com RAG e busca semântica por embeddings, function calling para adicionar ao carrinho por linguagem natural, consultoria de harmonização de armações com formato de rosto, painel CMS com Firebase Auth e gestão de estoque em tempo real.',
    stack: ['React', 'TypeScript', 'Firebase', 'Gemini API', 'RAG', 'Embeddings', 'Function Calling', 'Vercel'],
    link: 'https://oticaroland.vercel.app',
  },
  {
    name: 'Retrospectiva',
    badge: 'Real-time',
    badgeType: 'realtime',
    description:
      'Ferramenta colaborativa de retrospectiva SCRUM para squads de engenharia. Sync em tempo real via Firebase.',
    stack: ['React', 'Firebase', 'JavaScript'],
    link: 'https://retro-beta.vercel.app',
  },
  {
    name: 'PokéTrunfo',
    badge: 'API Integration',
    badgeType: 'api',
    description:
      'Jogo de cartas no browser inspirado no Super Trunfo, consumindo a PokeAPI.',
    stack: ['Vanilla JavaScript', 'HTML5', 'CSS3'],
    link: 'https://poke-trunfo.netlify.app',
  },
  {
    name: 'Escombro Linktree CMS',
    badge: 'CMS',
    badgeType: 'cms',
    description:
      'CMS com painel admin para uma banda de hardcore. Firebase Auth real com login por email e Google, reordenação por drag, rotas protegidas e sync em tempo real via Firebase RTDB.',
    stack: ['React', 'TypeScript', 'Firebase', 'RTDB', 'SCSS'],
    link: 'https://linktree-escombro.vercel.app',
  },
  {
    name: 'Del Mastro',
    badge: 'Next.js',
    badgeType: 'cms',
    description:
      'Site institucional moderno para restaurante italiano na Av. Paulista. Desenvolvido em Next.js 14 com App Router, SSR para SEO, next/image para otimização de fotos dos pratos e design sofisticado com Tailwind CSS.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'SSR', 'Netlify'],
    link: 'https://delmastrosp.netlify.app',
  },
];

const projectsEn: ProjectData[] = [
  {
    name: 'Ótica Roland',
    badge: 'AI-Powered',
    badgeType: 'ai',
    featured: true,
    description:
      'Full-stack e-commerce for a premium optical store in São Paulo. RAG chatbot with semantic search via embeddings, function calling to add products to cart via natural language, face shape harmonization consulting, CMS admin panel with Firebase Auth and real-time inventory management.',
    stack: ['React', 'TypeScript', 'Firebase', 'Gemini API', 'RAG', 'Embeddings', 'Function Calling', 'Vercel'],
    link: 'https://oticaroland.vercel.app',
  },
  {
    name: 'Retrospectiva',
    badge: 'Real-time',
    badgeType: 'realtime',
    description:
      'Collaborative SCRUM retrospective tool for engineering squads. Real-time sync via Firebase.',
    stack: ['React', 'Firebase', 'JavaScript'],
    link: 'https://retro-beta.vercel.app',
  },
  {
    name: 'PokéTrunfo',
    badge: 'API Integration',
    badgeType: 'api',
    description:
      'Browser card game inspired by Super Trunfo, consuming PokeAPI.',
    stack: ['Vanilla JavaScript', 'HTML5', 'CSS3'],
    link: 'https://poke-trunfo.netlify.app',
  },
  {
    name: 'Escombro Linktree CMS',
    badge: 'CMS',
    badgeType: 'cms',
    description:
      'Custom CMS with admin panel for a hardcore band. Firebase Auth with email and Google login, drag-to-reorder, protected routes and real-time sync via Firebase RTDB.',
    stack: ['React', 'TypeScript', 'Firebase', 'RTDB', 'SCSS'],
    link: 'https://linktree-escombro.vercel.app',
  },
  {
    name: 'Del Mastro',
    badge: 'Next.js',
    badgeType: 'cms',
    description:
      'Modern institutional website for an Italian restaurant on Av. Paulista. Built with Next.js 14 App Router, SSR for SEO, next/image for dish photo optimization and sophisticated design with Tailwind CSS.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'SSR', 'Netlify'],
    link: 'https://delmastrosp.netlify.app',
  },
];

export const translations: Record<Language, Translations> = {
  pt: {
    navbar: {
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      tagline: 'Building web experiences powered by AI',
      subtitle:
        'Engenheiro de Software na UOL com 4+ anos de experiência, especializado em integrar LLMs, sistemas RAG e bancos de dados em tempo real em aplicações web de produção.',
      ctaProjects: 'Ver projetos',
      ctaContact: 'Contato',
      scrollHint: 'Role para baixo',
    },
    about: {
      title: 'Sobre',
      bio: 'Sou engenheiro de Software em São Paulo, atualmente na UOL — o maior portal de notícias da América Latina. Especializo-me em construir produtos web com IA: de chatbots com RAG a sistemas de gestão em tempo real. Também toco em uma banda de hardcore chamada Escombro.',
      skillsTitle: 'Stack',
      categories: {
        frontend: 'Frontend',
        ai: 'IA & Integrações',
        tools: 'Ferramentas',
      },
    },
    projects: {
      title: 'Projetos',
      visitLabel: 'Visitar projeto',
      items: projectsPt,
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          company: 'UOL',
          role: 'Software Engineer',
          period: '2022 – presente',
          description:
            'Desenvolvimento de jogos embed e ferramentas interativas para o maior portal de notícias da América Latina. Padronização de sistemas de componentes reutilizáveis e prompts estruturados para workflows com IA.',
          stack: ['Vue.js', 'React', 'Angular', 'TypeScript'],
        },
        {
          company: 'Freelancer',
          role: 'Audio Engineer',
          period: '2021 – 2022',
          description:
            'Pós-produção de áudio para produções internacionais: RuPaul\'s Drag Race UK, Family Guy, Soul Eater.',
        },
      ],
    },
    contact: {
      title: 'Vamos construir algo juntos',
      subtitle:
        'Disponível para projetos freelance e oportunidades em Software e engenharia de IA.',
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
  },

  en: {
    navbar: {
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Building web experiences powered by AI',
      subtitle:
        'Software engineer at UOL with 4+ years of experience, specializing in integrating LLMs, RAG systems and real-time databases into production web applications.',
      ctaProjects: 'See projects',
      ctaContact: 'Contact',
      scrollHint: 'Scroll down',
    },
    about: {
      title: 'About',
      bio: "I'm a Software engineer based in São Paulo, currently at UOL — Latin America's largest news portal. I specialize in building AI-powered web products: from RAG chatbots to real-time admin systems. I also play in a hardcore band called Escombro.",
      skillsTitle: 'Stack',
      categories: {
        frontend: 'Frontend',
        ai: 'AI & Integrations',
        tools: 'Tools',
      },
    },
    projects: {
      title: 'Projects',
      visitLabel: 'Visit project',
      items: projectsEn,
    },
    experience: {
      title: 'Experience',
      items: [
        {
          company: 'UOL',
          role: 'Software Engineer',
          period: '2022 – present',
          description:
            'Building embed web games and interactive tools for Latin America\'s largest news portal. Standardizing reusable component systems and crafting structured prompts for AI-assisted development workflows.',
          stack: ['Vue.js', 'React', 'Angular', 'TypeScript'],
        },
        {
          company: 'Freelancer',
          role: 'Audio Engineer',
          period: '2021 – 2022',
          description:
            "Post-production audio for international productions: RuPaul's Drag Race UK, Family Guy, Soul Eater.",
        },
      ],
    },
    contact: {
      title: "Let's build something together",
      subtitle:
        'Available for freelance projects and opportunities in Software and AI engineering.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
  },
};

// Dados de contato (fixos, sem tradução)
export const contactLinks = {
  email: 'igorsf.dev@gmail.com',
  whatsapp: 'https://wa.me/5511943286969',
  linkedin: 'https://linkedin.com/in/igor-s-fugiwara-2283b2205',
  github: 'https://github.com/igorsfugiwara',
};

export const skills = {
  frontend: ['React', 'Next.js 14', 'TypeScript', 'Vue.js', 'SCSS', 'Tailwind CSS'],
  ai: ['Gemini API', 'RAG', 'Embeddings', 'Function Calling', 'Prompt Engineering', 'LLMs'],
  tools: ['Firebase', 'Vite', 'Git', 'Vercel', 'Netlify', 'Cloudinary', 'n8n'],
};
