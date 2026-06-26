import type { Insight } from "./types";

export const insights: Insight[] = [
  {
    slug: "distributed-caching-idempotency",
    title:
      "Stop Scaling Your Database: A Practical Guide to Distributed Caching and Idempotency",
    summary:
      "How in-memory caching stabilized P99 latency through a 70% traffic spike.",
    url: "https://sdeashirvad.medium.com/stop-scaling-your-database-a-practical-guide-to-distributed-caching-and-idempotency-52fd51b3cf90",
    date: "Mar 2026",
    dateIso: "2026-03-05",
    tags: ["Distributed Systems", "Caching", "Performance"],
    topics: ["Distributed Systems", "Caching", "Performance", "Backend"],
    readingTimeMinutes: 8,
    publishedOn: "medium",
    relatedProductSlugs: ["transaction-guard"],
  },
  {
    slug: "art-of-idempotency",
    title: "The Art of Idempotency: Why Client Retries Are Breaking Your APIs",
    summary:
      "APIs that survive network partitions, retries, and duplicate concurrent requests.",
    url: "https://sdeashirvad.medium.com/the-art-of-idempotency-why-client-retries-are-breaking-your-apis-f1aedd533c95",
    date: "Apr 2026",
    dateIso: "2026-04-10",
    tags: ["Idempotency", "API Design", "Distributed Systems"],
    topics: ["Idempotency", "API Design", "Distributed Systems", "Reliability"],
    readingTimeMinutes: 7,
    publishedOn: "medium",
    relatedProductSlugs: ["transaction-guard"],
  },
  {
    slug: "text-to-sql-trap",
    title:
      "The Hidden Architecture of Plain English: Why Text-to-SQL is a Distributed Systems Trap",
    summary:
      "A deep dive into the hidden complexities of natural language interfaces for databases.",
    url: "https://sdeashirvad.medium.com/the-hidden-architecture-of-plain-english-why-text-to-sql-is-a-distributed-systems-trap-e58ce0bb97a1",
    date: "Jun 2026",
    dateIso: "2026-06-01",
    tags: ["Text-to-SQL", "Distributed Systems", "AI"],
    topics: ["AI", "Distributed Systems", "Platform Engineering"],
    readingTimeMinutes: 10,
    publishedOn: "medium",
    relatedProductSlugs: ["chatloom"],
  },
];

export const insightTopics = [
  "Distributed Systems",
  "Caching",
  "Workflow Design",
  "AI",
  "Platform Engineering",
  "Backend",
  "Reliability",
  "API Design",
  "Performance",
  "Idempotency",
] as const;

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getInsightsByTopic(topic: string): Insight[] {
  if (topic === "All") return insights;
  return insights.filter((i) => i.topics.includes(topic as Insight["topics"][number]));
}
