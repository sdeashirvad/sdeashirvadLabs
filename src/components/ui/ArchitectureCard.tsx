interface ArchitectureCardProps {
  pipeline: string;
  detail?: string;
}

export function ArchitectureCard({ pipeline, detail }: ArchitectureCardProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <p className="mb-3 text-xs font-medium tracking-wider text-muted uppercase">
        Architecture
      </p>
      <p className="font-mono text-sm leading-relaxed text-foreground break-words">
        {pipeline}
      </p>
      {detail && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {detail}
        </p>
      )}
    </div>
  );
}
