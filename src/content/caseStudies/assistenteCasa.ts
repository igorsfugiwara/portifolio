import { Language } from '../translations';
import { CaseStudyContent, CaseStudyLinks } from './types';

/**
 * Conteúdo da página de estudo de caso do Assistente de Casa.
 * Separado de translations.ts porque só a página /assistente-de-casa carrega.
 */

const pt: CaseStudyContent = {
  backLabel: 'Voltar ao portfólio',
  eyebrow: 'Estudo de caso',
  title: 'Assistente de Casa',
  tagline: 'A casa inteira em quatro telas — e um app que avisa antes de você esquecer.',
  intro:
    'Um app de verdade, no ar e em uso diário por duas pessoas. Ele junta tarefas da casa, cuidados do cachorro, o canteiro do jardim e o mercado num só lugar, sincroniza em tempo real entre celulares, lê o cupom fiscal por foto e manda a notificação na hora certa — sem virar mais uma lista que ninguém abre.',
  ctaLive: 'Abrir o app',
  ctaRepo: 'Ver o código',
  stats: [
    { value: '4', label: 'telas que cobrem a casa' },
    { value: '400+', label: 'testes automatizados' },
    { value: '20+', label: 'migrações versionadas' },
    { value: '4', label: 'Edge Functions no servidor' },
  ],
  problem: {
    title: 'O problema',
    lead:
      'Casa dividida por duas pessoas é um problema de coordenação, não de memória. E ele costuma morar em seis lugares ao mesmo tempo:',
    pains: [
      'A tarefa que só uma pessoa lembra — e que vira cobrança quando é esquecida.',
      'O protocolo do filhote: vacina, vermífugo, janela que fecha, data que não pode passar.',
      'A rega do canteiro, que muda quando chove e não pode ser a mesma para toda planta.',
      'A compra do mês virando uma pilha de cupons que ninguém digita.',
      'O lembrete que chega tarde, chega repetido, ou chega às duas da manhã.',
    ],
    turn:
      'O app resolve os cinco no mesmo lugar, com a mesma regra: se o sistema pode calcular, ele calcula — quem usa só confirma.',
  },
  screens: {
    title: 'Quatro telas',
    lead: 'Cada uma responde uma pergunta diferente. A primeira responde a única que importa de manhã.',
    items: [
      {
        name: 'Hoje',
        tag: 'O que precisa de você agora',
        description:
          'Tudo que vence hoje numa lista só: tarefas da casa, cuidados do bicho e regas agrupadas. Marcar é um toque, e o toque aparece no outro celular na hora.',
        bullets: [
          'Regas agrupadas em vez de dezenove linhas repetidas',
          'Marcação otimista: responde antes do servidor',
          'Avisos do dia no topo, quando existe algo fora do lugar',
        ],
      },
      {
        name: 'Casa',
        tag: 'Tarefas, compras e gasto',
        description:
          'Tarefas recorrentes que se reagendam sozinhas, listas de compras compartilhadas e o gasto do mês fechando por lista e por item — alimentado pela foto do cupom.',
        bullets: [
          'Recorrência no banco: concluiu, já nasce a próxima',
          'Listas por área da casa, com item riscado na hora',
          'Gasto por lista, por item e por mês contábil',
        ],
      },
      {
        name: 'Nori',
        tag: 'O cachorro, por escrito',
        description:
          'A ficha do bicho com o que o veterinário pergunta e ninguém lembra: vacinas com janela, vermifugação recorrente, ração, microchip, contato de emergência, ronda de cuidados e galeria de fotos.',
        bullets: [
          'Calendário de vacina com janela de reforço, não só data',
          'Ronda de cuidados guiada, específica para a raça',
          'Mais de um bicho na mesma casa',
        ],
      },
      {
        name: 'Jardim',
        tag: 'Canteiro em grade',
        description:
          'O canteiro desenhado célula a célula, com planta que ocupa mais de uma, calendário de rega por espécie e alerta de toxicidade para quem tem bicho em casa.',
        bullets: [
          'Chuva detectada pula a rega — sem rega dupla',
          'Toxicidade por espécie, com gravidade e manejo sugerido',
          'Histórico de rega por planta, não por canteiro',
        ],
      },
    ],
  },
  features: {
    title: 'O que ele faz de diferente',
    lead: 'As funcionalidades que separam o app de uma lista de tarefas com data.',
    items: [
      {
        name: 'Cupom fiscal vira gasto, por foto',
        description:
          'A foto do cupom sobe reduzida e com a orientação corrigida, a leitura roda na Claude API dentro de uma Edge Function — a chave nunca sai do servidor — e volta item a item para conferência antes de salvar. Errou? A nota é editável depois.',
      },
      {
        name: 'Notificação que respeita o sono',
        description:
          'Push de verdade via service worker e cron no banco, com hora de silêncio, sem reentrega infinita e com o botão "Já fiz" respondendo direto da notificação, sem abrir o app.',
      },
      {
        name: 'Tempo real entre os dois celulares',
        description:
          'O que uma pessoa marca aparece na tela da outra no mesmo segundo, via Realtime do Supabase. Nada de puxar para atualizar para descobrir que a tarefa já era.',
      },
      {
        name: 'Cada casa é uma ilha',
        description:
          'Isolamento por RLS no banco: a casa de uma pessoa não vaza para a de outra, nem na leitura nem na escrita. A segunda pessoa entra por convite, com login por link no e-mail — sem senha para esquecer.',
      },
      {
        name: 'Recorrência que o banco resolve',
        description:
          'Tarefa concluída já nasce agendada de novo, com a regra guardada no schema e testada. Ninguém precisa lembrar de recriar a rega de quarta.',
      },
      {
        name: 'Instala como app',
        description:
          'PWA na tela de início do iPhone e do Android, com ícone próprio, e que percebe sozinho quando existe versão nova.',
      },
    ],
  },
  useCases: {
    title: 'Para quem isso serve',
    lead: 'Foi escrito para uma casa específica, mas o problema não é.',
    items: [
      {
        name: 'Casal ou república dividindo a casa',
        description:
          'A divisão fica visível sem ninguém precisar cobrar: a tarefa tem dono, tem data, e some da tela quando alguém faz.',
      },
      {
        name: 'Quem acabou de pegar um filhote',
        description:
          'O protocolo sanitário inteiro em uma tela — vacina, reforço, vermífugo, carência do plano — com o aviso chegando antes da data, não depois.',
      },
      {
        name: 'Quem cuida de horta ou jardim',
        description:
          'Rega por espécie, que pula quando chove, e um mapa do canteiro que mostra quais plantas são tóxicas para o animal da casa e o que fazer com elas.',
      },
      {
        name: 'Quem quer saber para onde foi o dinheiro',
        description:
          'Sem planilha e sem digitar: fotografou o cupom, o gasto entra classificado por lista, por item e por mês.',
      },
    ],
  },
  engineering: {
    title: 'Por dentro',
    lead: 'O que sustenta o app quando ele é usado todo dia e não só na demo.',
    items: [
      {
        name: 'Mais de 400 testes automatizados',
        description:
          'Regras rodando contra um Postgres real em WASM, incluindo a suíte que assume o papel de usuário autenticado só para provar que o isolamento entre casas não vaza.',
      },
      {
        name: 'Schema versionado em migrações',
        description:
          'Mais de vinte migrações numeradas, com testes que verificam se cada uma fez o que prometeu. Nada de alterar tabela pela interface e torcer.',
      },
      {
        name: 'Segredo fica no servidor',
        description:
          'A chave da IA vive em Edge Function, nunca no pacote que o navegador baixa. O app cliente só conhece a chave pública do Supabase, que a RLS já limita.',
      },
      {
        name: 'Imagem tratada no celular',
        description:
          'A foto é reduzida a 1568px no lado maior antes de subir e respeita o EXIF — foto de 12MP inteira é lenta no 4G e não melhora a leitura.',
      },
    ],
  },
  stack: {
    title: 'Stack',
    groups: [
      { name: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'PWA', 'Service Worker'] },
      { name: 'Backend', items: ['Supabase', 'PostgreSQL', 'RLS', 'Realtime', 'Edge Functions', 'pg_cron'] },
      { name: 'IA', items: ['Claude API', 'Visão computacional', 'Extração estruturada'] },
      { name: 'Infra', items: ['Vercel', 'Web Push', 'Testes em Postgres WASM'] },
    ],
  },
  closing: {
    title: 'Está no ar, e em uso',
    text:
      'Não é protótipo nem demo com dado falso: o app roda todo dia, numa casa de verdade, com duas pessoas dependendo dele. O login é por link no e-mail — dá para entrar e ver a estrutura por dentro.',
    ctaLive: 'Abrir o app',
    ctaBack: 'Ver outros projetos',
  },
};

