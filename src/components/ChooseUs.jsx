import React from 'react'

const ChooseUs = () => {
    return (
        <div className='bg-gray-100 py-10'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row px-3 lg:px-0 items-center'>
                <div className='flex-1'>
                    <img src="https://www.eventbrite.com/blog/wp-content/uploads/2022/06/thinking-SP-09-01.png" alt="" />
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                    <h4 className='text-lg font-bold text-green-800 '>Why Choose US</h4>
                    <h2 className='text-5xl font-bold'>Why Most of The People Choose Special Event</h2>
                    <p className='text-gray-400'>Our special event managemant company are very trustful and we are try to give our best. Already we are completed so many projects or events. Thats why we are sure that we can manage your event successfully. </p>

                    <div>

                        <div tabIndex={0} className="collapse collapse-plus border border-base-100 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                                Our Management System
                            </div>
                            <div className="collapse-content">
                                <p>Our Social Event Management System is a comprehensive and efficient solution designed to streamline the planning and execution of social events. With a focus on simplicity and effectiveness, it empowers event organizers to effortlessly coordinate a wide range of social gatherings, from weddings and birthdays to corporate functions and community events.  </p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-100 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                                Our Dream to best service
                            </div>
                            <div className="collapse-content">
                                <p>Our system offers features for guest list management, venue selection, catering coordination, and scheduling. It also provides real-time communication tools, budget tracking, and seamless integration with social media platforms. </p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-100 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                                Focus on our Work
                            </div>
                            <div className="collapse-content">
                                <p>Whether you're a professional event planner or organizing a personal celebration, our management system ensures smooth, successful, and memorable social events with ease.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs