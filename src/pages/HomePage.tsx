import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";
import { EcosystemPreview } from "../components/ecosystem/EcosystemPreview";
import { ProductCard } from "../components/ui/ProductCard";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ResearchCard } from "../components/ui/ResearchCard";
import { InsightCard } from "../components/ui/InsightCard";
import { getLiveProducts, getResearchProducts } from "../content/products";
import { principles } from "../content/principles";
import { insights } from "../content/insights";

export function HomePage() {
  const liveProducts = getLiveProducts();
  const research = getResearchProducts();

  return (
    <>
      <PageMeta
        title="SDEAshirvad Labs"
        description="An engineering studio building connected platforms for financial systems, orchestration, and operational intelligence."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm font-medium tracking-wider text-accent uppercase">
            Engineering Studio
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            SDEAshirvad Labs
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            A coherent ecosystem of products and platforms — financial
            investigation, workflow orchestration, GenAI interfaces, and
            operational intelligence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/ecosystem"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-muted"
            >
              Explore the ecosystem
            </Link>
            <Link
              to="/products"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              View products
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <EcosystemPreview />
      </section>

      <section className="border-t border-border bg-surface/30 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Featured"
            title="Products in production"
            description="Live platforms built with production-grade architecture — each stands alone today, designed to connect tomorrow."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <Link
            to="/products"
            className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
          >
            View all products →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Principles"
          title="How we build"
          description="Engineering decisions that shape every product in the ecosystem."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Research"
            title="Human-centered experiments"
            description="Products exploring privacy, offline-first design, and adaptive intelligence."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {research.map((product) => (
              <ResearchCard key={product.slug} product={product} />
            ))}
          </div>
          <Link
            to="/research"
            className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
          >
            View research lane →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Insights"
          title="How we think"
          description="Architecture notes from production systems — not a personal blog."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.slice(0, 2).map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
        <Link
          to="/insights"
          className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
        >
          All insights →
        </Link>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-lg font-medium text-foreground">
            Building in public, shipping in production.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Founded by{" "}
            <a
              href="https://ashirvad.work/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Ashirvad Kumar Pandey
            </a>{" "}
            — career and resume on the personal site.
          </p>
        </div>
      </section>
    </>
  );
}
