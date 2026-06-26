import { PageMeta, SITE_URL } from "../components/PageMeta";
import { JsonLd } from "../components/JsonLd";
import { EcosystemPreview } from "../components/ecosystem/EcosystemPreview";
import { ProductCard } from "../components/ui/ProductCard";
import { PageSection } from "../components/ui/PageSection";
import { ResearchCard } from "../components/ui/ResearchCard";
import { InsightCard } from "../components/ui/InsightCard";
import { StatCard } from "../components/ui/StatCard";
import { ActivityCard } from "../components/ui/ActivityCard";
import { ReleaseItem } from "../components/ui/ReleaseItem";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { LinkButton } from "../components/ui/LinkButton";
import { TextLink } from "../components/ui/TextLink";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { getLiveProducts, getResearchProducts } from "../content/products";
import { principles } from "../content/principles";
import { insights } from "../content/insights";
import { getTrustStats } from "../content/trust";
import { getRecentActivity } from "../content/activity";
import { TAGLINE, PLATFORM_VISION, PLATFORM_VISION_SHORT } from "../content/identity";

export function HomePage() {
  const liveProducts = getLiveProducts();
  const research = getResearchProducts();
  const trust = getTrustStats();
  const activity = getRecentActivity(6);

  const trustRef = useRevealOnScroll<HTMLElement>();
  const productsRef = useRevealOnScroll<HTMLElement>();
  const activityRef = useRevealOnScroll<HTMLElement>();

  return (
    <>
      <PageMeta
        title="SDEAshirvad Labs"
        description={`${TAGLINE} ${PLATFORM_VISION}`}
      />
      <JsonLd
        data={{
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "SDEAshirvad Labs",
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />

      <section className="mx-auto max-w-6xl px-6 section-y pb-8 md:pb-12">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-eyebrow">Engineering Studio</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            SDEAshirvad Labs
          </h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-foreground md:text-xl">
            {TAGLINE}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {PLATFORM_VISION}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A coherent ecosystem of products and platforms — financial
            investigation, workflow orchestration, GenAI interfaces, and
            operational intelligence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton to="/ecosystem#current-ecosystem">
              Explore the ecosystem
            </LinkButton>
            <LinkButton to="/products#status-live" variant="secondary">
              View products
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <EcosystemPreview />
      </section>

      <PageSection
        id="shipping"
        ref={trustRef}
        eyebrow="Trust"
        title="Shipping in public"
        description="Objective milestones from a studio that continuously ships production systems."
        band="band"
      >
        <div className="section-gap grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trust.stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              href={stat.href}
            />
          ))}
        </div>
        <div className="content-gap flex flex-wrap items-center gap-4">
          {trust.latestRelease && (
            <div className="min-w-[280px] flex-1">
              <ReleaseItem {...trust.latestRelease} />
            </div>
          )}
          {trust.license && (
            <Badge variant="open-source" label={trust.license} />
          )}
        </div>
      </PageSection>

      <PageSection
        id="products"
        ref={productsRef}
        eyebrow="Featured"
        title="Products in production"
        description="Live platforms built with production-grade architecture — each stands alone today, designed to connect tomorrow."
        band="elevated"
      >
        <div className="section-gap grid auto-rows-fr card-gap md:grid-cols-2 lg:grid-cols-3">
          {liveProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="content-gap">
          <TextLink to="/products#status-live">View all products →</TextLink>
        </div>
      </PageSection>

      <PageSection
        id="activity"
        ref={activityRef}
        eyebrow="Updates"
        title="Latest activity"
        description="Recent releases, launches, and engineering publications."
      >
        <ol className="section-gap space-y-4" aria-label="Latest studio activity">
          {activity.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <ActivityCard item={item} />
            </li>
          ))}
        </ol>
        <div className="content-gap">
          <TextLink to="/about#timeline">Full studio timeline →</TextLink>
        </div>
      </PageSection>

      <PageSection
        id="principles"
        eyebrow="Principles"
        title="How we build"
        description="Engineering decisions that shape every product in the ecosystem."
        band="band"
      >
        <div className="section-gap grid card-gap sm:grid-cols-2">
          {principles.map((principle) => (
            <Card key={principle.title} hover>
              <h3 className="font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="research"
        eyebrow="Research"
        title="Human-centered experiments"
        description="Products exploring privacy, offline-first design, and adaptive intelligence."
        band="elevated"
      >
        <div className="section-gap grid card-gap md:grid-cols-2">
          {research.map((product) => (
            <ResearchCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="content-gap">
          <TextLink to="/research#research-products">View research lane →</TextLink>
        </div>
      </PageSection>

      <PageSection
        id="insights"
        eyebrow="Insights"
        title="How we think"
        description="Architecture notes from production systems — not a personal blog."
      >
        <div className="section-gap grid card-gap md:grid-cols-2 lg:grid-cols-3">
          {insights.slice(0, 2).map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
        <div className="content-gap">
          <TextLink to="/insights#articles">All insights →</TextLink>
        </div>
      </PageSection>

      <PageSection id="cta" band="band" headerless className="!py-16">
        <div className="text-center">
          <p className="text-lg font-medium text-foreground">
            {PLATFORM_VISION_SHORT}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Founded by{" "}
            <a
              href="https://ashirvad.work/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-accent"
            >
              Ashirvad Kumar Pandey
            </a>{" "}
            — career and resume on the personal site.
          </p>
        </div>
      </PageSection>
    </>
  );
}
