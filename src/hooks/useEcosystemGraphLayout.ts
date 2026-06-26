import { useMemo } from "react";
import type {
  EcosystemProductNode,
  GraphNodePosition,
  ProductGroupId,
} from "../content/types";

export const NODE_WIDTH = 168;
export const NODE_HEIGHT = 112;
export const GROUP_HEADER_HEIGHT = 28;
export const GRAPH_PADDING = 20;
export const GRAPH_CANVAS_INSET = 16;

export type GraphBreakpoint = "desktop" | "tablet" | "mobile";

const GROUP_ORDER: ProductGroupId[] = [
  "governance",
  "business",
  "platform",
  "operational",
];

function getBreakpoint(width: number): GraphBreakpoint {
  if (width >= 1024) return "desktop";
  if (width >= 768) return "tablet";
  return "mobile";
}

function nodesByGroup(
  nodes: EcosystemProductNode[],
): Map<ProductGroupId, EcosystemProductNode[]> {
  const map = new Map<ProductGroupId, EcosystemProductNode[]>();
  for (const groupId of GROUP_ORDER) {
    map.set(
      groupId,
      nodes.filter((n) => n.groupId === groupId),
    );
  }
  return map;
}

function layoutDesktop(
  nodes: EcosystemProductNode[],
  width: number,
): Record<string, GraphNodePosition> {
  const grouped = nodesByGroup(nodes);
  const activeGroups = GROUP_ORDER.filter(
    (g) => (grouped.get(g)?.length ?? 0) > 0,
  );
  const colWidth = width / activeGroups.length;
  const maxRows = Math.max(
    ...activeGroups.map((g) => grouped.get(g)?.length ?? 0),
  );
  const columnContentHeight =
    maxRows * NODE_HEIGHT + Math.max(0, maxRows - 1) * 16;
  const positions: Record<string, GraphNodePosition> = {};

  activeGroups.forEach((groupId, colIndex) => {
    const groupNodes = grouped.get(groupId) ?? [];
    const colX =
      colIndex * colWidth + (colWidth - NODE_WIDTH) / 2;
    const groupBlockHeight =
      groupNodes.length * NODE_HEIGHT +
      Math.max(0, groupNodes.length - 1) * 16;
    const yStart =
      GRAPH_PADDING +
      GROUP_HEADER_HEIGHT +
      (columnContentHeight - groupBlockHeight) / 2;

    groupNodes.forEach((node, rowIndex) => {
      positions[node.slug] = {
        x: colX,
        y: yStart + rowIndex * (NODE_HEIGHT + 16),
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        groupId,
        groupLabel: node.groupLabel,
      };
    });
  });

  return positions;
}

function layoutTablet(
  nodes: EcosystemProductNode[],
  width: number,
): Record<string, GraphNodePosition> {
  const grouped = nodesByGroup(nodes);
  const grid: ProductGroupId[][] = [
    ["governance", "business"],
    ["platform", "operational"],
  ];
  const colWidth = width / 2;
  const positions: Record<string, GraphNodePosition> = {};

  grid.forEach((row, rowIndex) => {
    let maxNodesInRow = 0;
    row.forEach((groupId) => {
      maxNodesInRow = Math.max(
        maxNodesInRow,
        grouped.get(groupId)?.length ?? 0,
      );
    });
    const rowY =
      GRAPH_PADDING +
      rowIndex *
        (GROUP_HEADER_HEIGHT +
          maxNodesInRow * (NODE_HEIGHT + 16) +
          32);

    row.forEach((groupId, colIndex) => {
      const groupNodes = grouped.get(groupId) ?? [];
      if (groupNodes.length === 0) return;
      const colX =
        colIndex * colWidth + (colWidth - NODE_WIDTH) / 2;
      groupNodes.forEach((node, nodeIndex) => {
        positions[node.slug] = {
          x: colX,
          y: rowY + GROUP_HEADER_HEIGHT + nodeIndex * (NODE_HEIGHT + 16),
          width: NODE_WIDTH,
          height: NODE_HEIGHT,
          groupId,
          groupLabel: node.groupLabel,
        };
      });
    });
  });

  return positions;
}

function layoutMobile(
  nodes: EcosystemProductNode[],
  width: number,
): Record<string, GraphNodePosition> {
  const positions: Record<string, GraphNodePosition> = {};
  const nodeWidth = Math.min(NODE_WIDTH, width - GRAPH_PADDING * 2);
  const x = (width - nodeWidth) / 2;
  let y = GRAPH_PADDING;

  for (const groupId of GROUP_ORDER) {
    const groupNodes = nodes.filter((n) => n.groupId === groupId);
    if (groupNodes.length === 0) continue;
    y += GROUP_HEADER_HEIGHT;
    for (const node of groupNodes) {
      positions[node.slug] = {
        x,
        y,
        width: nodeWidth,
        height: NODE_HEIGHT,
        groupId,
        groupLabel: node.groupLabel,
      };
      y += NODE_HEIGHT + 16;
    }
    y += 16;
  }

  return positions;
}

export function computeGraphLayout(
  nodes: EcosystemProductNode[],
  width: number,
): {
  positions: Record<string, GraphNodePosition>;
  breakpoint: GraphBreakpoint;
  graphHeight: number;
} {
  const breakpoint = getBreakpoint(width);
  let positions: Record<string, GraphNodePosition>;

  switch (breakpoint) {
    case "desktop":
      positions = layoutDesktop(nodes, width);
      break;
    case "tablet":
      positions = layoutTablet(nodes, width);
      break;
    case "mobile":
      positions = layoutMobile(nodes, width);
      break;
  }

  const nodeBottoms = Object.values(positions).map((p) => p.y + p.height);
  const maxY = nodeBottoms.length > 0 ? Math.max(...nodeBottoms) : 0;

  return {
    positions,
    breakpoint,
    graphHeight: maxY + GRAPH_PADDING,
  };
}

export function useEcosystemGraphLayout(
  nodes: EcosystemProductNode[],
  width: number,
) {
  return useMemo(
    () => computeGraphLayout(nodes, width),
    [nodes, width],
  );
}

export function getGroupHeaders(
  positions: Record<string, GraphNodePosition>,
  breakpoint: GraphBreakpoint,
): { groupId: ProductGroupId; groupLabel: string; x: number; y: number }[] {
  const seen = new Map<ProductGroupId, GraphNodePosition>();
  for (const pos of Object.values(positions)) {
    if (!seen.has(pos.groupId)) seen.set(pos.groupId, pos);
  }

  if (breakpoint === "mobile") {
    const headers: {
      groupId: ProductGroupId;
      groupLabel: string;
      x: number;
      y: number;
    }[] = [];
    let lastGroup: ProductGroupId | null = null;
    const sorted = Object.entries(positions).sort((a, b) => a[1].y - b[1].y);
    for (const [, pos] of sorted) {
      if (pos.groupId !== lastGroup) {
        headers.push({
          groupId: pos.groupId,
          groupLabel: pos.groupLabel,
          x: pos.x,
          y: pos.y - GROUP_HEADER_HEIGHT,
        });
        lastGroup = pos.groupId;
      }
    }
    return headers;
  }

  return GROUP_ORDER.filter((g) => seen.has(g)).map((groupId) => {
    const groupPositions = Object.values(positions).filter(
      (p) => p.groupId === groupId,
    );
    const minX = Math.min(...groupPositions.map((p) => p.x));
    const maxX = Math.max(...groupPositions.map((p) => p.x + p.width));
    const headerWidth = maxX - minX;
    const labelWidth = groupPositions[0]?.groupLabel.length ?? 0;
    const approxLabelWidth = labelWidth * 5.5;
    const centeredX =
      minX + Math.max(0, (headerWidth - approxLabelWidth) / 2);
    return {
      groupId,
      groupLabel: groupPositions[0]!.groupLabel,
      x: centeredX,
      y: GRAPH_PADDING,
    };
  });
}
