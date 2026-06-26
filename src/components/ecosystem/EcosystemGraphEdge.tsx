import type { ProductConnection } from "../../content/types";
import { getEdgeMidpoint } from "../../utils/graphPaths";

interface EcosystemGraphEdgeProps {
  connection: ProductConnection;
  path: string;
  dimmed?: boolean;
  emphasized?: boolean;
  onHover?: (id: string | null) => void;
}

export function EcosystemGraphEdge({
  connection,
  path,
  dimmed = false,
  emphasized = false,
  onHover,
}: EcosystemGraphEdgeProps) {
  const isImplemented = connection.state === "implemented";
  const midpoint = getEdgeMidpoint(path);
  const opacity = dimmed ? 0.15 : emphasized ? 1 : isImplemented ? 0.9 : 0.55;

  return (
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.(connection.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      <path
        d={path}
        fill="none"
        stroke={isImplemented ? "var(--color-accent)" : "var(--color-muted)"}
        strokeWidth={emphasized ? 2.5 : 1.5}
        strokeDasharray={isImplemented ? undefined : "6 4"}
        strokeOpacity={opacity}
        className={isImplemented ? "ecosystem-edge-implemented" : undefined}
        aria-label={`${connection.label}: ${connection.description}`}
      />
      <path
        d={path}
        fill="none"
        stroke="transparent"
        strokeWidth={12}
        pointerEvents="stroke"
        aria-hidden="true"
      />
      {emphasized && (
        <foreignObject
          x={midpoint.x - 100}
          y={midpoint.y - 28}
          width={200}
          height={56}
          className="pointer-events-none overflow-visible"
        >
          <div className="rounded-md border border-border bg-surface-elevated px-2 py-1 text-center text-[10px] leading-tight text-muted-foreground shadow-lg">
            <p className="font-medium text-foreground">{connection.label}</p>
            <p className="mt-0.5">{connection.description}</p>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
