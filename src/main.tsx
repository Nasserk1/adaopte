import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Jadopte from './pages/Jadopte';
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                Component: Home,
            },
             {
                path: "jadopte",
                Component: Jadopte,
            },
        ],
    },
]);



const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
           <RouterProvider router={router} />
           <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>
);