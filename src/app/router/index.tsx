import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../../modules/auth/page/AuthPage";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectPage from "../../modules/project/page/ProjectPage";
import DashboardPage from "../../modules/dashboard/page/DashboardPage";
import ProjectDetailPage from "../../modules/project/page/ProjectDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <AuthPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/project",
        element: <ProjectPage />,
      },
      {
        path: "/dashboard/project/:id",
        element: <ProjectDetailPage />,
      }
    ],
  },
]);
