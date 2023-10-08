import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Service from './Service'

const Services = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div className="py-8 max-w-6xl mx-auto">
            <h2 className='text-center text-4xl pb-4' data-aos="fade-up"> Our Services</h2>
            <p className='w-3/5 mx-auto text-center text-sm pb-5'>Discover the heart of compassionate care with our social service management company. Let us empower your mission with our expertise in strategy, resources, and transformative social services.</p>

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