import type { Product, ProductBadge } from "../content/types";

const BADGE_PRIORITY: ProductBadge[] = [
  "open-source",
  "cli",
  "github-action",
  "platform",
  "workflow",
  "ai",
  "spring-boot",
  "react",
  "typescript",
  "go",
  "mobile",
  "offline-first",
];

export function getVisibleProductBadges(
  product: Product,
  max = 4,
): ProductBadge[] {
  const badges = product.badges ?? [];
  const sorted = [...badges].sort(
    (a, b) => BADGE_PRIORITY.indexOf(a) - BADGE_PRIORITY.indexOf(b),
  );
  return sorted.slice(0, max);
}
