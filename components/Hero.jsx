import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className=' bg-red-900'>
            <div className='container mx-auto h-screen flex flex-col gap-5 justify-center items-center'>
                <div className="heading max-w-4xl">
                    <h2 className='text-6xl text-white font-bold text-center'>See Clearly. Look Sharp. Trusted Opticals in Banda.</h2>
                </div>
                <div className="paragraph">
                    <p className='text-white font-light text-xl'>Free Eye Test | Branded Glasses | Contact Lenses | Walk-ins Welcome</p>
                </div>
                <div className="buttons">
                    <Link href={'/'}>Get Directions</Link>
                    <Link href={'/'}>Book Free Eye Test</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero