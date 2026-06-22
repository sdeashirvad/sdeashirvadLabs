import type { EcosystemLayerConfig, TimelineItem } from "./types";

export const ecosystemLayers: EcosystemLayerConfig[] = [
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
    phase: "Now",
    title: "Independent live products",
    description:
      "PnLGuard, ChatLoom, GoForge, and SentryAI operate as standalone platforms with their own deployments.",
  },
  {
    phase: "Next",
    title: "Platform wiring",
    description:
      "Shared orchestration through GoForge, idempotency via Transaction Guard, and cross-product observability.",
  },
  {
    phase: "Vision",
    title: "Unified ecosystem",
    description:
      "Detect anomalies, orchestrate remediation, and diagnose failures as one coherent platform — not three separate tools.",
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
