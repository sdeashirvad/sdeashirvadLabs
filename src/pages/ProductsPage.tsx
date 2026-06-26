import { PageMeta, SITE_URL } from "../components/PageMeta";
import { JsonLd } from "../components/JsonLd";
import { ProductCard } from "../components/ui/ProductCard";
import { PageSection } from "../components/ui/PageSection";
import { getProductsByStatus, products } from "../content/products";
import type { ProductStatus } from "../content/types";

const statusSections: {
  status: ProductStatus;
  title: string;
  description: string;
}[] = [
  {
    status: "live",
    title: "Live",
    description: "Production platforms available today.",
  },
  {
    status: "in-development",
    title: "In Development",
    description: "Platform infrastructure actively being built.",
  },
  {
    status: "research",
    title: "Research",
    description: "Human-centered experiments in pre-release.",
  },
];

export function ProductsPage() {
  return (
    <>
      <PageMeta
        title="Products"
        description="SDEAshirvad Labs product catalog — live platforms, in-development infrastructure, and research experiments."
        canonical={`${SITE_URL}/products`}
      />
      <JsonLd
        data={{
          "@type": "CollectionPage",
          name: "SDEAshirvad Labs Products",
          url: `${SITE_URL}/products`,
          description: `${products.length} builds across financial systems, orchestration, GenAI, and research.`,
        }}
      />

      <PageSection
        eyebrow="Catalog"
        title="Products"
        description={`${products.length} builds across financial systems, orchestration, GenAI, and human-centered research.`}
      >
        <div className="section-gap space-y-20">
          {statusSections.map((section) => {
            const sectionProducts = getProductsByStatus(section.status);
            if (sectionProducts.length === 0) return null;

            return (
              <section
                key={section.status}
                id={`status-${section.status}`}
                aria-labelledby={`status-${section.status}-heading`}
              >
                <h2
                  id={`status-${section.status}-heading`}
                  className="text-2xl font-semibold text-foreground"
                >
                  {section.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{section.description}</p>
                <div className="mt-8 grid auto-rows-fr card-gap md:grid-cols-2 lg:grid-cols-3">
                  {sectionProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </PageSection>
    </>
  );
}
