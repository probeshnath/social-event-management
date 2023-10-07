import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Blogs from "../pages/Blogs";
import ServiceDetails from "../pages/ServiceDetails";

const router =createBrowserRouter( [
    {
        path:"/",
        element: <MainRoute></MainRoute>,
        children:[
            {
                path: "/",
                element: <Home />,
                loader: ()=> fetch("/services.json")
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
            {
                path: "/services/:id",
                element: <ServiceDetails />,
                loader: ()=> fetch("/services.json")
            },
        ]
    }
])

export default router;