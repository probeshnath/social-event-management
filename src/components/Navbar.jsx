import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/messages" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Home</NavLink></li>
        <li><NavLink to="/messages" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Contact</NavLink></li>
        <li><NavLink to="/messages" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Blogs</NavLink></li>
        <li><NavLink to="/messages" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Services</NavLink></li>
    </>
    return (
        <div className="max-w-6xl mx-auto ">
            <div className="flex justify-between items-center ">
                {/* logo */}
                <div>
                  <Link to="/"><img className="w-[100px]" src="/logo.png" alt="" /></Link>  
                </div>

                {/* li */}
                <div>
                    <ul className=" hidden md:flex gap-6 ">
                        {links}
                    </ul>
                </div>

                {/* user icon */}
                <div className="relative">
                    <button className="btn">Login</button>
                    {/* <img className="w-8" src="/pngegg.png" alt="user" /> */}
                    <ul className="flex absolute bg-slate-400 py-4 px-3 right-3 md:hidden flex-col gap-6 ">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar