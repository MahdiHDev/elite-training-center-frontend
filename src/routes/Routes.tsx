import { createBrowserRouter, type RouteObject } from "react-router";
import Homepage from "../pages/Homepage";
import MainLayout from "./MainLayout";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
