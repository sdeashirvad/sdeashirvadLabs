import type { ElementType, ReactNode } from "react";

type CardVariant = "default" | "elevated" | "dashed";

interface CardProps {
  as?: ElementType;
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  default: "border-border bg-surface",
  elevated: "border-border bg-surface-elevated",
  dashed: "border-dashed border-vision/30 bg-surface/50",
};

export function Card({
  as: Component = "div",
  variant = "default",
  hover = false,
  className = "",
  children,
}: CardProps) {
  return (
    <Component
      className={`rounded-lg border card-padding ${variantClasses[variant]} ${hover ? "card-hover" : ""} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
