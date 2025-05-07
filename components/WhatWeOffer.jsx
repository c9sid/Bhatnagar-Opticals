import React from 'react'
import { FaBullseye, FaEye, FaGlasses } from 'react-icons/fa'
import { IoGlassesSharp } from "react-icons/io5";

const cardData = [
    {
        id: 1,
        icon: <FaEye />,
        title: "Computerized Eye Testing",
        desc: "Advanced technology for accurate vision assessment",
    },
    {
        id: 2,
        icon: <IoGlassesSharp />,
        title: "Prescription Spectacles",
        desc: "Custom-made glasses for your unique vision needs",
    },
    {
        id: 3,
        icon: <FaGlasses />,
        title: "Branded Sunglasses",
        desc: "Ray-Ban, Vogue, and more premium brands",
    },
    {
        id: 4,
        icon: <FaBullseye />,
        title: "Contact Lenses",
        desc: "Acuvue, Freshlook, and other top brands",
    },
]

const WhatWeOffer = () => {
    return (
        <section id='why-us' className='bg-gray-50 py-20 px-5 md:px-0'>
            <div className='container mx-auto'>
                <div className="heading">
                    <h2 className='text-center text-3xl md:text-4xl font-bold pb-10'>What We Offer</h2>
                </div>
                <div className="content grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cardData.map((card) => (
                        <div key={card.id} className="card bg-white rounded-lg shadow-md p-5 flex flex-col items-start justify-center gap-3 border border-gray-200">
                            <div className='flex gap-5'>
                                <div className="icon text-4xl">
                                    {card.icon}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className="title">
                                        <h3 className='text-xl font-semibold'>{card.title}</h3>
                                    </div>
                                    <div className="desc">
                                        <p className=''>{card.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatWeOffer