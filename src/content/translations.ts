export type Language = 'pt' | 'en';

export interface ProjectData {
  name: string;
  badge: string;
  description: string;
  stack: string[];
  /** Ausente quando o projeto não tem demo pública (ex.: sistema financeiro em produção) */
  link?: string;
  featured?: boolean;
  badgeType?: 'ai' | 'realtime' | 'api' | 'cms' | 'seo';
  /** Página de estudo de caso dentro do próprio portfólio (rota interna) */
  caseStudy?: string;
  /** Texto curto no lugar do link, quando não há demo pública */
  privateNote?: string;
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
    caseStudyLabel: string;
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
    name: 'Assistente de Casa',
    badge: 'AI + Realtime',
    badgeType: 'ai',
    description:
      'App de gestão doméstica para duas pessoas: tarefas do dia a dia, cuidados com o cachorro, canteiro do jardim com calendário de rega e listas de compras compartilhadas. Leitura de nota fiscal por IA via API da Claude, sync em tempo real e RLS multiusuário no Supabase, PWA instalável com notificações push.',
    stack: ['React', 'TypeScript', 'Supabase', 'Realtime', 'Claude API', 'PWA', 'Vite', 'Vercel'],
    link: 'https://assistente-de-casa.vercel.app',
    caseStudy: '/assistente-de-casa',
  },
  {
    name: 'PDV Casa Ó',
    badge: 'Sistema em produção',
    badgeType: 'realtime',
    description:
      'Ponto de venda de um bar em São Paulo, usado todo dia de funcionamento. Comandas sincronizadas em tempo real entre celular e balcão, oito formas de pagamento (incluindo misto e fiado), estoque com custo médio ponderado calculado em transação, caixa com sangria e suprimento, e relatório com faturamento, CMV e log de auditoria.',
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Firebase', 'Firestore', 'SCSS', 'Vite'],
    caseStudy: '/pdv-casa-o',
    privateNote: 'Sem demo pública — sistema financeiro',
  },
  {
    name: 'Get Lawyer',
    badge: 'AI-Powered',
    badgeType: 'ai',
    description:
      'Marketplace jurídico que liga cliente e advogado por triagem de IA: um chat com Gemini entende o caso, classifica a área do direito e mede a urgência antes de encaminhar. Busca por estado e especialidade, painel de oportunidades para o advogado, chat em tempo real, avaliação pós-atendimento, fórum moderado e área administrativa.',
    stack: ['React 18', 'TypeScript', 'Firebase', 'Firestore', 'Gemini API', 'Tailwind CSS', 'Vercel'],
    link: 'https://get-lawer.vercel.app',
  },
  {
    name: 'Escombro — Site Oficial',
    badge: 'Band Site',
    badgeType: 'cms',
    description:
      'Site oficial de uma banda de hardcore: shows, imprensa, contato e política de privacidade. Conteúdo vive no Firestore e é editado por um painel admin protegido — show com data passada vai sozinho para o fim da lista, riscado.',
    stack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'React Router', 'Vercel'],
    link: 'https://escombro.vercel.app',
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
  {
    name: 'gamezzz one',
    badge: 'Game Platform',
    badgeType: 'api',
    description:
      'Plataforma de jogos clássicos e originais que rodam 100% no browser — sem download, sem cadastro. Inclui Pong, Catan e PokéTrunfo com 900+ Pokémon reais via PokéAPI.',
    stack: ['Next.js 14', 'TypeScript', 'HTML5 Canvas', 'SCSS', 'PokéAPI', 'Vercel'],
    link: 'https://gamezzz-one.vercel.app',
  },
  {
    name: 'Catan',
    badge: '3D Browser Game',
    badgeType: 'realtime',
    description:
      'Implementação web do Catan com renderização 3D via Three.js. Tabuleiro hexagonal gerado proceduralmente, 1 jogador humano vs 3 NPCs com dificuldades configuráveis, sistema completo de cartas de desenvolvimento, portos, negociação e condição de vitória.',
    stack: ['Three.js', 'TypeScript', 'Vite', 'JavaScript ES Modules', 'Netlify'],
    link: 'https://mery-catan.netlify.app/',
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
    name: 'Assistente de Casa',
    badge: 'AI + Realtime',
    badgeType: 'ai',
    description:
      'Full-stack home management app for two people: daily tasks, dog care, a garden bed with a watering schedule, and shared shopping lists. AI-powered receipt reading via the Claude API, real-time sync with multi-user RLS on Supabase, installable PWA with push notifications.',
    stack: ['React', 'TypeScript', 'Supabase', 'Realtime', 'Claude API', 'PWA', 'Vite', 'Vercel'],
    link: 'https://assistente-de-casa.vercel.app',
    caseStudy: '/assistente-de-casa',
  },
  {
    name: 'PDV Casa Ó',
    badge: 'Production system',
    badgeType: 'realtime',
    description:
      'Point-of-sale system for a bar in São Paulo, used every night it opens. Tabs synced in real time between phone and counter, eight payment methods (split and store credit included), stock with weighted average cost computed inside a transaction, cash drawer with drops and top-ups, and reports with revenue, COGS and an audit log.',
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Firebase', 'Firestore', 'SCSS', 'Vite'],
    caseStudy: '/pdv-casa-o',
    privateNote: 'No public demo — financial system',
  },
  {
    name: 'Get Lawyer',
    badge: 'AI-Powered',
    badgeType: 'ai',
    description:
      'Legal marketplace connecting clients and lawyers through AI triage: a Gemini-powered chat understands the case, classifies the area of law and rates urgency before routing it. Search by state and specialty, opportunity dashboard for lawyers, real-time chat, post-service review, moderated forum and admin area.',
    stack: ['React 18', 'TypeScript', 'Firebase', 'Firestore', 'Gemini API', 'Tailwind CSS', 'Vercel'],
    link: 'https://get-lawer.vercel.app',
  },
  {
    name: 'Escombro — Official Site',
    badge: 'Band Site',
    badgeType: 'cms',
    description:
      'Official website for a hardcore band: shows, press, contact and privacy policy. Content lives in Firestore and is edited through a protected admin panel — a show whose date has passed moves itself to the bottom of the list, struck through.',
    stack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'React Router', 'Vercel'],
    link: 'https://escombro.vercel.app',
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
  {
    name: 'gamezzz one',
    badge: 'Game Platform',
    badgeType: 'api',
    description:
      'Browser-based game platform with classic and original games — no download, no sign-up. Includes Pong, Catan and PokéTrunfo with 900+ real Pokémon via PokéAPI.',
    stack: ['Next.js 14', 'TypeScript', 'HTML5 Canvas', 'SCSS', 'PokéAPI', 'Vercel'],
    link: 'https://gamezzz-one.vercel.app',
  },
  {
    name: 'Catan',
    badge: '3D Browser Game',
    badgeType: 'realtime',
    description:
      'Web implementation of Catan with 3D rendering via Three.js. Procedurally generated hexagonal board, 1 human player vs 3 configurable-difficulty NPCs, full development card system, ports, trading and victory condition.',
    stack: ['Three.js', 'TypeScript', 'Vite', 'JavaScript ES Modules', 'Netlify'],
    link: 'https://mery-catan.netlify.app/',
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
      caseStudyLabel: 'Ver por dentro',
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
      caseStudyLabel: 'Look inside',
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
  frontend: ['React', 'Next.js 14', 'TypeScript', 'Vue.js', 'SCSS', 'Tailwind CSS', 'PWA'],
  ai: ['Claude API', 'Gemini API', 'RAG', 'Embeddings', 'Function Calling', 'Prompt Engineering', 'LLMs'],
  tools: ['Firebase', 'Supabase', 'PostgreSQL', 'Vite', 'Git', 'Vercel', 'Netlify', 'Cloudinary', 'n8n'],
};
