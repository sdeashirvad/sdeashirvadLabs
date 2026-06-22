import type { Insight } from "../../content/types";

interface InsightCardProps {
  insight: Insight;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <a
      href={insight.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/40"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {insight.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {insight.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {insight.summary}
      </p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">{insight.date}</span>
        <span className="font-medium text-accent">Read on Medium →</span>
      </div>
    </a>
  );
}
