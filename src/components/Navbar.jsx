import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import {RxCross2} from 'react-icons/rx'

const Navbar = () => {
    const [open, setOpen]=useState(false)

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

    const showOPtion = () =>{
        setOpen(!open)
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
                                <img className="ml-2 w-9 rounded-full cursor-pointer" onClick={showOPtion} src={user?.photoURL || "/pngegg.png"} alt="user" /> 
                            </div>
                        ) : (

                            <Link to="/login"> <button className="border-2 py-1 px-5 border-green-800 rounded-xl bg-green-100 text-green-700 hover:bg-black hover:text-white transition">Login</button></Link>
                        )
                    }
                    {
                        open &&  <div className="flex w-[200px]  text-center rounded-md z-10 absolute bg-black bg-opacity-50 text-gray-400 py-4 px-3 right-3  flex-col gap-6 ">
                            <div onClick={showOPtion} className="right-3 top-3 cursor-pointer text-lg absolute"><RxCross2 className="text-white"/></div>
                            <div>
                                <img className="w-[50px] h-[50px] rounded-full mx-auto " src={user.photoURL} alt={user.displayName} />
                                <h2 className="mt-2 text-lg text-white capitalize">{user.displayName}</h2>
                                <button className="bg-orange-400 text-white mt-2 rounded-md py-1 px-4"> My Profile</button>
                            </div>
                            <hr />
                        <ul className="flex flex-col gap-3">
                        <li onClick={handleLogout} className="pb-1 -mt-3 bg-slate-800 py-1 hover:text-orange-600 mb-2"><Link to="">Logout</Link> </li>
                        <li className="pb-1 -mt-3 bg-slate-800 py-1 hover:text-orange-600"><Link to="">Cart</Link> </li>

                        </ul>
                    </div>
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