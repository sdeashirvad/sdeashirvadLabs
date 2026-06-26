export type ProductBadge =
  | "open-source"
  | "cli"
  | "github-action"
  | "spring-boot"
  | "react"
  | "typescript"
  | "ai"
  | "mobile"
  | "platform"
  | "workflow"
  | "offline-first"
  | "go";

export type ArchitectureDiagramKey = "specsentinel" | "goforge";

export type ProductStatus = "live" | "in-development" | "research";

export type EcosystemLayer = "business" | "platform" | "operational" | "governance";

export interface ProductRelease {
  version: string;
  date?: string;
  notesUrl?: string;
}

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
  badges?: ProductBadge[];
  release?: ProductRelease;
  documentationUrl?: string;
  roadmapUrl?: string;
  roadmap?: string[];
  changelogUrl?: string;
  relatedProductSlugs?: string[];
  architectureDiagram?: ArchitectureDiagramKey;
  ecosystemLayer?: EcosystemLayer;
  featured?: boolean;
  researchProduct?: boolean;
  license?: string;
}

export type InsightTopic =
  | "Distributed Systems"
  | "Caching"
  | "Workflow Design"
  | "AI"
  | "Platform Engineering"
  | "Backend"
  | "Reliability"
  | "API Design"
  | "Performance"
  | "Idempotency";

export interface Insight {
  slug: string;
  title: string;
  summary: string;
  url: string;
  date: string;
  dateIso?: string;
  tags: string[];
  topics: InsightTopic[];
  readingTimeMinutes: number;
  publishedOn: "medium" | "labs";
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
  status?: "complete" | "in-progress" | "planned";
}

export type ConnectionState = "implemented" | "planned";

export type ProductGroupId =
  | "governance"
  | "business"
  | "platform"
  | "operational";

export interface EcosystemProductNode {
  slug: string;
  groupId: ProductGroupId;
  groupLabel: string;
  deployment: "standalone";
  status: "live";
}

export interface ProductConnection {
  id: string;
  from: string;
  to: string;
  state: ConnectionState;
  label: string;
  description: string;
}

export interface GraphNodePosition {
  x: number;
  y: number;
  width: number;
  height: number;
  groupId: ProductGroupId;
  groupLabel: string;
}

export type ActivityType =
  | "release"
  | "marketplace"
  | "launch"
  | "article"
  | "research"
  | "development";

export interface ActivityItem {
  date: string;
  type: ActivityType;
  productSlug?: string;
  title: string;
  link: string;
}

export interface TrustStat {
  label: string;
  value: number | string;
  href?: string;
}

export interface LatestRelease {
  product: string;
  version: string;
  url: string;
  date?: string;
}

export interface TrustData {
  stats: TrustStat[];
  latestRelease?: LatestRelease;
  license?: string;
}
