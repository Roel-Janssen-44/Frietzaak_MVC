import "./App.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home.tsx";
import Miel from "./pages/miel/page.tsx";
import Navbar from "./components/Navbar.tsx";
import Login from "./pages/login/page.tsx";
import Contact from "./pages/contact/page.tsx";
import Customer from "./pages/dashboard/customer/page.tsx";
import OwnerOrders from "./pages/dashboard/owner/orders/page.tsx";
import CustomerReorder from "./pages/dashboard/customer/reorder/[id]/page.tsx";
import CustomerOrder from "./pages/dashboard/customer/order/[id]/page.tsx";
import OwnerProducts from "./pages/dashboard/owner/products/page.tsx";
import OwnerProduct from "./pages/dashboard/owner/products/[id]/page.tsx";
import OwnerCreateProduct from "./pages/dashboard/owner/products/create/page.tsx";
import Order from "./pages/order/[id]/page.tsx";
import OrderConfirmation from "./pages/order/[id]/confirmation/page.tsx";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 container mx-auto">
        <Outlet />
      </main>{" "}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/miel",
        element: <Miel />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/order/:id",
        element: <Order />,
      },
      {
        path: "/order/:id/confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/dashboard/customer",
        element: <Customer />,
      },
      {
        path: "/dashboard/customer/reorder/:id",
        element: <CustomerReorder />,
      },
      {
        path: "/dashboard/customer/order/:id",
        element: <CustomerOrder />,
      },
      {
        path: "/dashboard/owner/orders",
        element: <OwnerOrders />,
      },
      {
        path: "/dashboard/owner/products",
        element: <OwnerProducts />,
      },
      {
        path: "/dashboard/owner/products/:id",
        element: <OwnerProduct />,
      },
      {
        path: "/dashboard/owner/products/create",
        element: <OwnerCreateProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
