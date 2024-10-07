import { createFileRoute } from "@tanstack/react-router";
import ProductPage from "@pages/Product/ProductPage";

export const Route = createFileRoute("/product/$productId")({
  component: () => <ProductPage />,
});
