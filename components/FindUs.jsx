import Link from 'next/link'
import React from 'react'
import { IoCall } from 'react-icons/io5'

const FindUs = () => {
    return (
        <section id='find-us' className='py-20'>
            <h2 className='text-center text-2xl md:text-4xl font-bold pb-10'>Find Us</h2>
            <div className='block md:flex gap-10 space-y-5 md:space-y-0 items-center justify-between container mx-auto px-5 md:px-0'>
                <div className="left map">
                    <iframe className='rounded-lg w-full md:w-3xl h-72 bg-gray-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.9650909172074!2d80.33686019999999!3d25.4728411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399cceef5c800477%3A0x9735b3eb1b74646e!2sBhatnagar%20Opticals%20Banda!5e0!3m2!1sen!2sin!4v1747325112711!5m2!1sen!2sin" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen=""></iframe>
                </div>
                <div className="right p-5 bg-gray-100 rounded-lg flex flex-col gap-3">
                    <div className="heading">
                        <h2 className='text-xl md:text-2xl font-semibold'>Bhatnagar Opticals</h2>
                    </div>
                    <div className="details">
                        <p>Visit our store in Banda, Uttar Pradesh for personalized eye care and a wide selection of eyewear.</p>
                    </div>
                    <div className="open flex flex-col gap-2">
                        <div className="main">
                            <h5 className='font-semibold'>Store Hours:</h5>
                        </div>
                        <div className="para">
                            <p>Monday - Saturday: 10 AM - 7 PM</p>
                            <p>Sunday: 11 AM - 5 PM</p>
                        </div>
                    </div>
                    <div className="btn">
                        <Link href={'tel:+919919119899'} className='inline-flex items-center gap-3 bg-blue-500 text-white rounded-full px-6 py-3 shadow-md hover:bg-blue-600 active:bg-blue-600 active:scale-95 transition-all duration-300'><IoCall className='text-lg' />
                            Call Now: +91-991 911 9899</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindUs