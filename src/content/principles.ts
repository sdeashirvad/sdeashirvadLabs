import type { Principle } from "./types";

export const principles: Principle[] = [
  {
    title: "Deterministic before generative",
    description:
      "Rules, schemas, and audit trails stay predictable. AI adds context — it does not replace accountability.",
  },
  {
    title: "Offline-capable where it matters",
    description:
      "Not every product needs the cloud. Human data deserves local-first design when privacy is the feature.",
  },
  {
    title: "Observable by default",
    description:
      "Queues, workers, failures, and retries should be visible before they become incidents.",
  },
  {
    title: "Built to integrate, not isolate",
    description:
      "Each product stands alone today. The architecture assumes they will connect tomorrow.",
  },
];
