import { useState } from "react";
import { PageMeta, SITE_URL } from "../components/PageMeta";
import { JsonLd } from "../components/JsonLd";
import { PageSection } from "../components/ui/PageSection";
import { InsightCard } from "../components/ui/InsightCard";
import {
  insightTopics,
  getInsightsByTopic,
} from "../content/insights";

export function InsightsPage() {
  const [activeTopic, setActiveTopic] = useState("All");
  const filtered = getInsightsByTopic(activeTopic);

  return (
    <>
      <PageMeta
        title="Insights"
        description="How SDEAshirvad Labs thinks about distributed systems, idempotency, platform design, and production engineering."
        canonical={`${SITE_URL}/insights`}
      />
      <JsonLd
        data={[
          {
            "@type": "CollectionPage",
            name: "SDEAshirvad Labs Insights",
            url: `${SITE_URL}/insights`,
            description:
              "Architecture notes from production systems published on Medium.",
          },
          ...filtered.map((insight) => ({
            "@type": "Article",
            headline: insight.title,
            description: insight.summary,
            url: insight.url,
            datePublished: insight.dateIso,
            author: { "@id": `${SITE_URL}/#organization` },
          })),
        ]}
      />

      <PageSection
        eyebrow="Engineering"
        title="How we think"
        description="Architecture notes from production systems — published on Medium, curated here as lab thinking."
      >
        <div
          className="section-gap flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by topic"
        >
          <TopicFilter
            label="All"
            active={activeTopic === "All"}
            onClick={() => setActiveTopic("All")}
          />
          {insightTopics.map((topic) => (
            <TopicFilter
              key={topic}
              label={topic}
              active={activeTopic === topic}
              onClick={() => setActiveTopic(topic)}
            />
          ))}
        </div>

        <div
          id="articles"
          className="section-gap grid card-gap md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No articles match this topic yet.
          </p>
        )}

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
      </PageSection>
    </>
  );
}

function TopicFilter({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`badge-hover rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-accent/50 bg-accent/15 text-accent"
          : "border-border bg-surface text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
