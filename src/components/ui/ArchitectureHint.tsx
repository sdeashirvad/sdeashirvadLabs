interface ArchitectureHintProps {
  architecture: string;
  className?: string;
}

export function ArchitectureHint({
  architecture,
  className = "",
}: ArchitectureHintProps) {
  return (
    <p
      className={`text-architecture-hint truncate ${className}`.trim()}
      title={architecture}
    >
      {architecture}
    </p>
  );
}
