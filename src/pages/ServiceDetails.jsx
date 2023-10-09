import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FiDollarSign } from 'react-icons/fi'
import { BiCreditCard } from 'react-icons/bi'
import {MdOutlineFavoriteBorder,MdFavorite} from 'react-icons/md'

const ServiceDetails = () => {
  const [service, setService] = useState(null)
  const [imgURL, setImgURL] = useState(null)
  const { id } = useParams();
  const datas = useLoaderData();

  useEffect(() => {
    const item = datas.find((data) => data.id == id)
    setService(item)
    setImgURL(service?.img[0])
  }, [])
  console.log(id)
  return (
    <div className=''>
      <div  className='relative'>
        <img className='w-full h-[400px] rounded-t-md' src={imgURL || service?.img[0]} alt="" />
      </div>
      <div className='bg-slate-100 w-4/5 md:w-2/3 mx-auto -bottom-[400px] md:-bottom-[200px] lg:-bottom-[250px] -right-[50%] -left-[50%]  absolute py-10 px-5 rounded-lg'>
        {/* for all img */}
        <div className='flex gap-2  md:gap-4 justify-center py-2 lg:py-5  mx-auto'>
          {service?.img.map((imgitem) => (
            <img onClick={()=> setImgURL(imgitem)} className=' w-20 h-10 lg:w-30 lg:h-20 rounded-lg ' src={imgitem} alt="" />
          ))}
        </div>
        {/* for Details */}
        <div>
          <h2 className='text-5xl font-bold text-center pb-4 '>{service?.name}</h2>
          <p className='text-gray-400 text-justify pb-4'>{service?.description}</p>
          <div className='flex items-center justify-between'>
            <p className='flex items-center gap-2 '>Price: <span className='flex items-center' > <FiDollarSign /> {service?.price} </span></p>
            <div className='flex flex-col md:flex-row  gap-3 items-center' >
              <button className='flex items-center gap-2 border-2 py-1 rounded-md hover:bg-orange-400 hover:text-black px-4'><MdOutlineFavoriteBorder className='text-xl' /> Favorite</button>
              {/* <MdFavorite className='text-red-600 text-lg' /> */}
            <button className='flex items-center gap-2 bg-orange-400 py-1 hover:bg-transparent hover:border-2 px-3 rounded-md'><BiCreditCard /> Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails