import type { EcosystemLayerConfig, TimelineItem } from "./types";

export const ecosystemLayers: EcosystemLayerConfig[] = [
  {
    id: "governance",
    label: "Contract Governance",
    description:
      "API contract diffing, deployment risk scoring, and governance gates before merge.",
    productSlugs: ["specsentinel"],
    status: "live",
  },
  {
    id: "business",
    label: "Business Systems",
    description:
      "Financial investigation and multi-channel GenAI interfaces — where domain logic meets users.",
    productSlugs: ["pnlguard", "chatloom"],
    status: "platform-vision",
  },
  {
    id: "platform",
    label: "Platform Layer",
    description:
      "Workflow orchestration with worker pools, queues, retries, and real-time observability.",
    productSlugs: ["goforge"],
    status: "platform-vision",
  },
  {
    id: "operational",
    label: "Operational Intelligence",
    description:
      "Failure diagnosis, root-cause classification, and incident handoffs for pipeline operations.",
    productSlugs: ["sentryai"],
    status: "platform-vision",
  },
];

export const ecosystemTimeline: TimelineItem[] = [
  {
    phase: "Phase 1",
    title: "Independent products",
    description:
      "SpecSentinel, PnLGuard, ChatLoom, GoForge, and SentryAI operate as standalone platforms with their own deployments.",
    status: "complete",
  },
  {
    phase: "Phase 2",
    title: "Cross-product orchestration",
    description:
      "Shared orchestration through GoForge, idempotency via Transaction Guard, and incremental platform wiring between live products.",
    status: "in-progress",
  },
  {
    phase: "Phase 3",
    title: "Unified operational intelligence",
    description:
      "Detect anomalies, orchestrate remediation, and diagnose failures as one coherent platform — built on proven standalone products.",
    status: "planned",
  },
];

export const ecosystemNarrative = {
  detect:
    "PnLGuard surfaces financial anomalies with deterministic rules and human-in-the-loop review. ChatLoom extends intelligent interfaces across channels.",
  orchestrate:
    "GoForge coordinates jobs across worker pools — queue depth, retries, and lifecycle visible in the Observatory before failures cascade.",
  diagnose:
    "SentryAI classifies Airflow failures and exports incident summaries so on-call engineers spend minutes, not hours, in log archaeology.",
};

export const standaloneModel = {
  title: "Intentionally independent today",
  description:
    "Each product ships with its own deployment, data store, and release cycle. This is deliberate — standalone products validate architecture before platform wiring.",
  points: [
    "Separate subdomains and infrastructure per product",
    "No shared runtime dependencies between live products",
    "Each product can be adopted without the full ecosystem",
  ],
};

export const integrationStrategy = {
  title: "Integration strategy",
  description:
    "Platform wiring happens through well-defined boundaries — not monolithic coupling.",
  points: [
    "GoForge as orchestration backbone for cross-product job flows",
    "Transaction Guard as idempotency middleware for retry-safe APIs",
    "SpecSentinel as contract governance gate in CI/CD pipelines",
    "SentryAI for operational diagnosis when orchestrated jobs fail",
  ],
};

export const productBoundaries = {
  title: "Product boundaries",
  description: "Each layer owns a distinct concern in the engineering stack.",
  layers: [
    { layer: "Governance", owner: "SpecSentinel", scope: "API contracts, breaking changes, deployment risk" },
    { layer: "Business", owner: "PnLGuard, ChatLoom", scope: "Domain logic, user interfaces, GenAI channels" },
    { layer: "Platform", owner: "GoForge", scope: "Job queues, worker pools, retries, observability" },
    { layer: "Operational", owner: "SentryAI", scope: "Failure diagnosis, incident classification, SRE handoffs" },
  ],
};

export const futureOrchestrationModel = {
  title: "Future orchestration model",
  description:
    "The vision is a unified detect → orchestrate → diagnose loop — but only after each product proves value independently.",
  flow: "Anomaly Detected → GoForge Orchestrates Remediation → SentryAI Diagnoses Failures → SpecSentinel Gates API Changes",
};
