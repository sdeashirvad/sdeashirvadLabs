import { Card } from "../ui/Card";
import { TextLink } from "../ui/TextLink";
import { StatusBadge } from "../ui/StatusBadge";
import { EcosystemGraph } from "./EcosystemGraph";

export function EcosystemPreview() {
  return (
    <Card variant="elevated" className="!p-6 md:!p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-eyebrow">Product Ecosystem</p>
          <h2 className="mt-1 text-xl font-semibold text-foreground md:text-2xl">
            5 Independent Products. One Platform Vision.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Independent products today. Integrated platform tomorrow.
          </p>
        </div>
        <StatusBadge status="platform-vision" />
      </div>

      <EcosystemGraph mode="overview" compact />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          Five production-ready products ship independently today. Platform
          integrations are being added incrementally.
        </p>
        <TextLink to="/ecosystem#current-ecosystem">
          See full architecture →
        </TextLink>
      </div>
    </Card>
  );
}
