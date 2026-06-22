interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`space-y-3 ${className}`}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-wider text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </header>
  );
}
