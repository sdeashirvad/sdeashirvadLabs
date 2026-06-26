import { Link } from "react-router-dom";
import { PageMeta, SITE_URL } from "../components/PageMeta";
import { JsonLd } from "../components/JsonLd";
import { PageSection } from "../components/ui/PageSection";
import { StatusBadge } from "../components/ui/StatusBadge";
import { Timeline } from "../components/ui/Timeline";
import { Card } from "../components/ui/Card";
import { TextLink } from "../components/ui/TextLink";
import { EcosystemGraph } from "../components/ecosystem/EcosystemGraph";
import {
  ecosystemTimeline,
  standaloneModel,
  integrationStrategy,
  productBoundaries,
  futureOrchestrationModel,
} from "../content/ecosystem";
import {
  getConnectionsByState,
  formatConnectionLabel,
} from "../content/ecosystem-graph";
import { getLiveProducts } from "../content/products";

export function EcosystemPage() {
  const liveProducts = getLiveProducts();
  const implementedConnections = getConnectionsByState("implemented");
  const plannedConnections = getConnectionsByState("planned");

  return (
    <>
      <PageMeta
        title="Ecosystem"
        description="SDEAshirvad Labs platform architecture — five independent products today with incremental platform integrations on the roadmap."
        canonical={`${SITE_URL}/ecosystem`}
      />
      <JsonLd
        data={{
          "@type": "CollectionPage",
          name: "SDEAshirvad Labs Ecosystem",
          url: `${SITE_URL}/ecosystem`,
        }}
      />

      <PageSection
        eyebrow="Architecture"
        title="5 Independent Products. One Platform Vision."
        description="Every product is independently deployable today. Integrations are added incrementally — some live now, others intentionally planned."
      />

      <PageSection id="live-today" band="band" headerless>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold text-foreground">Live today</h2>
          <StatusBadge status="live" />
        </div>
        <p className="mt-3 text-muted-foreground">
          {standaloneModel.description}
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          {standaloneModel.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <p className="section-gap text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            {liveProducts.length} production platforms
          </span>{" "}
          — each with its own deployment.
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {liveProducts.map((product) => (
            <li key={product.slug}>
              <Link
                to={`/products/${product.slug}`}
                className="text-accent hover:underline"
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="content-gap flex flex-wrap gap-4">
          <TextLink to="/products#status-live">Browse full catalog →</TextLink>
          <Link
            to="/products#status-in-development"
            className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            In-development infrastructure →
          </Link>
        </div>
      </PageSection>

      <PageSection
        id="current-ecosystem"
        band="elevated"
        headerless
      >
        <div id="upcoming-ecosystem" className="sr-only" aria-hidden="true" />
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold text-foreground">
            Current ecosystem
          </h2>
          <StatusBadge status="live" />
        </div>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Integrations that exist in production today — each product remains
          independently deployable.
        </p>

        <div className="section-gap">
          <EcosystemGraph mode="current" />
        </div>

        <ul className="content-gap list-inside list-disc space-y-1 text-sm text-muted-foreground">
          {implementedConnections.map((conn) => (
            <li key={conn.id}>{formatConnectionLabel(conn)}</li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="platform-roadmap" band="band" headerless>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold text-foreground">
            Platform roadmap
          </h2>
          <StatusBadge status="platform-vision" />
        </div>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Products intentionally ship independently today. Platform integrations
          are introduced gradually to preserve modularity and reliability.
        </p>

        <div className="section-gap">
          <Card variant="dashed" className="!p-6 md:!p-8">
            <EcosystemGraph mode="roadmap" />
          </Card>
        </div>

        <ul className="content-gap list-inside list-disc space-y-1 text-sm text-muted-foreground">
          {plannedConnections.map((conn) => (
            <li key={conn.id}>{formatConnectionLabel(conn)}</li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="integration">
        <h2 className="text-2xl font-semibold text-foreground">
          {integrationStrategy.title}
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          {integrationStrategy.description}
        </p>
        <ul className="section-gap list-inside list-disc space-y-2 text-sm text-muted-foreground">
          {integrationStrategy.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="boundaries" band="band">
        <h2 className="text-2xl font-semibold text-foreground">
          {productBoundaries.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{productBoundaries.description}</p>
        <div className="section-gap grid gap-4 sm:grid-cols-2">
          {productBoundaries.layers.map((row) => (
            <Card key={row.layer}>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {row.layer}
              </p>
              <p className="mt-2 font-semibold text-foreground">{row.owner}</p>
              <p className="mt-1 text-sm text-muted-foreground">{row.scope}</p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection id="future-model" band="elevated">
        <h2 className="text-2xl font-semibold text-foreground">
          {futureOrchestrationModel.title}
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          {futureOrchestrationModel.description}
        </p>
        <p className="mt-6 font-mono text-sm text-accent">
          {futureOrchestrationModel.flow}
        </p>
      </PageSection>

      <PageSection id="roadmap">
        <h2 className="text-2xl font-semibold text-foreground">Roadmap</h2>
        <div className="section-gap max-w-2xl">
          <Timeline items={ecosystemTimeline} stagger />
        </div>
        <div className="content-gap text-center">
          <TextLink to="/products#status-live">Browse all products →</TextLink>
        </div>
      </PageSection>
    </>
  );
}
