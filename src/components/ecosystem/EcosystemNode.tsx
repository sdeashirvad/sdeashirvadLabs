import { Link } from "react-router-dom";
import type { EcosystemLayerConfig } from "../../content/types";
import { StatusBadge } from "../ui/StatusBadge";
import { getProductBySlug } from "../../content/products";

interface EcosystemNodeProps {
  layer: EcosystemLayerConfig;
  isLast?: boolean;
}

export function EcosystemNode({ layer, isLast = false }: EcosystemNodeProps) {
  const layerProducts = layer.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full max-w-md rounded-lg border border-dashed border-vision/40 bg-surface/50 p-6 text-center">
        <StatusBadge status="platform-vision" className="mb-4" />
        <h3 className="text-lg font-semibold text-foreground">{layer.label}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{layer.description}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {layerProducts.map(
            (product) =>
              product && (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {product.name}
                </Link>
              ),
          )}
        </div>
      </div>
      {!isLast && (
        <div
          className="my-4 flex h-8 w-px bg-border md:hidden"
          aria-hidden="true"
        />
      )}
      {!isLast && (
        <div
          className="mx-4 hidden h-px flex-1 bg-border md:block"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
