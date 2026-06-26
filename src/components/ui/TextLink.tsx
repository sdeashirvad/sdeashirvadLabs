import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface TextLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export function TextLink({ to, children, className = "" }: TextLinkProps) {
  return (
    <Link
      to={to}
      className={`link-underline inline-block text-sm font-medium text-accent ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
