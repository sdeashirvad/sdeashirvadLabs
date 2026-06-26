import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ProductConnection } from "../../content/types";
import {
  getEcosystemConnections,
  getEcosystemNodes,
  getConnectedSlugs,
  formatConnectionLabel,
} from "../../content/ecosystem-graph";
import {
  useEcosystemGraphLayout,
  getGroupHeaders,
  GRAPH_CANVAS_INSET,
} from "../../hooks/useEcosystemGraphLayout";
import {
  getEdgePath,
  getNodeAnchor,
  getNodeCenter,
} from "../../utils/graphPaths";
import { EcosystemGraphNode } from "./EcosystemGraphNode";
import { EcosystemGraphEdge } from "./EcosystemGraphEdge";
import { EcosystemGraphLegend } from "./EcosystemGraphLegend";

export type EcosystemGraphMode = "overview" | "current" | "roadmap";

interface EcosystemGraphProps {
  mode: EcosystemGraphMode;
  compact?: boolean;
}

export function EcosystemGraph({ mode, compact: _compact = false }: EcosystemGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(800);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [hoveredEdge, setHoveredEdge] = useState<string | null>(null);

  const nodes = getEcosystemNodes();
  const allConnections = getEcosystemConnections();

  const connections = useMemo(() => {
    if (mode === "current") {
      return allConnections.filter((c) => c.state === "implemented");
    }
    if (mode === "roadmap") {
      return allConnections.filter((c) => c.state === "planned");
    }
    return allConnections;
  }, [mode, allConnections]);

  const { positions, breakpoint, graphHeight } = useEcosystemGraphLayout(
    nodes,
    width,
  );

  const inset = GRAPH_CANVAS_INSET;
  const canvasHeight = graphHeight + inset * 2;

  const offsetPositions = useMemo(() => {
    const offset: typeof positions = {};
    for (const [slug, pos] of Object.entries(positions)) {
      offset[slug] = {
        ...pos,
        x: pos.x + inset,
        y: pos.y + inset,
      };
    }
    return offset;
  }, [positions, inset]);

  const groupHeaders = useMemo(
    () =>
      getGroupHeaders(offsetPositions, breakpoint).map((h) => ({
        ...h,
        y: h.y + inset,
      })),
    [offsetPositions, breakpoint, inset],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    setWidth(el.clientWidth);
    return () => observer.disconnect();
  }, []);

  const highlightedSlugs = useMemo(() => {
    if (hoveredEdge) {
      const conn = connections.find((c) => c.id === hoveredEdge);
      if (conn) return new Set([conn.from, conn.to]);
    }
    if (hoveredNode) return getConnectedSlugs(hoveredNode);
    return null;
  }, [hoveredEdge, hoveredNode, connections]);

  const edgePaths = useMemo(() => {
    return connections
      .map((conn) => {
        const fromPos = offsetPositions[conn.from];
        const toPos = offsetPositions[conn.to];
        if (!fromPos || !toPos) return null;

        const toCenter = getNodeCenter(toPos);
        const fromCenter = getNodeCenter(fromPos);
        const from = getNodeAnchor(fromPos, toCenter);
        const to = getNodeAnchor(toPos, fromCenter);

        return {
          connection: conn,
          path: getEdgePath(from, to),
        };
      })
      .filter(Boolean) as { connection: ProductConnection; path: string }[];
  }, [connections, offsetPositions]);

  const sortedEdges = useMemo(() => {
    return [...edgePaths].sort((a, b) => {
      const order = (s: ProductConnection["state"]) =>
        s === "planned" ? 0 : 1;
      return order(a.connection.state) - order(b.connection.state);
    });
  }, [edgePaths]);

  const handleNodeHover = useCallback((slug: string | null) => {
    setHoveredNode(slug);
    if (slug) setHoveredEdge(null);
  }, []);

  const handleEdgeHover = useCallback((id: string | null) => {
    setHoveredEdge(id);
    if (id) setHoveredNode(null);
  }, []);

  const showMobileList = breakpoint === "mobile";

  return (
    <div className="space-y-4">
      <EcosystemGraphLegend
        showImplemented={mode !== "roadmap"}
        showPlanned={mode !== "current"}
      />

      <div
        ref={containerRef}
        className="ecosystem-graph-vision-hover relative w-full rounded-lg border border-border bg-background/50"
        style={{ height: canvasHeight }}
      >
        <svg
          className="absolute inset-0 z-0"
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${canvasHeight}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden={showMobileList}
        >
          <g className="pointer-events-auto">
            {sortedEdges.map(({ connection, path }) => {
              const related =
                highlightedSlugs &&
                (highlightedSlugs.has(connection.from) ||
                  highlightedSlugs.has(connection.to));
              const dimmed =
                highlightedSlugs !== null && !related && !hoveredEdge;
              const emphasized = hoveredEdge === connection.id;

              return (
                <EcosystemGraphEdge
                  key={connection.id}
                  connection={connection}
                  path={path}
                  dimmed={dimmed}
                  emphasized={emphasized}
                  onHover={handleEdgeHover}
                />
              );
            })}
          </g>
        </svg>

        {groupHeaders.map((header) => (
          <div
            key={header.groupId}
            id={`layer-${header.groupId}`}
            className="pointer-events-none absolute z-10 text-[10px] font-medium uppercase tracking-wider text-muted"
            style={{ left: header.x, top: header.y }}
          >
            {header.groupLabel}
          </div>
        ))}

        {nodes.map((node) => {
          const pos = offsetPositions[node.slug];
          if (!pos) return null;
          const dimmed =
            highlightedSlugs !== null && !highlightedSlugs.has(node.slug);
          const highlighted =
            hoveredNode === node.slug ||
            (highlightedSlugs?.has(node.slug) && highlightedSlugs.size > 1);

          return (
            <EcosystemGraphNode
              key={node.slug}
              slug={node.slug}
              x={pos.x}
              y={pos.y}
              width={pos.width}
              height={pos.height}
              dimmed={dimmed}
              highlighted={highlighted}
              onHover={handleNodeHover}
            />
          );
        })}
      </div>

      {(showMobileList || mode !== "overview") && (
        <ul className="space-y-2 text-sm text-muted-foreground md:hidden">
          {connections.map((conn) => (
            <li key={conn.id} className="flex items-start gap-2">
              <span
                className={`mt-2 h-0.5 w-4 shrink-0 ${
                  conn.state === "implemented"
                    ? "bg-accent"
                    : "border-t border-dashed border-muted"
                }`}
                aria-hidden="true"
              />
              <span>
                <span className="font-medium text-foreground">
                  {formatConnectionLabel(conn)}
                </span>
                <span className="ml-2 text-xs text-muted">({conn.label})</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
