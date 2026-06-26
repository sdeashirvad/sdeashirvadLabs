interface EcosystemGraphLegendProps {
  showImplemented?: boolean;
  showPlanned?: boolean;
}

export function EcosystemGraphLegend({
  showImplemented = true,
  showPlanned = true,
}: EcosystemGraphLegendProps) {
  return (
    <div
      className="flex flex-wrap gap-4 text-xs text-muted-foreground"
      aria-label="Connection legend"
    >
      {showImplemented && (
        <div className="flex items-center gap-2">
          <span
            className="h-0.5 w-8 rounded bg-accent ecosystem-edge-implemented-sample"
            aria-hidden="true"
          />
          <span>Implemented</span>
        </div>
      )}
      {showPlanned && (
        <div className="flex items-center gap-2">
          <span
            className="h-0 w-8 border-t-2 border-dashed border-muted"
            aria-hidden="true"
          />
          <span>Planned integration</span>
        </div>
      )}
    </div>
  );
}
