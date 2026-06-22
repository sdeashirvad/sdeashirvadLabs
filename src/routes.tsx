import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { EcosystemPage } from "./pages/EcosystemPage";
import { ResearchPage } from "./pages/ResearchPage";
import { InsightsPage } from "./pages/InsightsPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:slug", element: <ProductPage /> },
      { path: "ecosystem", element: <EcosystemPage /> },
      { path: "research", element: <ResearchPage /> },
      { path: "insights", element: <InsightsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
