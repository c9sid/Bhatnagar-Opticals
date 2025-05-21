import Image from 'next/image'
import React from 'react'

const Brands = () => {
    return (
        <section className='py-20'>
            <div className='container mx-auto'>
                <div>
                    <h2 className='text-2xl md:text-4xl font-bold text-center'>Trusted Brands</h2>
                </div>
                <marquee behavior="smooth" direction="left">
                    <div className="brand flex gap-16 py-10">
                        <div>
                            <Image src={'/logo/Ray-Ban.png'} width={200} height={50} alt='Ray-Ban Logo' />
                        </div>
                        <div>
                            <Image src={'/logo/tital-eye-plus.png'} width={200} height={50} alt='Titan Eye Plus Logo' />
                        </div>
                        <div>
                            <Image src={'/logo/Johnson-and-Johnson.png'} width={200} height={50} alt='Johnson and Johnson Logo' />
                        </div>
                        <div>
                            <Image src={'/logo/bausch-plus-lomb.png'} width={200} height={50} alt='Bausch Plus Lomb Logo' />
                        </div>
                        <div>
                            <Image src={'/logo/scott.png'} width={200} height={50} alt='Scott Logo' />
                        </div>
                        <div>
                            <Image src={'/logo/freshlook.png'} width={200} height={50} alt='Freshlook Logo' />
                        </div>
                        <div>
                            <Image src={'/logo/vogue.png'} width={200} height={50} alt='Vogue Logo' />
                        </div>
                    </div>
                </marquee>
                <div>
                    <h4 className='text-center text-sm md:text-base'>All Top Brands Available at One Stop</h4>
                </div>
            </div>
        </section>
    )
}

export default Brands