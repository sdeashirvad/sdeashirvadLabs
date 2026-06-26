import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import type { TimelineItem } from "../../content/types";
import { Badge } from "./Badge";

interface TimelineProps {
  items: TimelineItem[];
  stagger?: boolean;
}

function statusBadgeVariant(
  status: TimelineItem["status"],
): "complete" | "in-development" | "platform-vision" | null {
  switch (status) {
    case "complete":
      return "complete";
    case "in-progress":
      return "in-development";
    case "planned":
      return "platform-vision";
    default:
      return null;
  }
}

function statusLabel(status: TimelineItem["status"]): string | null {
  switch (status) {
    case "complete":
      return "Complete";
    case "in-progress":
      return "In Progress";
    case "planned":
      return "Planned";
    default:
      return null;
  }
}
export function Timeline({ items, stagger = false }: TimelineProps) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-8">
      {items.map((item, index) => (
        <TimelineEntry
          key={item.phase}
          item={item}
          index={index}
          total={items.length}
          stagger={stagger}
        />
      ))}
    </ol>
  );
}

function TimelineEntry({
  item,
  index,
  total,
  stagger,
}: {
  item: TimelineItem;
  index: number;
  total: number;
  stagger: boolean;
}) {
  const ref = useRevealOnScroll<HTMLLIElement>();

  return (
    <li
      ref={stagger ? ref : undefined}
      className={stagger ? "reveal relative" : "relative"}
      style={stagger ? { transitionDelay: `${index * 80}ms` } : undefined}
    >
      <span
        className="absolute -left-[2.125rem] flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-background"
        aria-hidden="true"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-medium tracking-wider text-accent uppercase">
          {item.phase}
        </p>
        {item.status && statusBadgeVariant(item.status) && (
          <Badge
            variant={statusBadgeVariant(item.status)!}
            label={statusLabel(item.status) ?? undefined}
            className="scale-90"
          />
        )}
      </div>      <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
      {index < total - 1 && (
        <span className="sr-only">
          Step {index + 1} of {total}
        </span>
      )}
    </li>
  );
}
