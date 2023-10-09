import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Blogs from "../pages/Blogs";
import ServiceDetails from "../pages/ServiceDetails";
import ErrorPage from "../pages/ErrorPage";
import BlogDetails from "../pages/BlogDetails";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Cart";

const router =createBrowserRouter( [
    {
        path:"/",
        element: <MainRoute></MainRoute>,        
        errorElement :<ErrorPage />,
        children:[
            {
                path: "/",
                element: <Home />,
                loader: ()=> fetch("/services.json"),
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact /></PrivateRoute> 
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/cart",
                element: <PrivateRoute> <Cart /> </PrivateRoute>,
                loader: ()=> fetch("/services.json"),
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/blogs",
                element: <Blogs />,
                // loader: ()=> fetch("/blogs.json")
            },
            {
                path: "/services/:id",
                element: <PrivateRoute> <ServiceDetails /></PrivateRoute>,
                loader: ()=> fetch("/services.json")
            },
            {
                path: "/blog/:id",
                element: <PrivateRoute><BlogDetails /></PrivateRoute> ,
                loader: ()=> fetch("/blogs.json")
            },
        ]
    }
])

export default router;