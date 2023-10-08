import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({ data }) => {
    console.log(data)
    return (
        <Link to={`/blog/${data.id}`}>
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={data.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.description.slice(0,100)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Blog