import type { ProductStatus } from "../../content/types";

const statusConfig: Record<
  ProductStatus | "platform-vision",
  { label: string; dotClass: string; borderClass: string }
> = {
  live: {
    label: "Live",
    dotClass: "bg-live",
    borderClass: "border-live/40",
  },
  "in-development": {
    label: "In Development",
    dotClass: "bg-development",
    borderClass: "border-development/40 border-dashed",
  },
  research: {
    label: "Research",
    dotClass: "bg-research",
    borderClass: "border-research/30",
  },
  "platform-vision": {
    label: "Platform Vision",
    dotClass: "bg-vision",
    borderClass: "border-vision/40 border-dashed",
  },
};

interface StatusBadgeProps {
  status: ProductStatus | "platform-vision";
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase ${config.borderClass} ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${config.dotClass}`}
        aria-hidden="true"
      />
      {config.label}
    </span>
  );
}
