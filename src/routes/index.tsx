import IndexPage from "@pages/Index/Index";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <IndexPage />,
});
