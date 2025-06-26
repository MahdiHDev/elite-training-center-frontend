import { createBrowserRouter, type RouteObject } from "react-router";

import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ContactPageLayout from "./ContactPageLayout";
import MainLayout from "./MainLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/contact-us",
    element: <ContactPageLayout />,
    children: [
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
