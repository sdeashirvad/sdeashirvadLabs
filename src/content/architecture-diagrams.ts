import type { ArchitectureDiagramKey } from "./types";

export interface ArchitectureDiagramConfig {
  key: ArchitectureDiagramKey;
  title: string;
  nodes: string[];
}

export const architectureDiagrams: Record<
  ArchitectureDiagramKey,
  ArchitectureDiagramConfig
> = {
  specsentinel: {
    key: "specsentinel",
    title: "SpecSentinel pipeline",
    nodes: [
      "OpenAPI",
      "Parser",
      "Diff Engine",
      "Risk Engine",
      "Governance",
      "Report",
      "CLI",
      "Studio",
    ],
  },
  goforge: {
    key: "goforge",
    title: "GoForge orchestration flow",
    nodes: [
      "Workflow",
      "Queue",
      "Worker Pool",
      "Retry",
      "Events",
      "Observability",
    ],
  },
};

export function getArchitectureDiagram(
  key: ArchitectureDiagramKey,
): ArchitectureDiagramConfig {
  return architectureDiagrams[key];
}
