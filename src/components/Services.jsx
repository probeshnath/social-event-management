import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Service from './Service'

const Services = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div className="py-8">
            <h2 className='text-center text-4xl pb-4'> Our Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data.map((item) => (
                        <Service key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Services