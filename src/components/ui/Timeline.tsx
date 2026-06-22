import type { TimelineItem } from "../../content/types";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-8">
      {items.map((item, index) => (
        <li key={item.phase} className="relative">
          <span
            className="absolute -left-[2.125rem] flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-background"
            aria-hidden="true"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <p className="text-xs font-medium tracking-wider text-accent uppercase">
            {item.phase}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          {index < items.length - 1 && (
            <span className="sr-only">Step {index + 1} of {items.length}</span>
          )}
        </li>
      ))}
    </ol>
  );
}
