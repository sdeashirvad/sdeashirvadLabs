import { products, getResearchProducts } from "./products";
import { insights } from "./insights";
import type { TrustData } from "./types";

export function getTrustStats(): TrustData {
  const liveProducts = products.filter((p) => p.status === "live");
  const npmPackages = products.filter((p) => p.npm).length;
  const marketplaceActions = products.filter((p) => p.marketplace).length;
  const platformsLive = liveProducts.filter((p) => p.url).length;

  return {
    stats: [
      { label: "Production Products", value: liveProducts.length },
      { label: "Research Projects", value: getResearchProducts().length },
      { label: "Open-source Packages", value: npmPackages },
      { label: "GitHub Marketplace Actions", value: marketplaceActions },
      { label: "Published Articles", value: insights.length },
      { label: "Platforms Live", value: platformsLive },
    ],
    latestRelease: {
      product: "SpecSentinel",
      version: "v1.0.0",
      url: "https://github.com/marketplace/actions/specsentinel",
      date: "2026-06-01",
    },
    license: "MIT Licensed",
  };
}
