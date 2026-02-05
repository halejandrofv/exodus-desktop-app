import { PrivateLayout } from "@/components/layouts/PrivateLayout";
import { PublicLayout } from "@/components/layouts/PublicLayout";
import { LoginPage } from "@/features/auth/pages/login/LoginPage";
import { Navigate, type RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/auth",
    element: <PublicLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <>register</>,
      },
      { path: "*", element: <Navigate to="/auth/login" replace /> },
    ],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },

      {
        path: "home",
        element: <>home view</>,
      },
      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
  {
    path: "*",
    element: <>404 not found</>,
  },
];
