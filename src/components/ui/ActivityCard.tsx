import { Link } from "react-router-dom";
import { getProductBySlug } from "../../content/products";
import type { ActivityItem } from "../../content/types";
import { Badge } from "./Badge";

const typeLabels: Record<ActivityItem["type"], string> = {
  release: "Release",
  marketplace: "Marketplace",
  launch: "Launch",
  article: "Article",
  research: "Research",
  development: "Development",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface ActivityCardProps {
  item: ActivityItem;
}

export function ActivityCard({ item }: ActivityCardProps) {
  const product = item.productSlug
    ? getProductBySlug(item.productSlug)
    : undefined;
  const isExternal = item.link.startsWith("http");

  const inner = (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant="tech" label={typeLabels[item.type]} />
          {product && (
            <span className="text-xs text-muted">{product.name}</span>
          )}
        </div>
        <p className="font-medium text-foreground">{item.title}</p>
      </div>
      <time
        dateTime={item.date}
        className="shrink-0 text-sm text-muted-foreground"
      >
        {formatDate(item.date)}
      </time>
    </div>
  );

  const className =
    "card-hover block rounded-lg border border-border bg-surface card-padding";

  if (isExternal) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link to={item.link} className={className}>
      {inner}
    </Link>
  );
}
