interface MetricCardProps {
  label: string;
  value?: string;
  description?: string;
}

export function MetricCard({ label, value, description }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <p className="text-xs font-medium tracking-wider text-muted uppercase">
        {label}
      </p>
      {value && (
        <p className="mt-2 text-2xl font-semibold text-foreground">{value}</p>
      )}
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
