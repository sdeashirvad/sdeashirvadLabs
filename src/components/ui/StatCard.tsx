import { useEffect, useState } from "react";

interface StatCardProps {
  label: string;
  value: number | string;
  href?: string;
}

export function StatCard({ label, value, href }: StatCardProps) {
  const numericValue = typeof value === "number" ? value : null;
  const [display, setDisplay] = useState(
    numericValue !== null ? 0 : String(value),
  );

  useEffect(() => {
    if (numericValue === null) {
      setDisplay(String(value));
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setDisplay(String(numericValue));
      return;
    }

    const duration = 600;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(String(Math.round(numericValue * progress)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [numericValue, value]);

  const content = (
    <>
      <p className="text-3xl font-semibold tabular-nums text-foreground md:text-4xl">
        {display}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="card-hover rounded-lg border border-border bg-surface card-padding"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-surface card-padding">{content}</div>
  );
}
