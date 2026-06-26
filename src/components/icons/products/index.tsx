import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SpecSentinelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        {...stroke}
        d="M16 4L26 9v8c0 5.5-4 9.5-10 11-6-1.5-10-5.5-10-11V9l10-5z"
      />
      <path {...stroke} d="M12 16h8M14 12h4M14 20h4" />
    </svg>
  );
}

export function GoForgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect {...stroke} x="6" y="8" width="8" height="6" rx="1" />
      <rect {...stroke} x="18" y="8" width="8" height="6" rx="1" />
      <rect {...stroke} x="12" y="20" width="8" height="6" rx="1" />
      <path {...stroke} d="M10 14v3h4M22 14v3h-4M16 17v3" />
    </svg>
  );
}

export function PnLGuardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path {...stroke} d="M6 24V14l10-6 10 6v10" />
      <path {...stroke} d="M12 24v-6h8v6" />
      <path {...stroke} d="M16 8v4M22 12l2 2M10 12l-2 2" />
    </svg>
  );
}

export function ChatLoomIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path {...stroke} d="M8 10h6v6H8zM18 8h6v6h-6zM12 20h8v4H12z" />
      <path {...stroke} d="M14 13h4M20 11l2 2M12 22h8" />
    </svg>
  );
}

export function SentryAIIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle {...stroke} cx="16" cy="16" r="9" />
      <path {...stroke} d="M16 16l5-3M16 16v6" />
      <circle fill="currentColor" cx="16" cy="16" r="1.5" />
    </svg>
  );
}

export function BloomIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        {...stroke}
        d="M16 24c-4-3-6-6-6-10a6 6 0 1112 0c0 4-2 7-6 10z"
      />
      <path {...stroke} d="M16 14v4M13 17h6" />
    </svg>
  );
}

export function VeeraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path {...stroke} d="M6 22c4-8 8-12 10-14 2 2 6 6 10 14" />
      <path {...stroke} d="M10 22h12M16 8v4" />
    </svg>
  );
}

export function TransactionGuardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect {...stroke} x="10" y="14" width="12" height="10" rx="2" />
      <path {...stroke} d="M13 14v-3a3 3 0 016 0v3" />
      <path {...stroke} d="M22 10l2 2-2 2M10 22l-2-2 2-2" />
    </svg>
  );
}
