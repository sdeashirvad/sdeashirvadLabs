import { Link } from "react-router-dom";
import { getLiveProducts, getResearchProducts } from "../content/products";

const NPM_URL = "https://www.npmjs.com/package/specsentinel";
const MARKETPLACE_URL = "https://github.com/marketplace/actions/specsentinel";

export function Footer() {
  const liveProducts = getLiveProducts();
  const researchProducts = getResearchProducts();

  return (
    <footer className="border-t border-border bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-foreground">SDEAshirvad Labs</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              An engineering studio building connected platforms for financial
              systems, orchestration, and operational intelligence.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Products</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {liveProducts.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="hover:text-foreground">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-foreground">Research</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {researchProducts.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="hover:text-foreground">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/ecosystem#current-ecosystem" className="hover:text-foreground">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/insights#articles" className="hover:text-foreground">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/research#research-products" className="hover:text-foreground">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/about#mission" className="hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Connect</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:support@sdeashirvad.com"
                  className="hover:text-foreground"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sdeashirvad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://sdeashirvad.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aashirvad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={NPM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  npm
                </a>
              </li>
              <li>
                <a
                  href={MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  GitHub Marketplace
                </a>
              </li>
              <li>
                <a
                  href="https://ashirvad.work/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Personal site
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} SDEAshirvad Labs. Building in public,
          shipping in production.
        </p>
      </div>
    </footer>
  );
}
