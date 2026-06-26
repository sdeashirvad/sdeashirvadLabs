interface MarketplaceIconProps {
  className?: string;
}

export function MarketplaceIcon({ className }: MarketplaceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Zm-1.5 6v8.25a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V9.75H3Zm6.75 3.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm4.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
    </svg>
  );
}
