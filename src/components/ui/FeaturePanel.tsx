interface FeaturePanelProps {
  problem: string;
  solution: string;
}

export function FeaturePanel({ problem, solution }: FeaturePanelProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-6">
        <h3 className="mb-3 text-sm font-medium tracking-wider text-muted uppercase">
          Problem
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{problem}</p>
      </div>
      <div className="rounded-lg border border-border bg-surface p-6">
        <h3 className="mb-3 text-sm font-medium tracking-wider text-accent uppercase">
          Approach
        </h3>
        <p className="text-sm leading-relaxed text-foreground">{solution}</p>
      </div>
    </div>
  );
}