const en: CaseStudyContent = {
  backLabel: 'Back to portfolio',
  eyebrow: 'Case study',
  title: 'Assistente de Casa',
  tagline: 'A whole household in four screens — and an app that reminds you before you forget.',
  intro:
    'A real app, live and in daily use by two people. It pulls household chores, dog care, the garden bed and grocery spending into one place, syncs in real time across phones, reads receipts from a photo and sends the reminder at the right moment — without becoming yet another list nobody opens.',
  ctaLive: 'Open the app',
  ctaRepo: 'View the code',
  stats: [
    { value: '4', label: 'screens covering the house' },
    { value: '400+', label: 'automated tests' },
    { value: '20+', label: 'versioned migrations' },
    { value: '4', label: 'server-side Edge Functions' },
  ],
  problem: {
    title: 'The problem',
    lead:
      'A house shared by two people is a coordination problem, not a memory one. And it usually lives in six places at once:',
    pains: [
      'The chore only one person remembers — and that turns into blame when it slips.',
      'The puppy protocol: vaccine, dewormer, a socialization window closing, a date that cannot slide.',
      'Watering the garden, which changes when it rains and cannot be the same for every species.',
      'The monthly grocery run turning into a pile of receipts nobody types up.',
      'The reminder that arrives late, arrives twice, or arrives at 2am.',
    ],
    turn:
      'The app solves all five in one place, under one rule: if the system can compute it, it computes it — the user only confirms.',
  },
  screens: {
    title: 'Four screens',
    lead: 'Each answers a different question. The first one answers the only question that matters in the morning.',
    items: [
      {
        name: 'Today',
        tag: 'What needs you right now',
        description:
          'Everything due today in a single list: chores, pet care and watering, grouped. Checking something off is one tap, and it lands on the other phone instantly.',
        bullets: [
          'Watering grouped instead of nineteen repeated rows',
          'Optimistic check-off: responds before the server does',
          "The day's warnings on top, when something is out of place",
        ],
      },
      {
        name: 'House',
        tag: 'Chores, groceries and spending',
        description:
          'Recurring chores that reschedule themselves, shared shopping lists, and monthly spending closing per list and per item — fed by a photo of the receipt.',
        bullets: [
          'Recurrence in the database: finish one, the next is already born',
          'Lists per area of the house, items struck through instantly',
          'Spending per list, per item and per accounting month',
        ],
      },
      {
        name: 'Nori',
        tag: 'The dog, on the record',
        description:
          'The pet file with everything the vet asks and nobody remembers: vaccines with booster windows, recurring deworming, food, microchip, emergency contact, a guided care routine and a photo gallery.',
        bullets: [
          'Vaccine calendar with booster windows, not just dates',
          'Guided care routine, specific to the breed',
          'More than one pet per household',
        ],
      },
      {
        name: 'Garden',
        tag: 'Bed on a grid',
        description:
          'The garden bed drawn cell by cell, with plants spanning several cells, a watering schedule per species, and toxicity warnings for households with pets.',
        bullets: [
          'Detected rain skips the watering — no double soaking',
          'Toxicity per species, with severity and suggested handling',
          'Watering history per plant, not per bed',
        ],
      },
    ],
  },
  features: {
    title: 'What makes it different',
    lead: 'The features that separate this from a to-do list with dates.',
    items: [
      {
        name: 'A receipt photo becomes tracked spending',
        description:
          'The photo uploads resized and correctly oriented, extraction runs on the Claude API inside an Edge Function — the key never leaves the server — and comes back item by item for review before saving. Got it wrong? The receipt stays editable.',
      },
      {
        name: 'Notifications that respect your sleep',
        description:
          'Real push via service worker and a database cron, with quiet hours, no infinite redelivery, and a "Done" button answering straight from the notification without opening the app.',
      },
      {
        name: 'Real time across both phones',
        description:
          'What one person checks off shows up on the other screen the same second, through Supabase Realtime. No pull-to-refresh to find out the chore was already handled.',
      },
      {
        name: 'Every household is an island',
        description:
          'Isolation enforced by RLS in the database: one household never leaks into another, on reads or writes. The second person joins by invitation, with email-link login — no password to forget.',
      },
      {
        name: 'Recurrence the database handles',
        description:
          'A completed chore is already scheduled again, with the rule stored in the schema and covered by tests. Nobody has to remember to recreate Wednesday watering.',
      },
      {
        name: 'Installs like an app',
        description:
          "PWA on the iPhone and Android home screen, with its own icon, and it notices on its own when there's a new version.",
      },
    ],
  },
  useCases: {
    title: 'Who this is for',
    lead: 'It was written for one specific house, but the problem is not.',
    items: [
      {
        name: 'Couples or housemates sharing a home',
        description:
          'The split becomes visible without anyone having to nag: every chore has an owner, a date, and disappears from the screen when someone does it.',
      },
      {
        name: 'Anyone who just got a puppy',
        description:
          'The entire health protocol on one screen — vaccine, booster, dewormer, insurance waiting period — with the reminder arriving before the date, not after.',
      },
      {
        name: 'Anyone tending a garden',
        description:
          'Watering per species that skips the rain, plus a map of the bed showing which plants are toxic to the household pet and what to do about them.',
      },
      {
        name: 'Anyone who wants to know where the money went',
        description:
          'No spreadsheet and no typing: photograph the receipt and the spending lands classified by list, by item and by month.',
      },
    ],
  },
  engineering: {
    title: 'Under the hood',
    lead: 'What holds the app up when it is used every day and not just in a demo.',
    items: [
      {
        name: 'Over 400 automated tests',
        description:
          'Rules running against a real Postgres in WASM, including a suite that assumes the authenticated role purely to prove that isolation between households does not leak.',
      },
      {
        name: 'Schema versioned in migrations',
        description:
          'Over twenty numbered migrations, with tests checking that each one did what it promised. No altering tables through a dashboard and hoping.',
      },
      {
        name: 'Secrets stay on the server',
        description:
          'The AI key lives in an Edge Function, never in the bundle the browser downloads. The client only knows the public Supabase key, which RLS already fences in.',
      },
      {
        name: 'Images handled on the phone',
        description:
          'The photo is resized to 1568px on its longest side before upload and respects EXIF — a full 12MP photo is slow on mobile data and does not improve extraction.',
      },
    ],
  },
  stack: {
    title: 'Stack',
    groups: [
      { name: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'PWA', 'Service Worker'] },
      { name: 'Backend', items: ['Supabase', 'PostgreSQL', 'RLS', 'Realtime', 'Edge Functions', 'pg_cron'] },
      { name: 'AI', items: ['Claude API', 'Vision', 'Structured extraction'] },
      { name: 'Infra', items: ['Vercel', 'Web Push', 'Postgres WASM testing'] },
    ],
  },
  closing: {
    title: 'Live, and in use',
    text:
      'Not a prototype and not a demo full of fake data: the app runs every day, in a real house, with two people depending on it. Login is an email link — you can go in and see the structure from the inside.',
    ctaLive: 'Open the app',
    ctaBack: 'See other projects',
  },
};

export const assistenteCasaContent: Record<Language, CaseStudyContent> = { pt, en };

export const assistenteCasaLinks: CaseStudyLinks = {
  live: 'https://assistente-de-casa.vercel.app',
  repo: 'https://github.com/igorsfugiwara/Assistente-de-Casa',
};
