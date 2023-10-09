import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
// import { useLoaderData } from 'react-router-dom'


const Blogs = () => {
  // const {datas} = useLoaderData();
  const [datas, setDatas] = useState(null)
  const [seeAll, setSeeAll] = useState(6)

  useEffect(()=>{
    fetch("/blogs.json")
    .then((res)=> res.json())
    .then((data)=> setDatas(data))
  },[])
  // console.log(datas)

  return (
    <div>
    <div className=' max-w-6xl mx-auto grid py-10 px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        datas?.slice(0,seeAll).map((data)=>(
          <Blog key={data.id} data={data} />
        ))
      }
    </div>
    {
      seeAll != datas?.length && <div className='text-center py-5'>
      <button className='bg-orange-700 text-white font-bold p-1 rounded-md px-3'onClick={()=>{setSeeAll(datas.length)}} >See All Blogs</button>
    </div>
    }
    </div>
  )
}

export default Blogs