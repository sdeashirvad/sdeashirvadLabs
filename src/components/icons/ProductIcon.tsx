import type { ComponentType, SVGProps } from "react";
import {
  SpecSentinelIcon,
  GoForgeIcon,
  PnLGuardIcon,
  ChatLoomIcon,
  SentryAIIcon,
  BloomIcon,
  VeeraIcon,
  TransactionGuardIcon,
} from "./products";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  specsentinel: SpecSentinelIcon,
  goforge: GoForgeIcon,
  pnlguard: PnLGuardIcon,
  chatloom: ChatLoomIcon,
  sentryai: SentryAIIcon,
  bloom: BloomIcon,
  veera: VeeraIcon,
  "transaction-guard": TransactionGuardIcon,
};

interface ProductIconProps {
  slug: string;
  size?: "sm" | "md";
  className?: string;
}

const containerSizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
};

export function ProductIcon({
  slug,
  size = "md",
  className = "",
}: ProductIconProps) {
  const Icon = iconMap[slug];

  if (!Icon) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-md border border-border bg-surface-elevated text-muted ${containerSizes[size]} ${className}`}
        aria-hidden="true"
      >
        <span className="text-xs font-semibold">
          {slug.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-md border border-border bg-surface-elevated text-muted-foreground ${containerSizes[size]} ${className}`}
      aria-hidden="true"
    >
      <Icon className={iconSizes[size]} />
    </div>
  );
}
