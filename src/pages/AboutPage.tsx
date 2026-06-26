import { PageMeta, SITE_URL } from "../components/PageMeta";
import { JsonLd } from "../components/JsonLd";
import { PageSection } from "../components/ui/PageSection";
import { ActivityCard } from "../components/ui/ActivityCard";
import { Card } from "../components/ui/Card";
import { TextLink } from "../components/ui/TextLink";
import { principles } from "../content/principles";
import { products } from "../content/products";
import { getActivityTimeline } from "../content/activity";

export function AboutPage() {
  const liveCount = products.filter((p) => p.status === "live").length;
  const inDev = products.filter((p) => p.status === "in-development");
  const timeline = getActivityTimeline();

  return (
    <>
      <PageMeta
        title="About The Lab"
        description="SDEAshirvad Labs is an independent engineering studio building a coherent ecosystem of products and platforms."
        canonical={`${SITE_URL}/about`}
      />
      <JsonLd
        data={{
          "@type": "AboutPage",
          name: "About SDEAshirvad Labs",
          url: `${SITE_URL}/about`,
          mainEntity: { "@id": `${SITE_URL}/#organization` },
        }}
      />

      <PageSection
        eyebrow="Studio"
        title="About the lab"
        description="SDEAshirvad Labs is not a portfolio. It is an engineering studio — products, platforms, and the architecture that connects them."
      />

      <PageSection id="mission" band="band" headerless>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Mission</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We build production systems across financial investigation, workflow
            orchestration, multi-channel GenAI, and operational intelligence.
            Each product ships independently. The architecture assumes they will
            integrate.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The lab exists to answer one question: what does a coherent
            engineering platform look like when one builder owns the full stack?
          </p>
        </div>
      </PageSection>

      <PageSection id="philosophy">
        <h2 className="text-2xl font-semibold text-foreground">
          Engineering philosophy
        </h2>
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

      <PageSection id="focus" band="elevated">
        <h2 className="text-2xl font-semibold text-foreground">Current focus</h2>
        <div className="section-gap max-w-3xl space-y-4 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            <strong className="text-foreground">{liveCount} products</strong> are
            live in production. Platform wiring through GoForge and Transaction
            Guard is actively in development.
          </p>
          {inDev.length > 0 && (
            <TextLink to="/products#status-in-development">
              View in-development products →
            </TextLink>
          )}
        </div>
      </PageSection>

      <PageSection id="founder" band="band">
        <Card className="max-w-3xl !p-8">
          <h2 className="text-lg font-semibold text-foreground">Founder</h2>
          <p className="mt-3 text-muted-foreground">
            SDEAshirvad Labs was founded by{" "}
            <a
              href="https://ashirvad.work/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Ashirvad Kumar Pandey
            </a>
            . Employment history and resume live on the personal site.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://ashirvad.work/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              Personal site →
            </a>
            <TextLink to="/ecosystem#current-ecosystem">
              Platform vision →
            </TextLink>
          </div>
        </Card>
      </PageSection>

      <PageSection id="timeline">
        <h2 className="text-2xl font-semibold text-foreground">Studio timeline</h2>
        <p className="mt-2 text-muted-foreground">
          Recent milestones from the lab.
        </p>
        <ol className="section-gap mt-8 space-y-4" aria-label="Studio activity timeline">
          {timeline.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <ActivityCard item={item} />
            </li>
          ))}
        </ol>
      </PageSection>
    </>
  );
}
