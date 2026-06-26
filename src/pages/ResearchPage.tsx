import { PageMeta, SITE_URL } from "../components/PageMeta";
import { PageSection } from "../components/ui/PageSection";
import { ResearchCard } from "../components/ui/ResearchCard";
import { getResearchProducts } from "../content/products";
import { getStory } from "../content/stories";

export function ResearchPage() {
  const research = getResearchProducts();

  return (
    <>
      <PageMeta
        title="Research"
        description="Human-centered experiments from SDEAshirvad Labs — offline-first mobile products exploring privacy and adaptive intelligence."
        canonical={`${SITE_URL}/research`}
      />

      <PageSection
        eyebrow="Experiments"
        title="Research"
        description="Products outside the enterprise stack — built with the same engineering rigor, aimed at quieter, more personal problems."
      >
        <div
          id="research-products"
          className="section-gap grid card-gap md:grid-cols-2"
        >
          {research.map((product) => (
            <div key={product.slug} className="space-y-4">
              <ResearchCard product={product} />
              <p className="px-1 text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;{getStory(product.storyKey)}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
