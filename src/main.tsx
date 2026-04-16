import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NotFound from "./Pages/NotFound";
import Layout from "./components/Layout";
import Jadopte from "./Pages/Jadopte";
import Benevole from "./Pages/Benevole";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "jadopte", Component: Jadopte },
      { path: "benevole", Component: Benevole },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
