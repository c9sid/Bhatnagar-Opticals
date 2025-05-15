import React from 'react'
import { FaStar } from 'react-icons/fa'

const customersData = [
    {
        id: 1,
        testimonials: "The staff at Bhatnagar Opticals was very professional. They helped me find the perfect frames for my face shape. Highly recommend!",
        name: "Rajesh Kumar",
        location: "Banda",
        dp: "RK",
    },
    {
        id: 2,
        testimonials: "I got my contact lenses from here. The eye test was thorough and they explained everything clearly. Great service!",
        name: "Priya Sharma",
        location: "Chitrakoot",
        dp: "PS",
    },
    {
        id: 3,
        testimonials: "Best collection of sunglasses in the area! I found my Ray-Ban here at a great price. The staff is knowledgeable and friendly.",
        name: "Amit Mishra",
        location: "Fatehpur",
        dp: "AM",
    },
]

const Customers = () => {
    return (
        <section id='customers' className='bg-gray-50 py-20 px-5 md:px-0'>
            <div className='container mx-auto'>
                <div className="heading">
                    <h2 className='text-center text-3xl md:text-4xl font-bold pb-10'>What Our Happy Customers Say:</h2>
                </div>
                <div className="content grid grid-cols-1 md:grid-cols-3 gap-5">
                    {customersData.map((card) => (
                        <div key={card.id} className='card bg-white active:bg-orange-50 active:rounded-2xl active:scale-105 p-5 rounded-lg flex flex-col gap-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                            <div className="star flex gap-1">
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                            <div className="testimonials">
                                <p className='text-sm'>"{card.testimonials}"</p>
                            </div>
                            <div className="user flex gap-3 items-center">
                                <div className="dp">
                                    <p className='p-2 bg-gray-300 rounded-full font-medium text-gray-700'>{card.dp}</p>
                                </div>
                                <div className="name">
                                    <p className='font-semibold'>{card.name}</p>
                                    <p className='text-sm font-light'>{card.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Customers