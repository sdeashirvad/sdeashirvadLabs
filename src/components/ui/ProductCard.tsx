import { Link } from "react-router-dom";
import type { Product } from "../../content/types";
import { StatusBadge } from "./StatusBadge";
import { Badge, badgeLabelForProductBadge } from "./Badge";
import { ArchitectureHint } from "./ArchitectureHint";
import { ProductIcon } from "../icons/ProductIcon";
import { NpmIcon } from "./NpmIcon";
import { MarketplaceIcon } from "./MarketplaceIcon";
import { getVisibleProductBadges } from "../../utils/productBadges";

interface ProductCardProps {
  product: Product;
}

function DistributionIcons({ product }: { product: Product }) {
  if (!product.npm && !product.marketplace) return null;

  return (
    <div className="flex items-center gap-1.5">
      {product.npm && (
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-npm/30 bg-npm/10 text-npm-muted"
          title="npm"
        >
          <NpmIcon className="h-3 w-3" />
        </span>
      )}
      {product.marketplace && (
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent"
          title="GitHub Marketplace"
        >
          <MarketplaceIcon className="h-3 w-3" />
        </span>
      )}
    </div>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  const capabilityBadges = getVisibleProductBadges(product, 4);

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group card-hover flex h-full min-h-[220px] flex-col rounded-lg border border-border bg-surface card-padding focus-visible:outline-offset-4"
    >
      <div className="mb-4 flex items-start gap-3">
        <ProductIcon slug={product.slug} size="md" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
              {product.name}
            </h3>
            <StatusBadge status={product.status} className="shrink-0" />
          </div>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
            {product.tagline}
          </p>
        </div>
      </div>

      <div className="mt-auto space-y-3">
        {(capabilityBadges.length > 0 || product.npm || product.marketplace) && (
          <div className="flex flex-wrap items-center gap-1.5">
            {capabilityBadges.map((b) => {
              const { variant, label } = badgeLabelForProductBadge(b);
              return <Badge key={b} variant={variant} label={label} />;
            })}
            <DistributionIcons product={product} />
          </div>
        )}

        <ArchitectureHint architecture={product.architecture} />

        <span className="inline-block text-sm font-medium text-accent">
          View product →
        </span>
      </div>
    </Link>
  );
}
