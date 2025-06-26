import { createBrowserRouter, type RouteObject } from "react-router";

import HomePage from "../pages/HomePage";
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
];

export const router = createBrowserRouter(routes);
