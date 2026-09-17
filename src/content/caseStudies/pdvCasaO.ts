import { Language } from '../translations';
import { CaseStudyContent, CaseStudyLinks } from './types';

/**
 * Conteúdo da página de estudo de caso do PDV Casa Ó.
 * Sem link público: o sistema movimenta dinheiro de um negócio real.
 */

const pt: CaseStudyContent = {
  backLabel: 'Voltar ao portfólio',
  eyebrow: 'Estudo de caso',
  title: 'PDV Casa Ó',
  tagline: 'O caixa de um bar inteiro rodando no navegador — comanda, estoque, caixa e relatório no mesmo lugar.',
  intro:
    'Ponto de venda em produção, usado todo dia de funcionamento de um bar em São Paulo. Abre no celular do garçom e no computador do balcão ao mesmo tempo, sincroniza em tempo real, fecha a conta em oito formas de pagamento diferentes e entrega no fim da noite o relatório com faturamento, custo da mercadoria vendida e o rastro de quem fez o quê.',
  access: {
    label: 'Por que não tem link aqui',
    text:
      'O sistema movimenta o dinheiro de um negócio real: faturamento, fiado de clientes e estoque. Deixar um endereço público num portfólio é convite para tentativa de acesso, então o link e o código ficam fora daqui. As telas abaixo descrevem o que ele faz — e a demonstração eu faço ao vivo, a convite.',
  },
  stats: [
    { value: '8', label: 'telas, do PDV ao relatório' },
    { value: '8', label: 'formas de pagamento' },
    { value: '2', label: 'papéis com acesso separado' },
    { value: '0', label: 'arredondamento: tudo em centavos' },
  ],
  problem: {
    title: 'O problema',
    lead:
      'Bar pequeno costuma escolher entre duas dores: a maquininha com mensalidade e taxa por transação, ou a caderneta de papel. As duas cobram caro de um jeito diferente.',
    pains: [
      'A comanda de papel que some, molha, ou vira briga na hora de fechar a conta.',
      'Duas pessoas anotando no mesmo pedido, em cadernos diferentes.',
      'O fiado que vive na memória de quem estava no balcão naquela noite.',
      'O fim do mês sem saber o que deu lucro: falta o custo de cada produto vendido.',
      'A garrafa que sumiu do estoque sem ninguém saber se foi venda, quebra ou consumo interno.',
    ],
    turn:
      'O PDV fecha os cinco com uma regra só: todo movimento de dinheiro ou de estoque deixa registro de quem fez, quando, e por quanto.',
  },
  screens: {
    title: 'As telas',
    lead: 'Cada uma é de uma pessoa diferente: o balcão vive nas duas primeiras, a gestão nas outras.',
    items: [
      {
        name: 'PDV',
        tag: 'O balcão, na hora do movimento',
        description:
          'A tela que fica aberta a noite inteira: comandas lado a lado, produto entra com um toque, e o total recalcula na hora. Funciona no celular e no desktop com a mesma interface.',
        bullets: [
          'Produto de preço aberto, definido no momento da venda',
          'Item removido fica tachado, com quem removeu e quando',
          'Taxa e desconto entram como item, e aparecem separados no fechamento',
        ],
      },
      {
        name: 'Fechar conta',
        tag: 'Oito formas de receber',
        description:
          'Dinheiro, Pix, débito, crédito — e os casos que quebram um PDV genérico: pagamento misto dividido entre métodos, e fiado com nome e telefone do cliente amarrados à comanda.',
        bullets: [
          'Pix separado por conta que recebeu, para bater o extrato depois',
          'Misto divide a conta entre quantos métodos precisar',
          'Fiado registra o cliente, não vira só um buraco no caixa',
        ],
      },
      {
        name: 'Estoque',
        tag: 'Custo médio, sem planilha',
        description:
          'Entrada de mercadoria em transação atômica: o lote entra, o saldo sobe e o custo médio ponderado é recalculado no mesmo passo. A venda guarda o custo daquele momento, e é isso que faz o CMV fechar.',
        bullets: [
          'Ajuste de perda, quebra e consumo interno separado da compra',
          'Alerta de saldo mínimo por produto',
          'Produto que não controla estoque (taxa, couvert) fica de fora da conta',
        ],
      },
      {
        name: 'Caixa e relatórios',
        tag: 'O fim da noite',
        description:
          'Caixa abre e fecha por sessão, com sangria e suprimento registrados. O relatório filtra por período, abre sessão por sessão e exporta em CSV e TXT para quem cuida da contabilidade.',
        bullets: [
          'Faturamento, custo da mercadoria vendida e margem no mesmo lugar',
          'Log de atividade: abertura, item removido, pagamento, cancelamento',
          'Exportação pronta para mandar ao contador',
        ],
      },
    ],
  },
  features: {
    title: 'O que ele resolve bem',
    lead: 'As decisões que separam um PDV que aguenta a noite cheia de um formulário bonito.',
    items: [
      {
        name: 'Dinheiro é inteiro, nunca decimal',
        description:
          'Todo valor vive em centavos, como número inteiro, do preço do produto ao troco. Nenhum centavo aparece ou some por arredondamento de ponto flutuante no fim do mês.',
      },
      {
        name: 'Vários aparelhos, uma comanda só',
        description:
          'O Firestore sincroniza em tempo real: duas pessoas podem lançar na mesma comanda de celulares diferentes e as duas veem o mesmo total, sem uma sobrescrever a outra.',
      },
      {
        name: 'Quem apagou o quê fica registrado',
        description:
          'Item removido não some do banco: fica tachado, com autor e horário. Num lugar onde a conta é conferida na frente do cliente, isso é a diferença entre confiança e discussão.',
      },
      {
        name: 'Acesso por papel',
        description:
          'Quem está no balcão abre comanda e recebe. Produtos, caixa e relatórios só abrem para o administrador — e o bloqueio é na rota, não só no menu escondido.',
      },
      {
        name: 'Custo médio calculado em transação',
        description:
          'Entrada de estoque roda como transação no banco: ou o lote, o saldo e o custo médio mudam juntos, ou nada muda. É o que impede o custo de ficar errado quando duas entradas acontecem juntas.',
      },
      {
        name: 'Consignado com dono',
        description:
          'Produto de terceiro carrega nome e telefone do dono até o relatório, para acertar com quem deixou a mercadoria sem depender de memória.',
      },
    ],
  },
  useCases: {
    title: 'Para quem isso serve',
    lead: 'Foi escrito para um bar específico, mas o gargalo é o mesmo em todo comércio pequeno.',
    items: [
      {
        name: 'Bar, restaurante ou food service pequeno',
        description:
          'Comanda aberta por mesa ou por cliente, produto entrando a noite inteira e a conta fechando em segundos, sem depender da maquininha para organizar a venda.',
      },
      {
        name: 'Quem vende com produto de terceiro',
        description:
          'Consignação com dono identificado no relatório: dá para acertar com cada fornecedor o que realmente saiu.',
      },
      {
        name: 'Quem precisa saber a margem, não só o faturamento',
        description:
          'Com custo médio e custo no momento da venda, o relatório mostra o que sobrou de verdade, produto a produto.',
      },
      {
        name: 'Operação com mais de uma pessoa no caixa',
        description:
          'Papéis separados e log de atividade tornam auditável o turno inteiro — quem abriu, quem removeu item, quem recebeu.',
      },
    ],
  },
  engineering: {
    title: 'Por dentro',
    lead: 'O que sustenta um sistema que, se cair, para o faturamento da noite.',
    items: [
      {
        name: 'Estado em Pinia, domínio por store',
        description:
          'Produtos, comandas, caixa, estoque, movimentações e log ficam em stores separadas, cada uma dona das próprias regras — em vez de um componente gigante sabendo de tudo.',
      },
      {
        name: 'Transações onde o dado não pode divergir',
        description:
          'Saldo de estoque e custo médio mudam dentro de transação do Firestore. Onde há concorrência real entre dispositivos, o banco arbitra.',
      },
      {
        name: 'Snapshot no item vendido',
        description:
          'Nome, preço, categoria e custo do produto são copiados para o item da comanda no momento da venda. Mudar o preço amanhã não reescreve a história de ontem.',
      },
      {
        name: 'Regras de acesso no banco, não só na tela',
        description:
          'Autenticação por e-mail e senha, rotas protegidas por papel no cliente e regra no Firestore exigindo usuário autenticado para qualquer leitura ou escrita.',
      },
    ],
  },
  stack: {
    title: 'Stack',
    groups: [
      { name: 'Frontend', items: ['Vue 3', 'Composition API', 'TypeScript', 'Vue Router 4', 'SCSS'] },
      { name: 'Estado', items: ['Pinia', 'Stores por domínio'] },
      { name: 'Backend', items: ['Firebase', 'Firestore', 'Tempo real', 'Transações', 'Firebase Auth'] },
      { name: 'Build', items: ['Vite', 'Exportação CSV/TXT'] },
    ],
  },
  closing: {
    title: 'Em produção, movimentando dinheiro',
    text:
      'Não é um exercício de interface: é o caixa de um bar em funcionamento, usado por duas pessoas em turnos reais, com estoque, fiado e fechamento de mês dependendo dele. A demonstração eu faço ao vivo, com dados de teste.',
    ctaBack: 'Ver outros projetos',
  },
};

const en: CaseStudyContent = {
  backLabel: 'Back to portfolio',
  eyebrow: 'Case study',
  title: 'PDV Casa Ó',
  tagline: "A whole bar's register running in the browser — tabs, stock, cash drawer and reports in one place.",
  intro:
    'A point-of-sale system in production, used every night a bar in São Paulo opens. It runs on the server\'s phone and the counter computer at the same time, syncs in real time, closes a tab across eight payment methods, and hands over the end-of-night report with revenue, cost of goods sold and a trail of who did what.',
  access: {
    label: 'Why there is no link here',
    text:
      "The system moves a real business's money: revenue, customer tabs on credit, stock. Publishing an address in a portfolio is an invitation to probe it, so the link and the code stay out. The screens below describe what it does — and I demo it live, on request.",
  },
  stats: [
    { value: '8', label: 'screens, register to report' },
    { value: '8', label: 'payment methods' },
    { value: '2', label: 'roles with separate access' },
    { value: '0', label: 'rounding: everything in cents' },
  ],
  problem: {
    title: 'The problem',
    lead:
      'A small bar usually picks between two pains: a card terminal with monthly fees and a cut per transaction, or a paper notebook. Both charge dearly, in different ways.',
    pains: [
      'The paper tab that goes missing, gets soaked, or turns into an argument at closing time.',
      'Two people writing on the same order, in different notebooks.',
      "The credit tab living in the memory of whoever was behind the counter that night.",
      'Month end with no idea what turned a profit: the cost of each item sold is missing.',
      'The bottle gone from stock with nobody sure whether it was sold, broken or drunk in-house.',
    ],
    turn:
      'The register closes all five under one rule: every move of money or stock leaves a record of who did it, when, and for how much.',
  },
  screens: {
    title: 'The screens',
    lead: 'Each belongs to a different person: the counter lives in the first two, management in the rest.',
    items: [
      {
        name: 'Register',
        tag: 'The counter, mid-rush',
        description:
          'The screen that stays open all night: tabs side by side, products added with one tap, totals recalculating instantly. Same interface on phone and desktop.',
        bullets: [
          'Open-price products, set at the moment of sale',
          'Removed items stay struck through, with who removed them and when',
          'Service fee and discount enter as items and show separately at checkout',
        ],
      },
      {
        name: 'Checkout',
        tag: 'Eight ways to get paid',
        description:
          'Cash, Pix, debit, credit — plus the cases that break a generic register: split payments across methods, and store credit tied to a customer name and phone.',
        bullets: [
          'Pix split by receiving account, to reconcile statements later',
          'Split payment across as many methods as needed',
          'Store credit records the customer instead of becoming a hole in the till',
        ],
      },
      {
        name: 'Stock',
        tag: 'Average cost, no spreadsheet',
        description:
          'Goods arrive in an atomic transaction: the batch lands, the balance rises and the weighted average cost is recalculated in the same step. Each sale stores the cost at that moment — which is what makes COGS add up.',
        bullets: [
          'Loss, breakage and in-house consumption tracked apart from purchases',
          'Minimum balance alerts per product',
          'Products that do not track stock (fees, cover charge) stay out of the math',
        ],
      },
      {
        name: 'Cash & reports',
        tag: 'End of night',
        description:
          'The drawer opens and closes per session, with cash drops and top-ups recorded. Reports filter by period, expand session by session and export to CSV and TXT for the accountant.',
        bullets: [
          'Revenue, cost of goods sold and margin in one place',
          'Activity log: openings, removed items, payments, cancellations',
          'Exports ready to hand to bookkeeping',
        ],
      },
    ],
  },
  features: {
    title: 'What it gets right',
    lead: 'The decisions that separate a register surviving a full house from a pretty form.',
    items: [
      {
        name: 'Money is an integer, never a decimal',
        description:
          'Every value lives in cents as a whole number, from product price to change due. No cent appears or vanishes to floating-point rounding at month end.',
      },
      {
        name: 'Many devices, one tab',
        description:
          'Firestore syncs in real time: two people can add to the same tab from different phones and both see the same total, without one overwriting the other.',
      },
      {
        name: 'Deletions are on the record',
        description:
          'A removed item does not leave the database: it stays struck through, with author and timestamp. Where the bill is checked in front of the customer, that is the difference between trust and an argument.',
      },
      {
        name: 'Access by role',
        description:
          'Whoever is at the counter opens tabs and takes payment. Products, cash drawer and reports open only for the admin — and the block is at the route, not just a hidden menu.',
      },
      {
        name: 'Average cost computed in a transaction',
        description:
          'Stock entry runs as a database transaction: either the batch, the balance and the average cost all change, or nothing does. That is what keeps cost correct when two entries land together.',
      },
      {
        name: 'Consignment with an owner',
        description:
          "Third-party goods carry the owner's name and phone all the way to the report, so settling up does not depend on anyone's memory.",
      },
    ],
  },
  useCases: {
    title: 'Who this is for',
    lead: 'Written for one specific bar, but the bottleneck is the same across small retail.',
    items: [
      {
        name: 'Bars, restaurants and small food service',
        description:
          'A tab per table or per customer, products landing all night, and the bill closing in seconds without leaning on the card terminal to organize the sale.',
      },
      {
        name: 'Anyone selling third-party goods',
        description:
          'Consignment with the owner identified in the report, so each supplier can be settled for what actually sold.',
      },
      {
        name: 'Anyone who needs margin, not just revenue',
        description:
          'With average cost and cost-at-sale, the report shows what was actually left over, product by product.',
      },
      {
        name: 'Operations with more than one person on the till',
        description:
          'Separate roles and an activity log make a whole shift auditable — who opened, who removed an item, who took payment.',
      },
    ],
  },
  engineering: {
    title: 'Under the hood',
    lead: "What holds up a system whose downtime stops the night's revenue.",
    items: [
      {
        name: 'State in Pinia, one store per domain',
        description:
          'Products, tabs, cash drawer, stock, movements and the log live in separate stores, each owning its own rules — instead of one giant component knowing everything.',
      },
      {
        name: 'Transactions where data cannot diverge',
        description:
          'Stock balance and average cost change inside a Firestore transaction. Where devices genuinely contend, the database arbitrates.',
      },
      {
        name: 'Snapshots on the sold item',
        description:
          "Name, price, category and cost are copied onto the tab item at the moment of sale. Changing a price tomorrow does not rewrite yesterday's history.",
      },
      {
        name: 'Access rules in the database, not just the screen',
        description:
          'Email and password authentication, routes guarded by role on the client, and a Firestore rule demanding an authenticated user for any read or write.',
      },
    ],
  },
  stack: {
    title: 'Stack',
    groups: [
      { name: 'Frontend', items: ['Vue 3', 'Composition API', 'TypeScript', 'Vue Router 4', 'SCSS'] },
      { name: 'State', items: ['Pinia', 'Stores per domain'] },
      { name: 'Backend', items: ['Firebase', 'Firestore', 'Real time', 'Transactions', 'Firebase Auth'] },
      { name: 'Build', items: ['Vite', 'CSV/TXT export'] },
    ],
  },
  closing: {
    title: 'In production, handling money',
    text:
      'Not an interface exercise: it is the register of a working bar, used by two people across real shifts, with stock, customer credit and month-end closing depending on it. I demo it live, with test data.',
    ctaBack: 'See other projects',
  },
};

export const pdvCasaOContent: Record<Language, CaseStudyContent> = { pt, en };

export const pdvCasaOLinks: CaseStudyLinks = {};
