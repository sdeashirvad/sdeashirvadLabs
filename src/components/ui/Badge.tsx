import type { ReactNode } from "react";
import type { ProductBadge } from "../../content/types";

export type BadgeVariant =
  | "live"
  | "in-development"
  | "research"
  | "platform-vision"
  | "open-source"
  | "cli"
  | "github-action"
  | "npm"
  | "marketplace"
  | "platform"
  | "workflow"
  | "spring-boot"
  | "react"
  | "typescript"
  | "ai"
  | "mobile"
  | "offline-first"
  | "go"
  | "tech"
  | "topic"
  | "medium"
  | "labs"
  | "complete";

const variantClasses: Record<BadgeVariant, string> = {
  live: "border-live/30 bg-live/10 text-live",
  "in-development": "border-development/30 bg-development/10 text-development",
  research: "border-research/30 bg-research/10 text-research",
  "platform-vision": "border-vision/30 bg-vision/10 text-vision",
  "open-source": "border-accent/30 bg-accent/10 text-accent",
  cli: "border-accent/30 bg-accent/10 text-accent",
  "github-action": "border-accent/30 bg-accent/10 text-accent",
  npm: "border-npm/30 bg-npm/10 text-npm-muted",
  marketplace: "border-accent/30 bg-accent/10 text-accent",
  platform: "border-vision/30 bg-vision/10 text-vision",
  workflow: "border-vision/30 bg-vision/10 text-vision",
  "spring-boot": "border-border bg-surface-elevated text-muted-foreground",
  react: "border-border bg-surface-elevated text-muted-foreground",
  typescript: "border-border bg-surface-elevated text-muted-foreground",
  ai: "border-research/30 bg-research/10 text-research",
  mobile: "border-research/30 bg-research/10 text-research",
  "offline-first": "border-research/30 bg-research/10 text-research",
  go: "border-border bg-surface-elevated text-muted-foreground",
  tech: "border-border bg-surface-elevated text-muted-foreground",
  topic: "border-border bg-surface-elevated text-muted-foreground",
  medium: "border-border bg-surface-elevated text-muted-foreground",
  labs: "border-development/30 bg-development/10 text-development",
  complete: "border-live/30 bg-live/10 text-live",
};

const labelMap: Partial<Record<BadgeVariant, string>> = {
  live: "Live",
  "in-development": "In Development",
  research: "Research",
  "platform-vision": "Platform Vision",
  "open-source": "Open Source",
  cli: "CLI",
  "github-action": "GitHub Action",
  npm: "npm",
  marketplace: "Marketplace",
  platform: "Platform",
  workflow: "Workflow Engine",
  "spring-boot": "Spring Boot",
  react: "React",
  typescript: "TypeScript",
  ai: "AI",
  mobile: "Mobile",
  "offline-first": "Offline-first",
  go: "Go",
  medium: "On Medium",
  labs: "Labs — coming soon",
  complete: "Complete",
};

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  className?: string;
  icon?: ReactNode;
}

export function Badge({ variant, label, className = "", icon }: BadgeProps) {
  const text = label ?? labelMap[variant] ?? variant;

  return (
    <span
      className={`badge-hover inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {icon}
      {text}
    </span>
  );
}

export function badgeLabelForProductBadge(
  badge: ProductBadge,
): { variant: BadgeVariant; label: string } {
  const map: Record<ProductBadge, { variant: BadgeVariant; label: string }> = {
    "open-source": { variant: "open-source", label: "Open Source" },
    cli: { variant: "cli", label: "CLI" },
    "github-action": { variant: "github-action", label: "GitHub Action" },
    "spring-boot": { variant: "spring-boot", label: "Spring Boot" },
    react: { variant: "react", label: "React" },
    typescript: { variant: "typescript", label: "TypeScript" },
    ai: { variant: "ai", label: "AI" },
    mobile: { variant: "mobile", label: "Mobile" },
    platform: { variant: "platform", label: "Platform" },
    workflow: { variant: "workflow", label: "Workflow Engine" },
    "offline-first": { variant: "offline-first", label: "Offline-first" },
    go: { variant: "go", label: "Go" },
  };
  return map[badge];
}
