import React from 'react'

const ClientCounter = () => {
  return (
    <div className='bg-orange-100 py-10'>
        <div className='max-w-6xl mx-auto flex flex-col  md:flex-row md:justify-around'>
            <div className='relative pb-5'>
                <img className='w-[200px] h-[200px] mx-auto' src="https://i.ibb.co/9VZN9gb/Shape.png" alt="" />
                <h4 className='absolute bottom-32 md:20 left-52 md:left-20 text-5xl font-extrabold text-white z-20'>10+</h4>
                <h3  className='text-3xl pt-3 font-bold text-center '>Years Experiences</h3>
            </div>
            <div className='relative pb-5'>
                <img className='w-[200px] h-[200px] mx-auto' src="https://i.ibb.co/fCdg1Md/3d-element-of-holographic-chameleon-design-png.png" alt="" />
                <h4 className='absolute bottom-32 md:20 left-52 md:left-20 text-5xl font-extrabold text-white z-20'>32+</h4>
                <h3  className='text-3xl pt-3 font-bold text-center '>Total Employee</h3>
            </div>
            <div className='relative pb-5'>
                <img className='w-[200px] h-[200px] mx-auto' src="https://i.ibb.co/dbpG1TH/gradient-speech-bubbles-on-transparent-background-chat-box-or-chat-square-and-doodle-message-or-comm.png" alt="" />
                <h4 className='absolute bottom-32 md:20 left-52 md:left-20 text-5xl font-extrabold text-white z-20'>100+</h4>
                <h3 className='text-3xl pt-3 font-bold text-center '>Satisfied Clients</h3>
            </div>
            <div className='relative pb-5'>
                <img className='w-[200px] h-[200px] mx-auto ' src="https://i.ibb.co/6ng0Q0P/abstract-f3b66-shape-0f203-silhouette-ed982-free-9b1bf-vector-b8f3a-silhouettes-385a7-creazilla.png" alt="" />
                <h4 className='absolute bottom-32 md:20 left-40 md:left-20 text-5xl font-extrabold text-white z-20'>100%</h4>
                <h3 className='text-3xl pt-3 font-bold text-center '>Our Support</h3>
            </div>
        </div>
    </div>
  )
}

export default ClientCounter