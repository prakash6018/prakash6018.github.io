import type { TNavLink, TService, TTechnology, TExperience, TProject } from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  nextjs,
  nodejs,
  fastapi,
  python,
  graphql,
  postgresql,
  claude,
  azure,
  docker,
  flutter,
  kotlin,
  ncompas,
  jntu,
  gatewayDashboard,
  aiQuoteBuilder,
} from '../assets';

const GITHUB = 'https://github.com/prakash6018';

export const navLinks: TNavLink[] = [
  { id: 'about', title: 'About' },
  { id: 'work', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

const services: TService[] = [
  { title: 'Full-Stack Web', icon: web },
  { title: 'AI Agents & RAG', icon: creator },
  { title: 'Backend & APIs', icon: backend },
  { title: 'Mobile Apps', icon: mobile },
];

// One WebGL canvas per ball; browsers allow ~16 at once, so keep this list short.
const technologies: TTechnology[] = [
  { name: 'TypeScript', icon: typescript },
  { name: 'React', icon: reactjs },
  { name: 'Next.js', icon: nextjs },
  { name: 'Node.js', icon: nodejs },
  { name: 'Python', icon: python },
  { name: 'FastAPI', icon: fastapi },
  { name: 'GraphQL', icon: graphql },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'Claude', icon: claude },
  { name: 'Azure', icon: azure },
  { name: 'Docker', icon: docker },
  { name: 'Flutter', icon: flutter },
  { name: 'Kotlin', icon: kotlin },
];

const skillGroups: { title: string; items: string[] }[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Dart', 'Kotlin', 'Swift'],
  },
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Material UI',
      'Apollo Client',
      'TanStack Query',
      'Redux Toolkit',
      'Vite',
      'WCAG',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'SQLAlchemy',
      'Alembic',
      'REST',
      'GraphQL',
      'Microservices',
    ],
  },
  {
    title: 'AI & LLM',
    items: [
      'RAG',
      'Vector search',
      'pgvector',
      'Embeddings',
      'Anthropic Claude',
      'OpenAI',
      'Azure OpenAI',
      'GPT-4o Vision',
      'Vercel AI SDK',
      'LangChain',
      'LangGraph',
      'AI agents',
      'MCP',
    ],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'Prisma', 'Redis', 'Schema design', 'Query optimization', 'Migrations'],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Azure (OpenAI, Service Bus, Blob Storage, Key Vault)',
      'AWS',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Railway',
      'Vercel',
    ],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'Jetpack Compose', 'SwiftUI', 'Firebase App Distribution', 'TestFlight'],
  },
  {
    title: 'Auth & Integrations',
    items: [
      'Auth0',
      'Microsoft Entra ID',
      'OAuth 2.0',
      'JWT',
      'RBAC',
      'Stripe',
      'Razorpay',
      'Shopify Storefront API',
      'Microsoft Graph',
      'SharePoint',
      'Twilio',
    ],
  },
  { title: 'Testing', items: ['Vitest', 'pytest', 'End-to-end testing'] },
];

const experiences: TExperience[] = [
  {
    title: 'Software Engineer',
    companyName: 'NCompas Business Solutions · Hyderabad',
    icon: ncompas,
    iconBg: '#383E56',
    date: 'Apr 2023 - Present',
    points: [
      'Build and ship features end to end across client and internal products: React and Next.js frontends, Node.js and FastAPI APIs, PostgreSQL and cloud deployment.',
      'Secured applications with Auth0, Microsoft Entra ID, OAuth 2.0, JWT and RBAC, including per-tenant data isolation in multi-tenant SaaS.',
      'Improved page load speed by 20% and cut frontend bundle size by 35% with code splitting, lazy loading and asset optimization.',
      'Containerized services with Docker and deployed them through CI/CD to Railway and Vercel; wrote unit and end-to-end tests with Vitest and pytest.',
      'Promoted from Associate Software Engineer to Software Engineer within nine months; received the Best Team Player award.',
    ],
  },
  {
    title: 'B.Tech, Electronics and Communications Engineering',
    companyName: 'Jawaharlal Nehru Technological University, Hyderabad',
    icon: jntu,
    iconBg: '#E6DEDD',
    date: '2018 - 2022',
    points: [
      'Claude Code Certification, Anthropic.',
      'Agents League (Global AI Community and Microsoft): badge for building AI agent apps in a global hackathon.',
    ],
  },
];

