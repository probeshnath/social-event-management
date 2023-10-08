
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { FiDollarSign } from 'react-icons/fi'


const BlogDetails = () => {
  const [service, setService] = useState(null)
  const [categoryData, setCategoryData] = useState(null)
  const { id } = useParams();
  const datas = useLoaderData();

  useEffect(() => {
    const item = datas.find((data) => data.id == id)
    setService(item)
  }, [id])
  // console.log(service)

  useEffect(() => {
    const cateData = datas?.filter((da) => da.category === service?.category)
    setCategoryData(cateData)
    console.log("my cate data", cateData)
  }, [service, datas])

  return (
    <div className='max-w-6xl py-10 mx-auto'>
      <div className=''>
        <img className='w-full h-[400px] rounded-t-md' src={service?.img} alt="" />
      </div>
      <div className='bg-slate-100  mx-auto py-10 px-5 rounded-lg'>
        {/* for all img */}

        {/* for Details */}
        <div>
          <h2 className='text-5xl font-bold text-center pb-4 '>{service?.name}</h2>
          <p className='text-gray-400 text-justify pb-4'>{service?.description}</p>

          <div className='flex items-center justify-between'>
            <p className='flex items-center gap-2 '>Price: <span className='flex items-center' > <FiDollarSign /> {service?.price} </span></p>

            <p className='text-sm text-gray-600 '>{service?.published_date}</p>

          </div>

          <p className='text-2xl pt-10'> Category: {service?.category}</p>
          <div className='flex gap-2 py-5'>
            {
              categoryData?.map((categoryD) => (
                <Link to={`/blog/${categoryD.id}`}>
                  <div className="card  bg-base-100  shadow-xl image-full">
                    <figure><img src={categoryD.img} className='h-[100px] w-[100px]' alt={categoryD.name} /></figure>
                    <div className="card-body flex justify-center items-center">
                      <h2 className="card-title text-2xl font-bold pb-2">{categoryD.name}</h2>
                      <p>{categoryD.description.slice(0, 100)}</p>

                    </div>
                  </div>
                </Link>
              ))
            }
          </div>



        </div>
      </div>
    </div>
  )
}

export default BlogDetails





