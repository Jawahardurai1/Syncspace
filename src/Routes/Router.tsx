import {BrowserRouter,RouterProvider} from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            }
        ]
    }
]);
export default router;