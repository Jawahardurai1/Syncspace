
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";   
import BookWorkspace from "../Pages/BookWorkspace";
import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home/>
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
            path:"Login",
            element:<Login/>
            },
            {
                path:"Signup",
                element:<Signup/>
            }
        ]
    }
]);
export default router;