import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Blogs from "../pages/Blogs";

const router =createBrowserRouter( [
    {
        path:"/",
        element: <MainRoute></MainRoute>,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
        ]
    }
])

export default router;