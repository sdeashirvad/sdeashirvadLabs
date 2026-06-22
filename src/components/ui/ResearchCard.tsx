import { Link } from "react-router-dom";
import type { Product } from "../../content/types";
import { StatusBadge } from "./StatusBadge";

interface ResearchCardProps {
  product: Product;
}

export function ResearchCard({ product }: ResearchCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-research/20 bg-surface transition-colors hover:border-research/40"
    >
      {product.images[0] && (
        <div className="aspect-video overflow-hidden border-b border-border bg-background">
          <img
            src={product.images[0]}
            alt={`${product.name} preview`}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
          <StatusBadge status="research" />
        </div>
        <p className="mb-4 flex-1 text-sm text-muted-foreground">
          {product.tagline}
        </p>
        <span className="text-sm font-medium text-research">
          Explore research →
        </span>
      </div>
    </Link>
  );
}
