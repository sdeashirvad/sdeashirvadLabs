import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";
import { SectionHeader } from "../components/ui/SectionHeader";
import { principles } from "../content/principles";
import { products } from "../content/products";

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About The Lab"
        description="SDEAshirvad Labs is an independent engineering studio building a coherent ecosystem of products and platforms."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Studio"
          title="About the lab"
          description="SDEAshirvad Labs is not a portfolio. It is an engineering studio — products, platforms, and the architecture that connects them."
        />

        <div className="mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            We build production systems across financial investigation, workflow
            orchestration, multi-channel GenAI, and operational intelligence.
            Each product ships independently. The architecture assumes they will
            integrate.
          </p>
          <p>
            The lab was founded to answer a single question: what does a coherent
            engineering platform look like when one builder owns the full stack —
            from P&L anomaly detection to job orchestration to failure diagnosis?
          </p>
          <p>
            Today,{" "}
            <strong className="text-foreground">
              {products.filter((p) => p.status === "live").length} products are
              live
            </strong>
            . The unified PnLGuard → GoForge → SentryAI platform is actively in
            development.
          </p>
        </div>

        <section className="mt-16" aria-labelledby="principles-heading">
          <h2
            id="principles-heading"
            className="text-2xl font-semibold text-foreground"
          >
            Engineering principles
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <h3 className="font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-lg border border-border bg-surface p-8">
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
            . Employment history, resume, and personal projects live on the
            personal site — not here.
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
            <Link
              to="/ecosystem"
              className="text-sm font-medium text-accent hover:underline"
            >
              Platform vision →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
