import { routes } from "@/routing/routes.config";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
  },
});
export const AppRouter = () => {
  return (
    <Suspense fallback={<>Cargando...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
