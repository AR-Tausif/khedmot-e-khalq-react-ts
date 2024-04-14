import DashboardLayout from "@/layout/DashboardLayout";
import MainLayout from "@/layout/MainLayout";
import CreateDonor from "@/pages/dashboard/create-donor/CreateDonor";
import Donors from "@/pages/dashboard/donors/Donors";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "create-donor",
        element: <CreateDonor />,
      },
      {
        path: "donors",
        element: <Donors />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
