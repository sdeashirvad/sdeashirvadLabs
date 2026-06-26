import { useParams, Link, Navigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { PageMeta, SITE_URL } from "../components/PageMeta";
import { JsonLd } from "../components/JsonLd";
import { StatusBadge } from "../components/ui/StatusBadge";
import { NpmIcon } from "../components/ui/NpmIcon";
import { MarketplaceIcon } from "../components/ui/MarketplaceIcon";
import { FeaturePanel } from "../components/ui/FeaturePanel";
import { ArchitectureCard } from "../components/ui/ArchitectureCard";
import { ArchitectureDiagram } from "../components/ui/ArchitectureDiagram";
import { MetricCard } from "../components/ui/MetricCard";
import { InsightCard } from "../components/ui/InsightCard";
import { ReleaseItem } from "../components/ui/ReleaseItem";
import { RelatedProducts } from "../components/ui/RelatedProducts";
import { Badge } from "../components/ui/Badge";
import { LinkButton } from "../components/ui/LinkButton";
import { ScreenshotGallery } from "../components/ui/ScreenshotGallery";
import { Card } from "../components/ui/Card";
import { ProductIcon } from "../components/icons/ProductIcon";
import { getProductBySlug } from "../content/products";
import { getStory } from "../content/stories";
import { insights } from "../content/insights";

function SectionLabel({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="text-sm font-medium tracking-wider text-muted uppercase"
    >
      {children}
    </h2>
  );
}

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
  const ogImage = product.images[0]
    ? `${SITE_URL}${product.images[0]}`
    : undefined;

  return (
    <>
      <PageMeta
        title={product.name}
        description={`${product.tagline}. ${product.solution}`}
        canonical={`${SITE_URL}/products/${product.slug}`}
        ogImage={ogImage}
        ogType="website"
      />
      <JsonLd
        data={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Products",
                item: `${SITE_URL}/products`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: product.name,
                item: `${SITE_URL}/products/${product.slug}`,
              },
            ],
          },
          {
            "@type": "SoftwareApplication",
            name: product.name,
            description: product.solution,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web",
            url: product.url ?? `${SITE_URL}/products/${product.slug}`,
            offers: product.url
              ? { "@type": "Offer", price: "0", priceCurrency: "USD" }
              : undefined,
          },
        ]}
      />

      <article className="mx-auto max-w-6xl px-6 section-y">
        <Link
          to="/products"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← All products
        </Link>

        <header className="content-gap mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={product.status} />
            {product.ecosystemLayer && (
              <span className="text-xs text-muted">
                Ecosystem: {product.ecosystemLayer} layer
              </span>
            )}
            {product.license && (
              <Badge variant="open-source" label={product.license} />
            )}
          </div>
          <div className="mt-4 flex items-start gap-4">
            <ProductIcon slug={product.slug} size="md" className="mt-1" />
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">{product.tagline}</p>
            </div>
          </div>

          {product.moat && (
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              {product.moat}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {product.url && (
              <LinkButton href={product.url} external>
                Visit live product
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
            )}
            {product.github && !product.privateSource && (
              <LinkButton href={product.github} variant="secondary" external>
                Repository
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
            )}
            {product.documentationUrl && (
              <LinkButton
                href={product.documentationUrl}
                variant="secondary"
                external
              >
                Documentation
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
            )}
            {product.npm && (
              <LinkButton href={product.npm} variant="npm" external>
                <NpmIcon className="h-4 w-4" />
                npm
              </LinkButton>
            )}
            {product.marketplace && (
              <LinkButton href={product.marketplace} variant="marketplace" external>
                <MarketplaceIcon className="h-4 w-4" />
                Marketplace
              </LinkButton>
            )}
            {product.privateSource && (
              <span className="inline-flex min-h-[44px] items-center rounded-lg border border-dashed border-border px-5 py-2.5 text-sm text-muted-foreground">
                Proprietary — source private
              </span>
            )}
          </div>
        </header>

        {story && (
          <blockquote className="page-block-gap border-l-2 border-accent pl-6 text-lg italic leading-relaxed text-muted-foreground">
            &ldquo;{story}&rdquo;
          </blockquote>
        )}

        <section className="page-block-gap" aria-labelledby="problem-solution">
          <SectionLabel id="problem-solution">Problem &amp; solution</SectionLabel>
          <div className="mt-6">
            <FeaturePanel problem={product.problem} solution={product.solution} />
          </div>
        </section>

        <section className="page-block-gap" aria-labelledby="architecture">
          <SectionLabel id="architecture">Architecture</SectionLabel>
          <div className="mt-6 space-y-6">
            {product.architectureDiagram ? (
              <ArchitectureDiagram diagramKey={product.architectureDiagram} />
            ) : (
              <ArchitectureCard
                pipeline={product.architecture}
                detail={product.architectureDetail}
              />
            )}
          </div>
        </section>

        {product.metrics.length > 0 && (
          <section className="page-block-gap" aria-labelledby="capabilities">
            <SectionLabel id="capabilities">Key capabilities</SectionLabel>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.metrics.map((metric) => (
                <MetricCard key={metric} label="Capability" description={metric} />
              ))}
            </div>
          </section>
        )}

        {product.images.length > 0 && (
          <section className="page-block-gap" aria-labelledby="screenshots-heading">
            <SectionLabel id="screenshots-heading">Screenshots</SectionLabel>
            <ScreenshotGallery images={product.images} productName={product.name} />
          </section>
        )}

        <section className="page-block-gap" aria-labelledby="tech-heading">
          <SectionLabel id="tech-heading">Technology</SectionLabel>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.technologies.map((tech) => (
              <Badge key={tech} variant="tech" label={tech} />
            ))}
          </div>
        </section>

        {product.release && (
          <section className="page-block-gap" aria-labelledby="release-heading">
            <SectionLabel id="release-heading">Release information</SectionLabel>
            <div className="mt-6 max-w-lg">
              <ReleaseItem
                product={product.name}
                version={product.release.version}
                url={product.release.notesUrl ?? product.url ?? "#"}
                date={product.release.date}
              />
            </div>
          </section>
        )}

        {(product.roadmap?.length || product.roadmapUrl) && (
          <section className="page-block-gap" aria-labelledby="roadmap-heading">
            <SectionLabel id="roadmap-heading">Roadmap</SectionLabel>
            {product.roadmapUrl ? (
              <a
                href={product.roadmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-accent hover:underline"
              >
                View public roadmap →
              </a>
            ) : (
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                {product.roadmap?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        )}

        <section className="page-block-gap" aria-labelledby="changelog-heading">
          <SectionLabel id="changelog-heading">Changelog</SectionLabel>
          {product.changelogUrl ? (
            <a
              href={product.changelogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-accent hover:underline"
            >
              View release history →
            </a>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">
              Public changelog coming soon.
            </p>
          )}
        </section>

        {product.relatedProductSlugs && product.relatedProductSlugs.length > 0 && (
          <section className="page-block-gap" aria-labelledby="related-products">
            <h2 id="related-products" className="text-lg font-semibold text-foreground">
              Related products
            </h2>
            <div className="mt-6">
              <RelatedProducts
                slugs={product.relatedProductSlugs}
                currentSlug={product.slug}
              />
            </div>
          </section>
        )}

        {relatedInsights.length > 0 && (
          <section className="page-block-gap" aria-labelledby="related-insights">
            <h2 id="related-insights" className="text-lg font-semibold text-foreground">
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
          <Card variant="dashed" className="page-block-gap">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Ecosystem context:</span>{" "}
              {product.name} maps to the <strong>{product.ecosystemLayer}</strong>{" "}
              layer in the upcoming integrated platform.{" "}
              <Link
                to={`/ecosystem#layer-${product.ecosystemLayer}`}
                className="link-underline text-accent"
              >
                See ecosystem architecture →
              </Link>
            </p>
          </Card>
        )}
      </article>
    </>
  );
}
