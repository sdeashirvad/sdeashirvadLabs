import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "page-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": Array.isArray(data) ? data : [data],
    });

    const existing = document.getElementById("page-jsonld");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [data]);

  return null;
}
