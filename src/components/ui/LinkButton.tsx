import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type LinkButtonVariant = "primary" | "secondary" | "npm" | "marketplace";

interface LinkButtonProps {
  to?: string;
  href?: string;
  variant?: LinkButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const variants: Record<LinkButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-muted",
  secondary:
    "border border-border text-foreground hover:border-border-hover hover:bg-surface-elevated",
  npm: "border border-npm/40 bg-npm/10 text-npm-muted hover:bg-npm/20",
  marketplace:
    "border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20",
};

export function LinkButton({
  to,
  href,
  variant = "primary",
  children,
  className = "",
  external,
}: LinkButtonProps) {
  const base = `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={base}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  return <span className={base}>{children}</span>;
}
