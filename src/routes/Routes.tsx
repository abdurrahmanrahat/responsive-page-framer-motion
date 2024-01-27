import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About/About";
import AddService from "@/pages/Admin/AddService";
import Dashboard from "@/pages/Admin/Dashboard";
import ServicesList from "@/pages/Admin/ServicesList";
import Home from "@/pages/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard"></Navigate>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "service-list",
        element: <ServicesList></ServicesList>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default router;
