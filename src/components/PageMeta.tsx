import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
}

const SITE_URL = "https://labs.sdeashirvad.com";

export function PageMeta({ title, description }: PageMetaProps) {
  const fullTitle =
    title === "SDEAshirvad Labs" ? title : `${title} · SDEAshirvad Labs`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", window.location.href, true);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
  }, [fullTitle, description]);

  return null;
}

export { SITE_URL };
