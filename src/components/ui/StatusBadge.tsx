import type { ProductStatus } from "../../content/types";
import { Badge } from "./Badge";

type StatusKey = ProductStatus | "platform-vision";

const statusVariant: Record<StatusKey, StatusKey> = {
  live: "live",
  "in-development": "in-development",
  research: "research",
  "platform-vision": "platform-vision",
};

interface StatusBadgeProps {
  status: StatusKey;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  return (
    <Badge
      variant={statusVariant[status]}
      className={`uppercase tracking-wide ${className}`}
    />
  );
}
