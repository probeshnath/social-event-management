import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import Footer from '../components/Footer'

const Contact = () => {
  return (

    <>
      <div className='py-8'>
        <h2 className='pb-5 font-bold text-center text-4xl'>Contact With Us</h2>

        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 justify-between items-center'>
          <div className='col-span-2'>
            <img src="https://i.ibb.co/NSGVL4y/mobile-apps-to-schedule-activities-and-reminder-events-with-ai-efficiency-time-management-illustrati.jpg" alt="" />
          </div>
          <div className='col-span-3'>
            <form className='flex flex-col w-2/3 mx-auto gap-3'>
              <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="password" placeholder='Enter your Name' name="name" />
              <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="email" placeholder='Enter your Email' name="email" />
              <textarea className='py-3 outline-none rounded-md px-3 bg-slate-100' placeholder='Your Message...' name="message" cols="30" rows="10"></textarea>
              <button type="submit" className='bg-blue-500 py-2 rounded-md hover:bg-black hover:text-white text-white'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />

    </>

  )
}

export default Contact