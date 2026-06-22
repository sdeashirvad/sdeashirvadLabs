import { PageMeta } from "../components/PageMeta";
import { ProductCard } from "../components/ui/ProductCard";
import { SectionHeader } from "../components/ui/SectionHeader";
import {
  getProductsByStatus,
  products,
} from "../content/products";
import type { ProductStatus } from "../content/types";

const statusSections: { status: ProductStatus; title: string; description: string }[] = [
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
      />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Catalog"
          title="Products"
          description={`${products.length} builds across financial systems, orchestration, GenAI, and human-centered research.`}
        />

        <div className="mt-16 space-y-16">
          {statusSections.map((section) => {
            const sectionProducts = getProductsByStatus(section.status);
            if (sectionProducts.length === 0) return null;

            return (
              <section key={section.status} aria-labelledby={`status-${section.status}`}>
                <h2
                  id={`status-${section.status}`}
                  className="text-2xl font-semibold text-foreground"
                >
                  {section.title}
                </h2>
                <p className="mt-2 text-muted-foreground">{section.description}</p>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {sectionProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
