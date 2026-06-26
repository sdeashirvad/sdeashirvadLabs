import { forwardRef, type ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

type BandVariant = "none" | "band" | "elevated";

interface PageSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  band?: BandVariant;
  className?: string;
  children?: ReactNode;
  headerless?: boolean;
}

const bandClasses: Record<BandVariant, string> = {
  none: "",
  band: "section-band",
  elevated: "section-band-elevated",
};

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  function PageSection(
    {
      id,
      eyebrow,
      title,
      description,
      band = "none",
      className = "",
      children,
      headerless = false,
    },
    ref,
  ) {
    const hasHeader = eyebrow || title || description;

    return (
      <section
        ref={ref}
        id={id}
        className={`section-y ${bandClasses[band]} ${className}`.trim()}
        aria-labelledby={
          hasHeader && !headerless && id ? `${id}-heading` : undefined
        }
      >
        <div className="mx-auto max-w-6xl px-6">
          {hasHeader && !headerless && (
            <SectionHeader
              eyebrow={eyebrow}
              title={title ?? ""}
              description={description}
              headingId={id ? `${id}-heading` : undefined}
            />
          )}
          {children}
        </div>
      </section>
    );
  },
);
