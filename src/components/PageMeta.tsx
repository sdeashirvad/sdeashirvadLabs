import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SITE_URL = "https://labs.sdeashirvad.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/labs.svg`;

export function PageMeta({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
}: PageMetaProps) {
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

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical ?? window.location.href, true);
    setMeta("og:type", ogType, true);
    setMeta("og:image", ogImage ?? DEFAULT_OG_IMAGE, true);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage ?? DEFAULT_OG_IMAGE);
    setLink("canonical", canonical ?? window.location.href);
  }, [fullTitle, description, canonical, ogImage, ogType]);

  return null;
}

export { SITE_URL };
