interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  headingId?: string;
  size?: "section" | "page";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  headingId,
  size = "section",
}: SectionHeaderProps) {
  const titleClasses =
    size === "page"
      ? "text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
      : "text-3xl font-semibold tracking-tight text-foreground md:text-4xl";

  return (
    <header className={`space-y-4 ${className}`}>
      {eyebrow && <p className="text-eyebrow">{eyebrow}</p>}
      <h2 id={headingId} className={titleClasses}>
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
