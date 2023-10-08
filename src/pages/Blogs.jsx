import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
// import { useLoaderData } from 'react-router-dom'


const Blogs = () => {
  // const {datas} = useLoaderData();
  const [datas, setDatas] = useState(null)

  useEffect(()=>{
    fetch("/blogs.json")
    .then((res)=> res.json())
    .then((data)=> setDatas(data))
  },[])
  // console.log(datas)

  return (
    <div className=' max-w-6xl mx-auto grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        datas?.map((data)=>(
          <Blog key={data.id} data={data} />
        ))
      }
    </div>
  )
}

export default Blogs