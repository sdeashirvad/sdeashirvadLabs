import { useParams, Link, Navigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { PageMeta } from "../components/PageMeta";
import { StatusBadge } from "../components/ui/StatusBadge";
import { NpmIcon } from "../components/ui/NpmIcon";
import { MarketplaceIcon } from "../components/ui/MarketplaceIcon";
import { FeaturePanel } from "../components/ui/FeaturePanel";
import { ArchitectureCard } from "../components/ui/ArchitectureCard";
import { MetricCard } from "../components/ui/MetricCard";
import { InsightCard } from "../components/ui/InsightCard";
import { getProductBySlug } from "../content/products";
import { getStory } from "../content/stories";
import { insights } from "../content/insights";

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const story = getStory(product.storyKey);
  const relatedInsights = insights.filter((i) =>
    i.relatedProductSlugs?.includes(product.slug),
  );

  return (
    <>
      <PageMeta
        title={product.name}
        description={`${product.tagline}. ${product.solution}`}
      />

      <article className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Link
          to="/products"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← All products
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={product.status} />
            {product.ecosystemLayer && (
              <span className="text-xs text-muted">
                Ecosystem: {product.ecosystemLayer} layer
              </span>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{product.tagline}</p>

          {product.moat && (
            <div className="mt-4 space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                {product.moat}
              </p>
              <div className="flex flex-wrap gap-3">
                {product.npm && (
                  <a
                    href={product.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#cb3837]/30 bg-[#cb3837]/10 px-4 py-2.5 text-sm font-medium text-[#ff8a8a] transition-colors hover:bg-[#cb3837]/20"
                  >
                    <NpmIcon className="h-4 w-4 shrink-0" />
                    npm package
                  </a>
                )}
                {product.marketplace && (
                  <a
                    href={product.marketplace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                  >
                    <MarketplaceIcon className="h-4 w-4 shrink-0" />
                    GitHub Marketplace
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {product.url && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-muted"
              >
                Visit live product
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {product.github && !product.privateSource && (
              <a
                href={product.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
              >
                Source
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {product.npm && (
              <a
                href={product.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#cb3837]/40 bg-[#cb3837]/10 px-5 py-2.5 text-sm font-medium text-[#ff8a8a] hover:bg-[#cb3837]/20"
              >
                <NpmIcon className="h-4 w-4" />
                npm package
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {product.marketplace && (
              <a
                href={product.marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent/20"
              >
                <MarketplaceIcon className="h-4 w-4" />
                GitHub Marketplace
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {product.privateSource && (
              <span className="inline-flex min-h-[44px] items-center rounded-lg border border-dashed border-border px-5 py-2.5 text-sm text-muted-foreground">
                Proprietary — source private
              </span>
            )}
          </div>
        </header>

        {story && (
          <blockquote className="mt-12 border-l-2 border-accent pl-6 text-lg italic leading-relaxed text-muted-foreground">
            "{story}"
          </blockquote>
        )}

        <div className="mt-12">
          <FeaturePanel problem={product.problem} solution={product.solution} />
        </div>

        <div className="mt-12">
          <ArchitectureCard
            pipeline={product.architecture}
            detail={product.architectureDetail}
          />
        </div>

        {product.metrics.length > 0 && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {product.metrics.map((metric) => (
              <MetricCard key={metric} label="Capability" description={metric} />
            ))}
          </div>
        )}

        {product.images.length > 0 && (
          <section className="mt-16" aria-labelledby="screenshots-heading">
            <h2
              id="screenshots-heading"
              className="text-sm font-medium tracking-wider text-muted uppercase"
            >
              Screenshots
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {product.images.map((src, i) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-lg border border-border bg-background"
                >
                  <img
                    src={src}
                    alt={`${product.name} screenshot ${i + 1}`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16" aria-labelledby="tech-heading">
          <h2
            id="tech-heading"
            className="text-sm font-medium tracking-wider text-muted uppercase"
          >
            Technology
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {relatedInsights.length > 0 && (
          <section className="mt-16" aria-labelledby="related-insights">
            <h2
              id="related-insights"
              className="text-lg font-semibold text-foreground"
            >
              Related insights
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {relatedInsights.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          </section>
        )}

        {product.ecosystemLayer && (
          <div className="mt-16 rounded-lg border border-dashed border-vision/30 bg-surface/50 p-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                Ecosystem context:
              </span>{" "}
              {product.name} maps to the{" "}
              <strong>{product.ecosystemLayer}</strong> layer in the upcoming
              integrated platform.{" "}
              <Link to="/ecosystem" className="text-accent hover:underline">
                See ecosystem architecture →
              </Link>
            </p>
          </div>
        )}
      </article>
    </>
  );
}
