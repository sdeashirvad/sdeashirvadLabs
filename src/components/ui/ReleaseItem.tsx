import { ExternalLink } from "lucide-react";

interface ReleaseItemProps {
  product: string;
  version: string;
  url: string;
  date?: string;
}

export function ReleaseItem({ product, version, url, date }: ReleaseItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover flex items-center justify-between gap-4 rounded-lg border border-border bg-surface card-padding"
    >
      <div>
        <p className="text-sm text-muted-foreground">Latest release</p>
        <p className="mt-1 font-semibold text-foreground">
          {product} {version}
        </p>
        {date && (
          <time dateTime={date} className="mt-1 block text-xs text-muted">
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        )}
      </div>
      <ExternalLink className="h-5 w-5 shrink-0 text-accent" aria-hidden />
    </a>
  );
}
