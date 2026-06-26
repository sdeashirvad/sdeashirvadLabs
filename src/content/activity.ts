import type { ActivityItem } from "./types";

export const activityFeed: ActivityItem[] = [
  {
    date: "2025-02-10",
    type: "launch",
    productSlug: "chatloom",
    title: "Released ChatLoom v1.0 — Multi-channel GenAI interaction platform",
    link: "https://chatloom.sdeashirvad.com",
  },
  {
    date: "2025-08-07",
    type: "release",
    productSlug: "chatloom",
    title: "ChatLoom v2 — Added Dynamic Multi-Tenant RAG support",
    link: "https://chatloom.sdeashirvad.com",
  },

  {
    date: "2025-05-12",
    type: "launch",
    productSlug: "pnlguard",
    title: "Released PnLGuard v1.0",
    link: "https://pnlguard.sdeashirvad.com",
  },
  {
    date: "2025-12-20",
    type: "release",
    productSlug: "pnlguard",
    title: "PnLGuard v2 — LLM investigation optimization & database-assisted analysis",
    link: "https://pnlguard.sdeashirvad.com",
  },

  {
    date: "2025-11-21",
    type: "launch",
    productSlug: "sentryai",
    title: "Released SentryAI v1.0",
    link: "https://sentryai.sdeashirvad.com",
  },
  {
    date: "2026-01-27",
    type: "release",
    productSlug: "sentryai",
    title: "SentryAI v2 — Added Severity Engine & Retryability Analysis",
    link: "https://sentryai.sdeashirvad.com",
  },

  {
    date: "2026-02-03",
    type: "launch",
    productSlug: "goforge",
    title: "Released GoForge workflow orchestration platform",
    link: "https://goforge.sdeashirvad.com",
  },

  {
    date: "2026-03-05",
    type: "article",
    productSlug: "transaction-guard",
    title: "Published: Distributed Caching & Idempotency",
    link: "https://sdeashirvad.medium.com/stop-scaling-your-database-a-practical-guide-to-distributed-caching-and-idempotency-52fd51b3cf90",
  },

  {
    date: "2026-03-09",
    type: "research",
    productSlug: "bloom",
    title: "Released Bloom Research Preview",
    link: "https://bloom.sdeashirvad.com",
  },

  {
    date: "2026-04-10",
    type: "article",
    productSlug: "transaction-guard",
    title: "Published: The Art of Idempotency",
    link: "https://sdeashirvad.medium.com/the-art-of-idempotency-why-client-retries-are-breaking-your-apis-f1aedd533c95",
  },

  {
    date: "2026-06-01",
    type: "article",
    productSlug: "chatloom",
    title: "Published: Why Text-to-SQL is a Distributed Systems Trap",
    link: "https://sdeashirvad.medium.com/the-hidden-architecture-of-plain-english-why-text-to-sql-is-a-distributed-systems-trap-e58ce0bb97a1",
  },

  {
    date: "2026-06-10",
    type: "marketplace",
    productSlug: "specsentinel",
    title: "Published SpecSentinel GitHub Marketplace Action",
    link: "https://github.com/marketplace/actions/specsentinel",
  },

  {
    date: "2026-06-15",
    type: "release",
    productSlug: "specsentinel",
    title: "Released SpecSentinel v1.0.0",
    link: "https://www.npmjs.com/package/specsentinel",
  },

  {
    date: "2026-06-27",
    type: "development",
    productSlug: "bloom",
    title: "Bloom submitted for Google Play review",
    link: "https://bloom.sdeashirvad.com",
  },
];

export function getRecentActivity(limit?: number): ActivityItem[] {
  const sorted = [...activityFeed].sort((a, b) => b.date.localeCompare(a.date));
  if (limit === undefined) return sorted;
  return sorted.slice(0, limit);
}

/** Full studio timeline — all entries, newest first. */
export function getActivityTimeline(): ActivityItem[] {
  return getRecentActivity();
}
