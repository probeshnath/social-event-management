import { Link, NavLink } from 'react-router-dom'
import FooterLogo from '/footer.png'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='bg-black pt-10'>
      <div className='max-w-6xl mx-auto'>
        {/* first part */}
        <div className="flex items-center">
          <p className='h-[1px] w-full bg-slate-800'></p>
          <img src={FooterLogo} className='w-40' alt="" />
          <p className='h-[1px] w-full bg-slate-800'></p>
        </div>

        {/* middle part */}
        <div className='flex justify-between px-3 items-center'>
          <div className='ml-5'>
            <ul className='flex flex-col gap-3  text-gray-500'>
              <li><Link to="/" className="" > Home</Link></li>
              <li><Link to="/contact" className="" > Contact</Link></li>
              <li><Link to="/blogs" className=""> Blogs</Link></li>
            </ul>
          </div>
          <div className="text-gray-500 pb-6">
            <h2 className='text-center text-3xl'>Social Events Management</h2>
            <p className='w-2/3 py-2 mx-auto'>Social events management is a dynamic and multifaceted field that revolves around planning, organizing, and executing a wide range of social gatherings, celebrations, and occasions. From weddings and birthday parties to corporate galas and charity fundraisers, social events management .</p>
          </div>
          <div>
            <ul className=' hidden md:flex flex-col gap-3 text-gray-500'>
              <li><Link to="/" className="" >Term & Condition</Link></li>
              <li><Link to="/" className="" >Refund Policy</Link></li>
              <li><Link to="/" className="">Technology</Link></li>
            </ul>
          </div>
        </div>
        {/*  */}

        {/* last part */}
        <div className=" flex items-center flex-col md:flex-row gap-3 justify-between px-2 pt-2 pb-5 text-gray-400 ">
          <p> All rights reserved &copy; Copyright 2023</p>
          <div className='flex gap-4 text-xl '>
            <FaFacebook className='text-[#0866FF] cursor-pointer hover:bg-black hover:text-white' />
            <FaGoogle className='text-[#DB4437] cursor-pointer hover:bg-black hover:text-white' />
            <FaGithub className='text-[#bd2c00] cursor-pointer hover:bg-black hover:text-white' />
            <FaInstagram className='text-[#e95950] cursor-pointer hover:bg-black hover:text-white' />
            <FaLinkedinIn className='text-[#0072b1] cursor-pointer hover:bg-black hover:text-white' />
            <FaTwitter className='text-[#1da1f2] cursor-pointer hover:bg-black hover:text-white' />
            <FaYoutube className='text-[#c4302b] cursor-pointer hover:bg-black hover:text-white' />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer