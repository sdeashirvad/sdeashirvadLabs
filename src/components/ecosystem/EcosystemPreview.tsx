import { Link } from "react-router-dom";
import { getLiveProducts } from "../../content/products";
import { StatusBadge } from "../ui/StatusBadge";

export function EcosystemPreview() {
  const liveProducts = getLiveProducts();

  return (
    <section className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium tracking-wider text-accent uppercase">
            Product Ecosystem
          </p>
          <h2 className="mt-1 text-xl font-semibold text-foreground md:text-2xl">
            Three layers. One platform vision.
          </h2>
        </div>
        <StatusBadge status="platform-vision" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-xs font-medium tracking-wider text-muted uppercase">
            Business Systems
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            PnLGuard · ChatLoom
          </p>
        </div>
        <div className="rounded-lg border border-border bg-background p-4 text-center md:border-accent/30">
          <p className="text-xs font-medium tracking-wider text-accent uppercase">
            Platform Layer
          </p>
          <p className="mt-2 text-sm text-foreground font-medium">GoForge</p>
        </div>
        <div className="rounded-lg border border-border bg-background p-4 text-right md:text-left">
          <p className="text-xs font-medium tracking-wider text-muted uppercase">
            Operational Intelligence
          </p>
          <p className="mt-2 text-sm text-muted-foreground">SentryAI</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">
            {liveProducts.length} products live today.
          </span>{" "}
          Integrated workflows are in development.
        </p>
        <Link
          to="/ecosystem"
          className="text-sm font-medium text-accent hover:underline"
        >
          See full architecture →
        </Link>
      </div>
    </section>
  );
}
