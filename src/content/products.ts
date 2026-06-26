import type { Product, ProductStatus } from "./types";

export const products: Product[] = [
  {
    slug: "pnlguard",
    name: "PnLGuard",
    tagline: "AI-assisted financial anomaly monitoring",
    status: "live",
    url: "https://pnlguard.sdeashirvad.com",
    github: "https://github.com/sdeashirvad/pnlgaurd",
    storyKey: "pnlguard",
    problem:
      "P&L breaks are discovered too late — buried in spreadsheets, reviewed manually, and explained without audit context when markets have already moved.",
    solution:
      "Hybrid rule and AI detection on live P&L feeds with human-in-the-loop review, GenAI risk explanations, and a full audit trail.",
    architecture:
      "Ingest → Rule Engine → PostgreSQL Store → GenAI Explainer → HITL Review → Audit Store",
    architectureDetail:
      "Rules stay deterministic; GenAI adds context for human reviewers without coupling explanation logic to the detection pipeline.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "GenAI", "Docker"],
    images: [
      "/projects/pnlGaurd-1.png",
      "/projects/pnlGaurd-2.png",
      "/projects/pnlGaurd-3.png",
    ],
    metrics: [
      "Rule-based + AI hybrid break detection on live P&L feeds",
      "Human-in-the-loop Accept/Reject with full audit trail",
    ],
    ecosystemLayer: "business",
    featured: true,
  },
  {
    slug: "chatloom",
    name: "ChatLoom",
    tagline: "Multi-channel GenAI interaction platform",
    status: "live",
    url: "https://chatloom.sdeashirvad.com",
    github: "https://github.com/sdeashirvad/chat-loom",
    storyKey: "chatloom",
    problem:
      "GenAI prototypes rarely survive multi-tenant production — single chat boxes, no grounding control, and channels bolted on as afterthoughts.",
    solution:
      "Multi-tenant RAG backend with configurable personas, grounding modes, API key rotation, and Telegram + Web on one orchestration layer.",
    architecture:
      "Channel Adapter → Persona Engine → RAG Grounding → LLM Gateway → Response Store",
    architectureDetail:
      "Spring Boot service layer with persona-driven prompt templates and a REST facade designed for future AI-Ops extensions.",
    technologies: [
      "RAG",
      "Spring Boot",
      "Gemini API",
      "Prompt Engineering",
      "Docker",
      "REST APIs",
    ],
    images: [
      "/projects/chatloom-1.png",
      "/projects/chatloom-2.png",
      "/projects/chatloom-3.png",
    ],
    metrics: [
      "Multi-tenant RAG with configurable grounding modes",
      "Telegram + Web channels on a single orchestration layer",
    ],
    ecosystemLayer: "business",
    featured: true,
  },
  {
    slug: "specsentinel",
    name: "SpecSentinel",
    tagline: "Open-source API contract governance",
    status: "live",
    url: "https://specsentinel.sdeashirvad.com",
    github: "https://github.com/sdeashirvad/specsentinel",
    npm: "https://www.npmjs.com/package/specsentinel",
    moat: "Published on npm — install via npx specsentinel in any CI pipeline",
    storyKey: "specsentinel",
    problem:
      "Breaking API changes ship through PRs undetected until production — contract drift has no gate.",
    solution:
      "Detect breaking OpenAPI changes, calculate deployment risk, enforce governance policies, and integrate via CLI, GitHub Actions, PR comments, and Studio.",
    architecture:
      "Spec Diff → Risk Engine → Policy Gate → CLI / GitHub Actions / PR Comment / Studio",
    architectureDetail:
      "Configurable governance policies with interactive Studio/WebView for contract review before merge.",
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "Vite",
      "GitHub Actions",
      "OpenAPI",
      "JSON Schema",
      "Vitest",
    ],
    images: [
      "/projects/specsentinel-0.png",
      "/projects/specsentinel-1.png",
      "/projects/specsentinel-2.png",
      "/projects/specsentinel-3.png",
      "/projects/specsentinel-4.png",
    ],
      metrics: [
        "Breaking OpenAPI change detection with deployment risk scoring",
        "Published on npm — npx specsentinel for CI/CD pipelines",
        "CLI, GitHub Actions, and PR comment integrations",
      ],
    featured: false,
  },
  {
    slug: "goforge",
    name: "GoForge",
    tagline: "Workflow orchestration platform",
    status: "live",
    url: "https://goforge.sdeashirvad.com",
    github: "https://github.com/sdeashirvad",
    storyKey: "goforge",
    problem:
      "Orchestration failures hide in the gaps between services — invisible queues, silent retries, and worker contention until something breaks in production.",
    solution:
      "Go-based job orchestration with worker pools, queue depth monitoring, retry policies, and the Observatory — a real-time view of job lifecycle.",
    architecture:
      "Job Submit → Queue Buffer → Worker Pool → Retry Policy → Status Store → Observatory UI",
    architectureDetail:
      "Watch worker utilization, queue depth, and job status distribution in real time. Load demos and job monitors validate orchestration behavior before production wiring.",
    technologies: ["Go", "Worker Pools", "Job Queues", "Retries", "Observability"],
    images: [
      "/projects/goforge-1.png",
      "/projects/goforge-2.png",
      "/projects/goforge-3.png",
      "/projects/goforge-4.png",
    ],
    metrics: [
      "Real-time worker pool and queue depth observatory",
      "Configurable retries with job lifecycle tracking",
    ],
    ecosystemLayer: "platform",
    featured: true,
  },
  {
    slug: "sentryai",
    name: "SentryAI",
    tagline: "ETL failure diagnosis & operational intelligence",
    status: "live",
    url: "https://sentryai.sdeashirvad.com",
    github: "https://github.com/sdeashirvad/airflow-sentry-ai",
    storyKey: "sentryai",
    problem:
      "Airflow failures mean log archaeology — unstructured stack traces, unclear root causes, and slow handoffs between data engineering and SRE.",
    solution:
      "Structured root-cause classification for Airflow failures with LLM-driven analysis and exportable incident summaries for on-call handoffs.",
    architecture:
      "Airflow Failure Payload → Parser → LLM Classifier → Incident Template → Export",
    architectureDetail:
      "Spring Boot backend parsing Airflow failure payloads with templated incident responses designed for SRE workflows.",
    technologies: ["React", "Spring Boot", "AI Ops", "Airflow", "Docker"],
    images: [
      "/projects/sentryAi-1.png",
      "/projects/sentryAi-2.png",
      "/projects/sentryAi-3.png",
    ],
    metrics: [
      "Structured root-cause classification for Airflow failures",
      "Exportable incident summaries for SRE handoffs",
    ],
    ecosystemLayer: "operational",
    featured: false,
  },
  {
    slug: "transaction-guard",
    name: "Transaction Guard",
    tagline: "Idempotency & exactly-once execution layer",
    status: "in-development",
    storyKey: "transaction-guard",
    problem:
      "Client retries and concurrent duplicate requests break APIs that were never designed for at-least-once delivery semantics.",
    solution:
      "Redis-backed idempotency middleware with Lua-based distributed locking, configurable TTL, and fail-open / fail-closed modes.",
    architecture:
      "Request → Idempotency Middleware → Lua Lock (Redis) → Handler → Result Cache",
    architectureDetail:
      "Spring Boot middleware intercepting retry-prone endpoints with atomic distributed locking via Lua scripts in Redis.",
    technologies: [
      "Spring Boot",
      "Redis",
      "Lua",
      "Distributed Systems",
      "Concurrency Control",
      "Docker",
    ],
    images: ["/projects/transactionGaurd-1.png"],
    metrics: [
      "Exactly-once execution under concurrent duplicate requests",
      "Configurable TTL with fail-open / fail-closed modes",
    ],
    featured: false,
  },
  {
    slug: "bloom",
    name: "Bloom",
    tagline: "A quiet pregnancy companion",
    status: "research",
    url: "https://bloom.sdeashirvad.com",
    privateSource: true,
    storyKey: "bloom",
    problem:
      "Pregnancy apps optimize for engagement — accounts, feeds, tracking pixels — not for the quiet, private moments people actually want to keep.",
    solution:
      "Offline-first pregnancy companion with local journaling, week-by-week guidance, milestones, and keepsake memory export. No account required.",
    architecture:
      "Local Store → Journal / Milestones → Memory Export → Keepsake Book",
    architectureDetail:
      "100% on-device storage with a privacy-by-design data model. Modular screens: home, reflect, memories, and keepsake export.",
    technologies: [
      "React Native",
      "Android",
      "Offline-First",
      "Mobile",
      "Product Design",
    ],
    images: [
      "/projects/bloom-1.png",
      "/projects/bloom-2.png",
      "/projects/bloom-3.png",
    ],
    metrics: [
      "Week-by-week guidance with mood check-ins and milestone memories",
      "100% on-device storage — no account or internet required",
    ],
    researchProduct: true,
    featured: false,
  },
  {
    slug: "veera",
    name: "Veera",
    tagline: "Adaptive fitness intelligence",
    status: "research",
    url: "https://veera.sdeashirvad.com",
    privateSource: true,
    storyKey: "veera",
    problem:
      "Fitness tools reduce progress to a number on a scale. Generic plans ignore body composition, consistency, and how your body actually responds.",
    solution:
      "Adaptive transformation tracking with body composition insights, daily actions, and plans that evolve with real progress.",
    architecture:
      "Track → Learn → Adjust → Daily Actions",
    architectureDetail:
      "Unified nutrition, workout, and composition data model powering a continuous tracking → learning → adjustment loop.",
    technologies: [
      "Mobile",
      "Fitness Tech",
      "Body Composition",
      "Adaptive AI",
      "Health",
      "Product",
    ],
    images: ["/projects/veera-1.png"],
    metrics: [
      "Adaptive transformation tracking that adjusts plans to real progress",
      "Body composition insights beyond weight: fat loss, muscle gain, consistency",
    ],
    researchProduct: true,
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByStatus(status: ProductStatus): Product[] {
  return products.filter((p) => p.status === status);
}

export function getLiveProducts(): Product[] {
  return getProductsByStatus("live");
}

export function getResearchProducts(): Product[] {
  return products.filter((p) => p.researchProduct);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
