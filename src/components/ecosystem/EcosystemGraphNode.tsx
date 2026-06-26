import { Link } from "react-router-dom";
import { getProductBySlug } from "../../content/products";
import { ProductIcon } from "../icons/ProductIcon";
import { Badge } from "../ui/Badge";

interface EcosystemGraphNodeProps {
  slug: string;
  x: number;
  y: number;
  width: number;
  height: number;
  dimmed?: boolean;
  highlighted?: boolean;
  onHover?: (slug: string | null) => void;
}

export function EcosystemGraphNode({
  slug,
  x,
  y,
  width,
  height,
  dimmed = false,
  highlighted = false,
  onHover,
}: EcosystemGraphNodeProps) {
  const product = getProductBySlug(slug);
  if (!product) return null;

  return (
    <Link
      to={`/products/${slug}`}
      className={`absolute z-10 flex flex-col rounded-lg border bg-surface p-3 shadow-sm transition-all duration-200 focus-visible:outline-offset-2 ${
        highlighted
          ? "border-border-hover opacity-100 shadow-lg"
          : dimmed
            ? "border-border opacity-40"
            : "border-border opacity-100"
      }`}
      style={{
        left: x,
        top: y,
        width,
        minHeight: height,
      }}
      onMouseEnter={() => onHover?.(slug)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(slug)}
      onBlur={() => onHover?.(null)}
    >
      <div className="flex items-start gap-2">
        <ProductIcon slug={slug} size="sm" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">
            {product.name}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            <Badge variant="live" className="scale-90 px-1.5 py-0.5 text-[10px]" />
            <Badge
              variant="tech"
              label="Standalone"
              className="scale-90 px-1.5 py-0.5 text-[10px]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
