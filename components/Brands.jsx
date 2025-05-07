import React from 'react'

const Brands = () => {
    return (
        <section className='py-20'>
            <div className='container mx-auto'>
                <div>
                    <h2 className='text-3xl md:text-4xl font-bold text-center'>Trusted Brands</h2>
                </div>
                <marquee behavior="smooth" direction="left">
                    <div className="brand flex gap-16 text-lg md:text-xl font-semibold py-10">
                        <div className='rounded-lg bg-gray-100 p-5'>
                            <p>Ray-Ban</p>
                        </div>
                        <div className='rounded-lg bg-gray-100 p-5'>
                            <p>Titan Eye+</p>
                        </div>
                        <div className='rounded-lg bg-gray-100 p-5'>
                            <p>Johnson & Johnson</p>
                        </div>
                        <div className='rounded-lg bg-gray-100 p-5'>
                            <p>Bausch + Lomb</p>
                        </div>
                        <div className='rounded-lg bg-gray-100 p-5'>
                            <p>Scott</p>
                        </div>
                        <div className='rounded-lg bg-gray-100 p-5'>
                            <p>Freshlook</p>
                        </div>
                        <div className='rounded-lg bg-gray-100 p-5'>
                            <p>Vogue</p>
                        </div>
                    </div>
                </marquee>
                <div>
                    <h4 className='text-center'>All Top Brands Available at One Stop</h4>
                </div>
            </div>
        </section>
    )
}

export default Brands