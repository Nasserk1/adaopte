import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Jadopte from "./pages/Jadopte";
import Benevole from "./pages/Benevole";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "jadopte", element: <Jadopte /> },
      { path: "benevole", element: <Benevole /> },
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
