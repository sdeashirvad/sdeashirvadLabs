import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page not found"
        description="The page you are looking for does not exist."
      />
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-4xl font-semibold text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">Page not found.</p>
        <Link
          to="/"
          className="mt-8 inline-block text-accent hover:underline"
        >
          Return home
        </Link>
      </div>
    </>
  );
}
