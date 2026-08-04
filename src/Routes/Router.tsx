
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";   
import BookWorkspace from "../Pages/BookWorkspace";
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
            },
            {
                path: "BookWorkspace",
                element: <BookWorkspace />
            },
            {
            path:"Home",
            element:<Home/>
            }
        ]
    }
]);
export default router;