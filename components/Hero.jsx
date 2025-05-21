import Link from 'next/link'
import React from 'react'
import { FaEye, FaMapPin } from "react-icons/fa";

const Hero = () => {
    return (
        <section className=' bg-orange-800'>
            <div className='container mx-auto h-screen flex flex-col gap-5 justify-center items-center'>
                <div className="heading max-w-4xl">
                    <h2 className='text-4xl md:text-6xl text-white font-bold text-center'>See Clearly. Look Sharp. Trusted Opticals in Banda.</h2>
                </div>
                <div className="paragraph px-16 md:px-0">
                    <p className='text-white font-light text-sm md:text-xl text-center'>Eye Test | Branded Glasses | Contact Lenses | Walk-ins Welcome</p>
                </div>
                <div className="buttons px-5 flex flex-col md:flex md:flex-row gap-3 w-full justify-center">
                    <Link href={'#find-us'} className='flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white hover:bg-blue-100 active:bg-blue-100 active:scale-95 text-blue-500 font-semibold transition-all duration-300'>
                        <span className='text-orange-500'>
                            <FaMapPin />
                        </span>
                        <p>Get Directions</p>
                    </Link>
                    <Link href={'#book-now'} className='inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 active:bg-orange-600 text-white font-semibold transition-all duration-300'><span><FaEye /></span><p>Book Eye Test Only ₹150</p></Link>
                </div>
            </div>
        </section>
    )
}

export default Hero