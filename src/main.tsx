import Home from "./Pages/Home";
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
