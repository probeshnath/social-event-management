import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <div className='bg-slate-300 col-span-2 text-center py-10 flex-1 '>
        <h2 className='pb-5 font-bold text-3xl'>Login</h2>
        <form className='flex flex-col w-2/3 mx-auto gap-3'>
          <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="email" placeholder='Enter your Email' name="email" id="" />
          <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="password" placeholder='Enter your Password' name="password" id="" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button type="submit" className='bg-blue-500 py-2 text-white'>Submit</button>
        </form>
      </div>
      {/* sidebar */}
      <div className="bg-slate-100 col-span-1 text-center py-5 px-4">
        <h2 className='font-bold text-3xl'>Connect With Us</h2>
        <div className="mx-auto flex flex-col gap-3 pt-5 text-center w-1/2">
            <button className='border flex items-center py-3 px-5 hover:bg-red-300 rounded-md gap-3'> <FaGoogle /> Google</button>
            <button className='border flex items-center py-3 px-5 hover:bg-red-300 rounded-md gap-3'> <FaFacebook /> Facebook</button>
            <button className='border flex items-center py-3 px-5 hover:bg-red-300 rounded-md gap-3'> <FaGithub /> Github</button>
        </div>
      </div>
    </div>
  )
}

export default Contact