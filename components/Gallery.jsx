"use client"

import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Gallery = () => {
    const images = [
        {
            src: '/gallery/gallery-1.jpeg',
            title: 'Image 1',
        },
        {
            src: '/gallery/gallery-2.jpeg',
            title: 'Image 2',
        },
        {
            src: '/gallery/gallery-3.jpeg',
            title: 'Image 3',
        },
        {
            src: '/gallery/gallery-4.jpeg',
            title: 'Image 4',
        },
    ];

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <section id='gallery' className='container mx-auto py-20 px-5 md:px-0'>
            <div>
                <div className="heading">
                    <h2 className='text-center text-2xl md:text-4xl font-bold pb-10'>Gallery</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className='overflow-hidden rounded-lg shadow-md cursor-pointer'
                            onClick={() => {
                                setIndex(i);
                                setOpen(true);
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                loading="lazy"
                                className='w-full h-80 object-cover hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                    ))}
                </div>

                {open && (
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        index={index}
                        slides={images}
                        plugins={[Thumbnails, Captions]}
                        captions={{ showToggle: false }}
                    />
                )}
            </div>
        </section>
    );
};

export default Gallery;
