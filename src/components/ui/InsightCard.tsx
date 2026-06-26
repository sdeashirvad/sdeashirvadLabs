import type { Insight } from "../../content/types";
import { Badge } from "./Badge";

interface InsightCardProps {
  insight: Insight;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <a
      href={insight.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group card-hover flex flex-col rounded-lg border border-border bg-surface card-padding"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge
          variant={insight.publishedOn === "medium" ? "medium" : "labs"}
        />
        <span className="text-xs text-muted">
          {insight.readingTimeMinutes} min read
        </span>
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        {insight.topics.slice(0, 3).map((topic) => (
          <Badge key={topic} variant="topic" label={topic} />
        ))}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {insight.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {insight.summary}
      </p>
      <div className="flex items-center justify-between text-sm">
        <time dateTime={insight.dateIso ?? insight.date}>{insight.date}</time>
        <span className="font-medium text-accent">Read on Medium →</span>
      </div>
    </a>
  );
}
