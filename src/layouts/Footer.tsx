import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-semibold text-foreground">SDEAshirvad Labs</p>
            <p className="mt-2 text-sm text-muted-foreground">
              An engineering studio building connected platforms for financial
              systems, orchestration, and operational intelligence.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/products" className="hover:text-foreground">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="hover:text-foreground">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-foreground">
                  Insights
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
                  support@sdeashirvad.com
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
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} SDEAshirvad Labs. Building in public,
          shipping in production.
        </p>
      </div>
    </footer>
  );
}
