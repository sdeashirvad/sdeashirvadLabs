import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ProductCard } from "../components/ui/ProductCard";
import { StatusBadge } from "../components/ui/StatusBadge";
import { Timeline } from "../components/ui/Timeline";
import { EcosystemNode } from "../components/ecosystem/EcosystemNode";
import {
  ecosystemLayers,
  ecosystemTimeline,
  ecosystemNarrative,
} from "../content/ecosystem";
import { getLiveProducts, products } from "../content/products";

export function EcosystemPage() {
  const liveProducts = getLiveProducts();
  const inDevelopment = products.filter((p) => p.status === "in-development");

  return (
    <>
      <PageMeta
        title="Ecosystem"
        description="SDEAshirvad Labs platform architecture — live products today and the integrated ecosystem in development."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Architecture"
          title="One platform vision. Four live products today."
          description="Products operate independently today. Unified workflows across PnLGuard, GoForge, and SentryAI are actively in development — not available as a single platform yet."
        />

        <section className="mt-16" aria-labelledby="live-today">
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="live-today" className="text-2xl font-semibold text-foreground">
              Live today
            </h2>
            <StatusBadge status="live" />
          </div>
          <p className="mt-2 text-muted-foreground">
            Independent deployments — each product is production-ready on its own.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {liveProducts.map((product) => (
              <ProductCard key={product.slug} product={product} compact />
            ))}
          </div>
          {inDevelopment.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-foreground">
                Platform infrastructure
              </h3>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                {inDevelopment.map((product) => (
                  <ProductCard key={product.slug} product={product} compact />
                ))}
              </div>
            </div>
          )}
        </section>

        <section
          className="mt-20 rounded-xl border border-dashed border-vision/40 bg-surface/30 p-6 md:p-10"
          aria-labelledby="upcoming-ecosystem"
        >
          <div className="flex flex-wrap items-center gap-3">
            <h2
              id="upcoming-ecosystem"
              className="text-2xl font-semibold text-foreground"
            >
              Upcoming ecosystem
            </h2>
            <StatusBadge status="platform-vision" />
          </div>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            The integrated platform connects business systems, orchestration, and
            operational intelligence. This architecture is{" "}
            <strong className="text-foreground">in development</strong> — never
            presented as available today.
          </p>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-stretch md:justify-between">
            {ecosystemLayers.map((layer, index) => (
              <EcosystemNode
                key={layer.id}
                layer={layer}
                isLast={index === ecosystemLayers.length - 1}
              />
            ))}
          </div>

          <div className="mt-10 hidden items-center justify-center gap-2 md:flex" aria-hidden="true">
            <span className="text-muted-foreground">PnLGuard + ChatLoom</span>
            <span className="text-accent">→</span>
            <span className="text-foreground font-medium">GoForge</span>
            <span className="text-accent">→</span>
            <span className="text-muted-foreground">SentryAI</span>
          </div>
        </section>

        <section className="mt-20" aria-labelledby="connection-narrative">
          <h2 id="connection-narrative" className="text-2xl font-semibold text-foreground">
            How products connect
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs font-medium tracking-wider text-accent uppercase">
                Detect
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {ecosystemNarrative.detect}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wider text-accent uppercase">
                Orchestrate
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {ecosystemNarrative.orchestrate}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wider text-accent uppercase">
                Diagnose
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {ecosystemNarrative.diagnose}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20" aria-labelledby="roadmap">
          <h2 id="roadmap" className="text-2xl font-semibold text-foreground">
            Roadmap
          </h2>
          <div className="mt-8 max-w-2xl">
            <Timeline items={ecosystemTimeline} />
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="text-sm font-medium text-accent hover:underline"
          >
            Browse all products →
          </Link>
        </div>
      </div>
    </>
  );
}
