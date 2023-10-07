import FooterLogo from '../../public/footer.png'
import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='bg-black pt-10'>
      {/* first part */}
      <div className="flex items-center">
        <p className='h-[1px] w-full bg-slate-800'></p>
        <img src={FooterLogo} className='w-40' alt="" />
        <p className='h-[1px] w-full bg-slate-800'></p>
      </div>

      {/* middle part */}
      <div className="">
        <h2 className='text-center text-3xl'>Social Events Management</h2>
        <p className='w-2/3 py-2 mx-auto'>Social events management is a dynamic and multifaceted field that revolves around planning, organizing, and executing a wide range of social gatherings, celebrations, and occasions. From weddings and birthday parties to corporate galas and charity fundraisers, social events management .</p>
      </div>
      {/* last part */}
      <div className=" flex items-center justify-between px-2 py-2 text-gray-400 ">
        <p> All rights reserved &copy; Copyright 2023</p>
        <div className='flex gap-4 text-xl '>
          <FaFacebook className='text-[#0866FF] cursor-pointer' />
          <FaGoogle className='text-[#DB4437]' />
          <FaGithub className='text-[#bd2c00]' />
          <FaInstagram className='text-[#e95950]' />
          <FaLinkedinIn className='text-[#0072b1]' />
          <FaTwitter className='text-[#1da1f2]' />
          <FaYoutube className='text-[#c4302b]' />

        </div>
      </div>
    </div>
  )
}

export default Footer