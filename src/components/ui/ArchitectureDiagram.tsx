import { getArchitectureDiagram } from "../../content/architecture-diagrams";
import type { ArchitectureDiagramKey } from "../../content/types";

interface ArchitectureDiagramProps {
  diagramKey: ArchitectureDiagramKey;
}

export function ArchitectureDiagram({ diagramKey }: ArchitectureDiagramProps) {
  const config = getArchitectureDiagram(diagramKey);

  return (
    <div
      role="img"
      aria-label={`${config.title}: ${config.nodes.join(" to ")}`}
      className="rounded-lg border border-border bg-surface p-6 md:p-8"
    >
      <p className="mb-6 text-sm font-medium tracking-wider text-muted uppercase">
        {config.title}
      </p>
      <div className="mx-auto flex max-w-md flex-col items-center">
        {config.nodes.map((node, index) => (
          <div key={node} className="flex w-full flex-col items-center">
            <div className="w-full rounded-md border border-border bg-background px-4 py-3 text-center font-mono text-sm text-foreground">
              {node}
            </div>
            {index < config.nodes.length - 1 && (
              <span
                className="my-2 text-lg text-muted-foreground"
                aria-hidden="true"
              >
                ↓
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
