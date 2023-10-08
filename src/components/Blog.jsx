import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({ data }) => {
    console.log(data)
    return (
        <Link to={`/blog/${data.id}`}>
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={data.img} className='h-[300px] w-full' alt={data.name} /></figure>
                <div className="card-body flex justify-center items-center">
                    <h2 className="card-title text-2xl font-bold pb-2">{data.name}</h2>
                    <p>{data.description.slice(0,100)}</p>
                   
                </div>
            </div>
        </Link>
    )
}

export default Blog