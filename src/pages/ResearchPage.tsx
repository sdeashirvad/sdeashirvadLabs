import { PageMeta } from "../components/PageMeta";
import { SectionHeader } from "../components/ui/SectionHeader";
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
      />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Experiments"
          title="Research"
          description="Products outside the enterprise stack — built with the same engineering rigor, aimed at quieter, more personal problems."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {research.map((product) => (
            <div key={product.slug} className="space-y-4">
              <ResearchCard product={product} />
              <p className="px-1 text-sm italic leading-relaxed text-muted-foreground">
                "{getStory(product.storyKey)}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
