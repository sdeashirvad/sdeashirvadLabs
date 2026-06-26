import { Link } from "react-router-dom";
import { getProductBySlug } from "../../content/products";
import { StatusBadge } from "./StatusBadge";
import { ArchitectureHint } from "./ArchitectureHint";
import { ProductIcon } from "../icons/ProductIcon";

interface RelatedProductsProps {
  slugs: string[];
  currentSlug: string;
}

export function RelatedProducts({ slugs, currentSlug }: RelatedProductsProps) {
  const related = slugs
    .filter((s) => s !== currentSlug)
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {related.map((product) =>
        product ? (
          <Link
            key={product.slug}
            to={`/products/${product.slug}`}
            className="group card-hover flex flex-col rounded-lg border border-border bg-surface card-padding"
          >
            <div className="mb-3 flex items-start gap-3">
              <ProductIcon slug={product.slug} size="sm" />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground transition-colors group-hover:text-accent">
                    {product.name}
                  </h3>
                  <StatusBadge status={product.status} className="shrink-0 scale-90" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                  {product.tagline}
                </p>
              </div>
            </div>
            <ArchitectureHint architecture={product.architecture} />
          </Link>
        ) : null,
      )}
    </div>
  );
}
