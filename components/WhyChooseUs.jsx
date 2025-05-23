import React from 'react'
import { FaEye, FaGlasses, FaMapPin } from 'react-icons/fa'
import { IoGlassesSharp } from 'react-icons/io5';

const cardData = [
    {
        id: 1,
        icon: <FaEye />,
        title: "3rd Generation Optometrists",
        desc: "Professional eye care from qualified experts",
    },
    {
        id: 2,
        icon: <FaGlasses />,
        title: "1000+ Styles",
        desc: "Extensive collection of sunglasses & frames",
    },
    {
        id: 3,
        icon: <IoGlassesSharp />,
        title: "Fully Customizable",
        desc: "Customize as per your requirement",
    },
    {
        id: 4,
        icon: <FaMapPin />,
        title: "Regional Footprint",
        desc: "Serving customers up to 80 KM radius",
    },
]

const WhyChooseUs = () => {
    return (
        <section id='why-us' className='bg-gray-50 py-20 px-5 md:px-0'>
            <div className='container mx-auto'>
                <div className="heading">
                    <h2 className='text-center text-2xl md:text-4xl font-bold pb-10'>Why Choose Bhatnagar Opticals?</h2>
                </div>
                <div className="content grid grid-cols-1 md:grid-cols-4 gap-5">
                    {cardData.map((data) => (
                        <div key={data.id} className="card active:bg-orange-50 active:rounded-2xl active:scale-105 focus:bg-orange-50 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 p-5 transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-gray-200">
                            <div className="icon text-3xl md:text-4xl">
                                {data.icon}
                            </div>
                            <div className="title">
                                <h3 className='text-center text-base md:text-xl font-semibold'>{data.title}</h3>
                            </div>
                            <div className="desc">
                                <p className='text-sm md:text-base text-center'>{data.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs