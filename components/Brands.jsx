import React from 'react'

const logos = [
    { src: "/logo/Ray-Ban.png", alt: "Ray-Ban Logo" },
    { src: "/logo/scott.png", alt: "Scott Logo" },
    { src: "/logo/Boss.png", alt: "Boss Logo" },
    { src: "/logo/Carrera.png", alt: "Carrera Logo" },
    { src: "/logo/Essilor.png", alt: "Essilor Logo" },
    { src: "/logo/French Connection.png", alt: "French Connection Logo" },
    { src: "/logo/Idee.png", alt: "Idee Logo" },
    { src: "/logo/Kodak.png", alt: "Kodak Logo" },
    { src: "/logo/Lee Copper.png", alt: "Lee Copper Logo" },
    { src: "/logo/Mont Blanc.png", alt: "Mont Blanc Logo" },
    { src: "/logo/Nike.png", alt: "Nike Logo" },
    { src: "/logo/Nikon.png", alt: "Nikon Logo" },
    { src: "/logo/Opium.png", alt: "ScoOpiumtt Logo" },
    { src: "/logo/Scavin.png", alt: "Scavin Logo" },
    { src: "/logo/Tommy Hilfiger.png", alt: "Tommy Hilfiger Logo" },
    { src: "/logo/Zeiss.png", alt: "Zeiss Logo" },
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