import { PageMeta } from "../components/PageMeta";
import { SectionHeader } from "../components/ui/SectionHeader";
import { InsightCard } from "../components/ui/InsightCard";
import { insights } from "../content/insights";

const categories = [
  "Architecture Notes",
  "System Design",
  "Platform Design",
  "Operational Intelligence",
  "Workflow Design",
];

export function InsightsPage() {
  return (
    <>
      <PageMeta
        title="Insights"
        description="How SDEAshirvad Labs thinks about distributed systems, idempotency, platform design, and production engineering."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Engineering"
          title="How we think"
          description="Architecture notes from production systems — published on Medium, curated here as lab thinking."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Essays hosted on{" "}
          <a
            href="https://sdeashirvad.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Medium
          </a>
          . Full republication on Labs planned for a future release.
        </p>
      </div>
    </>
  );
}
