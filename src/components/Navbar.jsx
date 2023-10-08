import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {

    const {user,logout} = useContext(AuthContext)

    const handleLogout = (e) =>{
        e.preventDefault()
        logout()
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Home</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Contact</NavLink></li>
        <li><NavLink to="/blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Blogs</NavLink></li>
        {/* <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Services</NavLink></li> */}
    </>
    return (
        <div className="bg-white py-2 shadow-md">
        <div className="max-w-6xl mx-auto  ">
            <div className="flex justify-between items-center ">
                {/* logo */}
                <div>
                  <Link to="/"><img className="w-[100px]" src="/logo.png" alt="" /></Link>  
                </div>

                {/* li */}
                <div>
                    <ul className=" hidden font-semibold md:flex gap-6 ">
                        {links}
                    </ul>
                </div>

                {/* user icon */}
                <div className="relative">
                    {
                        user ? (
                            <div className="flex">
                                {/* <button onClick={handleLogout} >Logout</button> */}
                                <img className="ml-2 w-8" src="/pngegg.png" alt="user" /> 
                            </div>
                        ) : (

                            <Link to="/login"> <button className="border-2 py-1 px-5 border-green-800 rounded-xl bg-green-100 text-green-700 hover:bg-black hover:text-white transition">Login</button></Link>
                        )
                    }

                    <ul className="flex absolute bg-slate-400 py-4 px-3 right-3 md:hidden flex-col gap-6 ">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar