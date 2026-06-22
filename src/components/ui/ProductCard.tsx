import { Link } from "react-router-dom";
import type { Product } from "../../content/types";
import { StatusBadge } from "./StatusBadge";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-elevated/50 focus-visible:outline-offset-4"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
        </div>
        <StatusBadge status={product.status} />
      </div>
      {!compact && (
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {product.solution}
        </p>
      )}
      <span className="text-sm font-medium text-accent">
        View product →
      </span>
    </Link>
  );
}
