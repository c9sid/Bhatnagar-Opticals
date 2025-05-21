import Image from 'next/image'
import React from 'react'

const logos = [
    { src: "/logo/Ray-Ban.png", alt: "Ray-Ban Logo" },
    { src: "/logo/tital-eye-plus.png", alt: "Titan Eye Plus Logo" },
    { src: "/logo/Johnson-and-Johnson.png", alt: "Johnson and Johnson Logo" },
    { src: "/logo/bausch-plus-lomb.png", alt: "Bausch Plus Lomb Logo" },
    { src: "/logo/scott.png", alt: "Scott Logo" },
    { src: "/logo/freshlook.png", alt: "Freshlook Logo" },
    { src: "/logo/vogue.png", alt: "Vogue Logo" }
];


const Brands = () => {
    return (
        <section className='py-20'>
            <div className='container mx-auto'>
                <div>
                    <h2 className='text-2xl md:text-4xl font-bold text-center'>Trusted Brands</h2>
                </div>

                <div className="overflow-hidden py-10 relative">
                    <div className="flex gap-16 animate-scroll whitespace-nowrap w-max">
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                className="h-[40px] md:h-[50px] w-auto object-contain"
                                src={logo.src}
                                alt={logo.alt}
                            />
                        ))}
                    </div>
                </div>



                <div>
                    <h4 className='text-center text-sm md:text-base'>All Top Brands Available at One Stop</h4>
                </div>
            </div>
        </section>
    )
}

export default Brands