const blue = 'blue-text-gradient';
const green = 'green-text-gradient';
const pink = 'pink-text-gradient';

const projects: TProject[] = [
  // Professional work (from the resume; client code is private, so no links)
  {
    group: 'professional',
    name: 'AI Voice-Agent Platform',
    kind: 'RAG · Voice agents',
    description:
      'RAG knowledge search with hybrid vector and keyword retrieval that declines to answer below a similarity threshold, golden-question evals (recall@k, precision@3), and call triggers from webhooks, schedules, SFTP drops and Azure Service Bus.',
    tags: [
      { name: 'fastapi', color: blue },
      { name: 'pgvector', color: green },
      { name: 'azure-openai', color: pink },
    ],
    cover: ['#4f46e5', '#06b6d4'],
  },
  {
    group: 'professional',
    name: 'AI Governance Platform',
    kind: 'Primary developer · Guardrails',
    description:
      "Assesses AI projects against governance policies. Turns an organization's standards documents into checks, policies and runtime guardrails deployed to Azure, with a pre-run cost predictor and spend tracking.",
    tags: [
      { name: 'nextjs', color: blue },
      { name: 'claude', color: green },
      { name: 'prisma', color: pink },
    ],
    cover: ['#7c3aed', '#db2777'],
  },
  {
    group: 'professional',
    name: 'AI Quoting System',
    kind: 'Top contributor · US manufacturer',
    description:
      'Replaced spreadsheet estimating: AI extracts dimensions and materials from engineering drawings, then costs and quotes are generated. Built the quote workflow UI with review, multi-tier margins, requotes and CSV import/export.',
    tags: [
      { name: 'react', color: blue },
      { name: 'document-intelligence', color: green },
      { name: 'sharepoint', color: pink },
    ],
    cover: ['#0f766e', '#84cc16'],
  },
  {
    group: 'professional',
    name: 'Transcription Workflow Platform',
    kind: 'Web and mobile',
    description:
      'React features for clients, typists and reviewers on a GraphQL API, fixes from a production bug hunt (RBAC, expiring links, WCAG contrast), and native Kotlin and SwiftUI dictation apps alongside the Flutter app.',
    tags: [
      { name: 'apollo-graphql', color: blue },
      { name: 'auth0', color: green },
      { name: 'flutter', color: pink },
    ],
    cover: ['#2563eb', '#a78bfa'],
  },
  {
    group: 'professional',
    name: 'Multi-Tenant AI Agent SaaS',
    kind: 'Microservices',
    description:
      'An image-reading agent on GPT-4o vision (single, batch and compare) and a voice agent with a telephony connector, plus per-tenant bring-your-own-key LLM access, usage metering and a Microsoft Graph file connector.',
    tags: [
      { name: 'fastapi', color: blue },
      { name: 'redis', color: green },
      { name: 'railway', color: pink },
    ],
    cover: ['#1e293b', '#f97316'],
  },
  {
    group: 'professional',
    name: 'Headless D2C Beauty Storefront',
    kind: 'Top contributor · E-commerce',
    description:
      'Custom storefront on headless Shopify: product pages, cart with discounts and gift offers, waitlists and pre-orders, customer accounts, Stripe and Razorpay checkout, and SEO structured data.',
    tags: [
      { name: 'shopify', color: blue },
      { name: 'stripe', color: green },
      { name: 'razorpay', color: pink },
    ],
    cover: ['#be123c', '#fb7185'],
  },

  // Open source on GitHub
  {
    group: 'github',
    name: 'LLM Gateway Guardrails',
    kind: 'AI infrastructure',
    description:
      'Multi-tenant gateway between apps and LLM providers. Every request is policy-checked, PII-redacted, priced and budgeted before any tokens are bought, with budgets that hold under concurrency.',
    tags: [
      { name: 'node22', color: blue },
      { name: 'sqlite', color: green },
      { name: 'aes-gcm', color: pink },
    ],
    cover: ['#4338ca', '#22d3ee'],
    sourceCodeLink: `${GITHUB}/llm-gateway-guardrails`,
  },
  {
    group: 'github',
    name: 'Gateway Dashboard',
    kind: 'Admin console',
    description:
      'Admin console for the gateway: spend against budget per tenant, what the guardrails refused and why, policy editing with server-enforced roles, and a cost playground.',
    tags: [
      { name: 'nextjs15', color: blue },
      { name: 'tanstack-query', color: green },
      { name: 'zod', color: pink },
    ],
    image: gatewayDashboard,
    cover: ['#0f172a', '#334155'],
    sourceCodeLink: `${GITHUB}/gateway-dashboard`,
  },
  {
    group: 'github',
    name: 'MCP SQL Connector',
    kind: 'MCP server',
    description:
      'Lets Claude, Cursor or any MCP client answer questions from a SQL database without writing SQL: the model picks from a reviewed catalogue of typed, read-only queries.',
    tags: [
      { name: 'mcp', color: blue },
      { name: 'postgres', color: green },
      { name: 'typescript', color: pink },
    ],
    cover: ['#9333ea', '#f472b6'],
    sourceCodeLink: `${GITHUB}/mcp-sql-connector`,
  },
  {
    group: 'github',
    name: 'RAG Hybrid Search',
    kind: 'Retrieval',
    description:
      'Hybrid vector + keyword retrieval with rank fusion, structure-aware chunking and a similarity gate, so the assistant says "I don\'t know" instead of answering from the least-bad chunk.',
    tags: [
      { name: 'python', color: blue },
      { name: 'rag', color: green },
      { name: 'evals', color: pink },
    ],
    cover: ['#059669', '#0ea5e9'],
    sourceCodeLink: `${GITHUB}/rag-hybrid-search`,
  },
  {
    group: 'github',
    name: 'AI Quote Builder',
    kind: 'Vision + payments',
    description:
      'Quotes from engineering drawings: a vision model reads the drawing, an estimator reviews it, the pricing engine quotes it, and Stripe or Razorpay collects the deposit.',
    tags: [
      { name: 'nextjs', color: blue },
      { name: 'stripe', color: green },
      { name: 'razorpay', color: pink },
    ],
    image: aiQuoteBuilder,
    cover: ['#f8fafc', '#cbd5e1'],
    sourceCodeLink: `${GITHUB}/ai-quote-builder`,
  },
  {
    group: 'github',
    name: 'Tile Launcher',
    kind: 'Android',
    description:
      'An Android home-screen launcher inspired by the Windows Phone 8.1 Start screen: live tiles, turnstile and tilt motion, an alphabetical app list and accent colors.',
    tags: [
      { name: 'kotlin', color: blue },
      { name: 'jetpack-compose', color: green },
      { name: 'android', color: pink },
    ],
    cover: ['#e51400', '#f0a30a'],
    sourceCodeLink: `${GITHUB}/tile-launcher`,
  },
  {
    group: 'github',
    name: 'DriveHome',
    kind: 'Android',
    description:
      'A car-dashboard launcher for Android head units: speed gauge and trip computer, media controls that follow the steering-wheel buttons, map and weather widgets.',
    tags: [
      { name: 'kotlin', color: blue },
      { name: 'jetpack-compose', color: green },
      { name: 'location', color: pink },
    ],
    cover: ['#334155', '#fb923c'],
    sourceCodeLink: `${GITHUB}/drivehome`,
  },
];

export { services, technologies, skillGroups, experiences, projects };
