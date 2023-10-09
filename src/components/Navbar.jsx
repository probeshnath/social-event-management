import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import {RxCross2} from 'react-icons/rx'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {BiGift} from 'react-icons/bi'
import {PiSignInBold} from 'react-icons/pi'
import {  toast } from 'react-toastify';
import {HiMiniBars3BottomRight} from 'react-icons/hi2'

const Navbar = () => {
    const [open, setOpen]=useState(false)
    const [phoneOPtion, setPhoneOption]= useState(false)
    const navigate = useNavigate();

    const {user,logout} = useContext(AuthContext)

    const handleLogout = (e) =>{
        e.preventDefault()
        logout()
        .then((result)=>{
             toast.success("User Logout successfully");
             setOpen(false)
             return navigate("/login")

        })
        .catch((error)=>{
            return toast.error(error.message);
        })
    }
    // for mobile
    const shownavOnPhone = () =>{
        setPhoneOption(!phoneOPtion)
    }

    const showOPtion = () =>{
        setOpen(!open)
    }

    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Home</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Contact</NavLink></li>
        <li><NavLink to="/blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Blogs</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Cart</NavLink></li>
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
                            <div className="flex justify-center px-3 items-center gap-2">

                            <Link to="/login"> <button className="border-2 py-1 px-5 border-green-800 rounded-xl bg-green-100 text-green-700 hover:bg-black flex items-center gap-2 hover:text-white transition"> <PiSignInBold  /> Login </button> </Link>
                            <HiMiniBars3BottomRight onClick={shownavOnPhone} className="text-2xl cursor-pointer md:hidden" />
                            </div>
                        )
                    }
                    {
                        open &&  <div className="flex w-[200px]  text-center rounded-md z-10 absolute bg-black bg-opacity-50 text-gray-400 py-4 px-3 right-3  flex-col gap-6 ">
                            <div onClick={showOPtion} className="right-3 top-3 cursor-pointer text-lg absolute"><RxCross2 className="text-white"/></div>
                            <div>
                                <img className="w-[50px] h-[50px] rounded-full mx-auto " src={user?.photoURL} alt={user?.displayName} />
                                <h2 className="mt-2 text-lg text-white capitalize">{user?.displayName}</h2>
                                <p className="text-sm pb-2">{user?.email}</p>
                                <button className="bg-orange-400 text-white mt-2 rounded-md py-1 px-4"> My Profile</button>
                            </div>
                            <hr />
                        <ul className="flex flex-col gap-1">
                        <li onClick={handleLogout} className="-mt-3 bg-slate-800 py-1 hover:text-orange-600 "><Link className="flex justify-center items-center gap-2" to=""><FiLogOut /> Logout</Link> </li>
                        <li className=" bg-slate-800 py-1 hover:text-orange-600"><Link className="flex justify-center items-center gap-2" to=""><AiOutlineShoppingCart /> Cart</Link> </li>
                        <li className="  bg-slate-800 py-1 hover:text-orange-600"><Link className="flex justify-center items-center gap-2" to=""><BiGift /> Ordered</Link> </li>
                        <li className="  bg-slate-800 py-1 hover:text-orange-600"><Link className="flex justify-center items-center gap-2" to="/home"><BiGift /> Home</Link> </li>
                        <li className="  bg-slate-800 py-1 hover:text-orange-600"><Link className="flex justify-center items-center gap-2" to="/contact"><BiGift /> Contact</Link> </li>
                        <li className="  bg-slate-800 py-1 hover:text-orange-600"><Link className="flex justify-center items-center gap-2" to="/blogs"><BiGift /> Blogs</Link> </li>

                        </ul>
                    </div>
                    }

                   { phoneOPtion && <ul className="flex absolute bg-slate-400 py-4 px-3 right-3 md:hidden flex-col gap-6 ">
                        { links}
                    </ul>}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar