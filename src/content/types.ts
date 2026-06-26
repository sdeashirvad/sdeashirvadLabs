export type ProductStatus = "live" | "in-development" | "research";

export type EcosystemLayer = "business" | "platform" | "operational";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  status: ProductStatus;
  url?: string;
  github?: string;
  npm?: string;
  marketplace?: string;
  moat?: string;
  privateSource?: boolean;
  storyKey: string;
  problem: string;
  solution: string;
  architecture: string;
  architectureDetail: string;
  technologies: string[];
  images: string[];
  metrics: string[];
  ecosystemLayer?: EcosystemLayer;
  featured?: boolean;
  researchProduct?: boolean;
}

export interface Insight {
  slug: string;
  title: string;
  summary: string;
  url: string;
  date: string;
  tags: string[];
  relatedProductSlugs?: string[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface EcosystemLayerConfig {
  id: EcosystemLayer;
  label: string;
  description: string;
  productSlugs: string[];
  status: "live" | "platform-vision";
}

export interface TimelineItem {
  phase: string;
  title: string;
  description: string;
}
