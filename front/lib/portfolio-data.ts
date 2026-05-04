export type NavigationItem = {
  id: string
  label: string
}

export type HeroMetric = {
  label: string
  value: string
}

export type Differentiator = {
  title: string
  description: string
}

export type QuickFact = {
  label: string
  value: string
}

export type SkillGroup = {
  title: string
  description: string
  items: string[]
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export type PublicProject = {
  title: string
  category: string
  year: string
  description: string
  image: string
  href: string
  tech: string[]
}

export type ProductCase = {
  title: string
  label: string
  description: string
  highlights: string[]
}

export type ContactLink = {
  kind: "email" | "linkedin" | "github" | "phone" | "cv"
  label: string
  value: string
  href: string
  description: string
}

export const profile = {
  firstName: "Emanuel",
  fullName: "Emanuel de Jesus Nascimento",
  role: "Frontend Engineer",
  location: "Buenos Aires, Argentina",
  availability: "Disponível para trabalho remoto, freelas e projetos sob demanda.",
  headline: "Interfaces com estética madura e lógica de produto.",
  summary:
    "Desenvolvedor front-end especializado em React, TypeScript, Next.js e VTEX IO, com experiência em e-commerce, aplicações de negócio e fluxos que precisam ser claros, rápidos e estáveis em produção.",
  differentiator:
    "Antes do front-end, atuei com ERP, faturamento, estoque, SLA e suporte técnico. Isso me ajuda a transformar regras complexas em interfaces utilizáveis, sustentáveis e preparadas para operação real.",
  resumeHref: "/pdf/EmanuelNascimento_CV.pdf",
  email: "emanuelnas29@gmail.com",
  phone: "+54 9 11 5574-0085",
  linkedin: "https://www.linkedin.com/in/emanueldjn/",
  github: "https://github.com/emanueldjn",
} as const

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Início" },
  { id: "about", label: "Perfil" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Trajetória" },
  { id: "portfolio", label: "Projetos" },
  { id: "contact", label: "Contato" },
]

export const heroMetrics: HeroMetric[] = [
  {
    label: "Base técnica",
    value: "React, TypeScript, Next.js, Angular, Ionic e VTEX IO para produto, interface e evolução contínua.",
  },
  {
    label: "Contexto de negócio",
    value: "ERP, CRM, estoque, faturamento, tickets, SLA e operação crítica informando cada decisão de interface.",
  },
  {
    label: "Foco atual",
    value: "Experiências web e mobile com atenção a acessibilidade, Web Vitals, integrações e manutenção saudável.",
  },
]

export const differentiators: Differentiator[] = [
  {
    title: "Visão de operação",
    description:
      "Experiência prática com rotinas críticas reduz ruído entre regra de negócio, fluxo de interface e execução técnica.",
  },
  {
    title: "Critério de produto",
    description:
      "Escolhas de layout, conteúdo e interação pensadas para clareza, confiança e continuidade de uso no dia a dia.",
  },
  {
    title: "Código sustentável",
    description:
      "Prioridade para componentes consistentes, acessibilidade, performance e manutenção sem improviso visual.",
  },
]

export const quickFacts: QuickFact[] = [
  {
    label: "Formação",
    value: "Engenharia de Software, 5º semestre. Conclusão prevista para maio de 2027.",
  },
  {
    label: "Idiomas",
    value: "Português nativo, espanhol fluente e inglês intermediário.",
  },
  {
    label: "Disponibilidade",
    value: "Base em Buenos Aires e atuação 100% remota para times no Brasil e fora dele.",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end e experiência",
    description: "Stack principal para interfaces robustas, jornadas claras e produto digital com padrão de qualidade.",
    items: ["React.js", "TypeScript", "Next.js", "Angular", "Ionic", "HTML5", "CSS3", "Sass"],
  },
  {
    title: "E-commerce e integrações",
    description: "Camada de implementação conectada a VTEX IO, dados de produto e APIs que sustentam operação real.",
    items: ["VTEX IO", "Store Framework", "GraphQL", "APIs RESTful", "MasterData v2", "Node.js", "Postman"],
  },
  {
    title: "Processo e colaboração",
    description: "Rotina de entrega orientada a clareza, acompanhamento e continuidade sem depender de improviso.",
    items: ["Git", "GitHub", "Figma", "Jira Service Desk", "ClickUp", "Scrum", "Kanban", "Troubleshooting"],
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    company: "START-7",
    role: "Desenvolvedor Front-end / VTEX IO",
    period: "jan 2025 - atual",
    location: "Rio de Janeiro, Brasil · Remoto",
    bullets: [
      "Evolução de interfaces web e mobile da plataforma MaxScholar com foco em responsividade, acessibilidade e consistência entre dispositivos.",
      "Desenvolvimento e manutenção de lojas VTEX IO com React.js e TypeScript, acompanhando Web Vitals como LCP e CLS.",
      "Criação de custom apps e manipulação de dados via GraphQL e MasterData v2 para requisitos de negócio mais complexos.",
      "Atendimento de tickets técnicos em Jira e ClickUp com compromisso de prazo, clareza de execução e SLA.",
    ],
  },
  {
    company: "Projeto Freelance",
    role: "Desenvolvedor Front-end",
    period: "jul 2024 - dez 2024",
    location: "Remoto",
    bullets: [
      "Atuação end-to-end no desenvolvimento de uma aplicação web para OCR, da interface às integrações de suporte.",
      "Implementação de interface responsiva em React com integração a APIs RESTful e atenção à legibilidade do fluxo.",
      "Refatoração de código legado para reduzir fricção de evolução e preparar a base para crescimento do produto.",
    ],
  },
  {
    company: "VOXLOGOS · AmorSaúde / Cartão de Todos",
    role: "Analista de Suporte Técnico e Customer Experience N1/N2",
    period: "abr 2024 - jan 2025",
    location: "Serra, Brasil · Remoto",
    bullets: [
      "Diagnóstico e troubleshooting de falhas sistêmicas em plataformas ERP e CRM com alto impacto operacional.",
      "Atuação em cenários críticos de retenção e gestão de crise, lidando com grande volume de atendimento.",
      "Suporte funcional em agendamentos, integridade de dados e cumprimento rigoroso de SLAs e KPIs.",
    ],
  },
  {
    company: "J.L. Rações LTDA",
    role: "Assistente Administrativo e Operativo",
    period: "jan 2020 - dez 2021",
    location: "Campo do Brito, Brasil · Presencial",
    bullets: [
      "Operação do sistema Zeus Automação para registro, auditoria e execução de regras de negócio.",
      "Emissão e validação de notas fiscais eletrônicas com conformidade tributária e baixa margem para erro.",
      "Controle de estoque, logística, contas a pagar e contas a receber em rotina de alto volume operacional.",
    ],
  },
]

export const publicProjects: PublicProject[] = [
  {
    title: "MedWise",
    category: "Plataforma de estudos",
    year: "2024",
    description:
      "Aplicação para estudantes de medicina com foco em consumo intenso de conteúdo, navegação limpa e base integrada entre interface e dados.",
    image: "/imgs/medwise.png",
    href: "https://medwise-front.vercel.app/",
    tech: ["React", "JavaScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Landing Page Feliz Natal",
    category: "Projeto visual",
    year: "2024",
    description:
      "Landing page interativa construída para explorar composição visual, ritmo de leitura e microinterações com acabamento mais autoral.",
    image: "/imgs/feliz-natal.png",
    href: "https://feliz-natal-three.vercel.app/",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Calculadora React",
    category: "Interface utilitária",
    year: "2024",
    description:
      "Projeto compacto para exercitar componentes reutilizáveis, comportamento previsível e layout responsivo em uma interface pequena.",
    image: "/imgs/calc2.png",
    href: "https://react-chi-ten.vercel.app/",
    tech: ["React", "CSS", "JavaScript"],
  },
]

export const productCases: ProductCase[] = [
  {
    title: "MaxScholar",
    label: "Produto educacional em operação",
    description:
      "Contribuição nas interfaces web e mobile de um produto voltado a crianças com dificuldades de aprendizagem, com foco em acessibilidade e adaptação entre dispositivos.",
    highlights: ["Angular", "Ionic", "Acessibilidade"],
  },
  {
    title: "OCR Web App",
    label: "Freelance privado",
    description:
      "Aplicação de reconhecimento óptico de caracteres construída com abordagem end-to-end, integrações de API e refatoração de legado para facilitar escala.",
    highlights: ["React", "REST APIs", "Refatoração"],
  },
  {
    title: "VTEX IO Stores & Custom Apps",
    label: "Experiência profissional",
    description:
      "Evolução de lojas VTEX IO com componentes customizados, schemas complexos, integrações via GraphQL e atenção contínua a performance e consistência visual.",
    highlights: ["VTEX IO", "GraphQL", "MasterData v2"],
  },
]

export const contactLinks: ContactLink[] = [
  {
    kind: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: "Canal direto para oportunidades, freelas e conversas sobre produto.",
  },
  {
    kind: "phone",
    label: "WhatsApp",
    value: profile.phone,
    href: "https://wa.me/5491155740085",
    description: "Contato rápido para alinhamentos, propostas e disponibilidade.",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/emanueldjn",
    href: profile.linkedin,
    description: "Histórico profissional e experiência em contexto real de trabalho.",
  },
  {
    kind: "github",
    label: "GitHub",
    value: "github.com/emanueldjn",
    href: profile.github,
    description: "Projetos públicos, experimentos e evolução técnica contínua.",
  },
  {
    kind: "cv",
    label: "Currículo PDF",
    value: "Abrir versão completa",
    href: profile.resumeHref,
    description: "Resumo consolidado de experiência, formação, cursos e idiomas.",
  },
]

export const educationNotes = [
  "Engenharia de Software em andamento na Cruzeiro do Sul Virtual.",
  "Curso Vivo Python AI Backend Developer com Python, SQL, FastAPI, TDD e IA.",
  "Fundamentos sólidos de front-end com HTML, CSS e JavaScript moderno.",
]

export const serviceHighlights = [
  "Refatoração de interfaces React e Next.js",
  "E-commerce e customizações em VTEX IO",
  "Integrações com GraphQL, REST e dados operacionais",
  "Front-end responsivo com foco em performance e acessibilidade",
]
