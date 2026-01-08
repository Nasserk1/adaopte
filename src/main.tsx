import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NotFound from "./pages/NotFound";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound />}
      ],
  },
]);


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />,
       <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);