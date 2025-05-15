'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export const navLinks = [
    { id: 1, name: "Why Us", href: "#why-us" },
    { id: 2, name: "Testimonials", href: "#customers" },
    { id: 3, name: "Book Now", href: "#book-now" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            let currentSection = '';

            navLinks.forEach(link => {
                const section = document.querySelector(link.href);
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        currentSection = link.href;
                    }
                }
            });

            setActiveSection(currentSection);
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div
            className={`fixed top-0 w-full z-50 transition-all duration-300 
                ${scrolled ? "bg-white/90 shadow-md backdrop-blur-lg py-3 text-black" : "bg-transparent py-5 text-white"}`}
        >
            <div className="container mx-auto flex justify-between items-center px-5">
                <div className="logo">
                    <Link href='/' className='bg-white'>
                        <Image className='bg-white p-2 rounded-md' src={'/Bhatnagar_Opticals_logo.png'} width={200} height={40} alt='Bhatnagar_Opticals_Logo' priority />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-6 font-medium">
                    {navLinks.map((nav) => (
                        <Link
                            key={nav.id}
                            href={nav.href}
                            className={`transition-colors duration-300 ${activeSection === nav.href ? "text-blue-500" : ""
                                } hover:text-blue-500`}
                        >
                            {nav.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 transition-transform duration-200 active:scale-90"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out z-40
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                ref={drawerRef}
            >
                {/* Cross icon inside drawer */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 hover:text-black transition-colors"
                        aria-label="Close Menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-5 flex flex-col gap-6 font-medium">
                    {navLinks.map((nav) => (
                        <Link
                            key={nav.id}
                            href={nav.href}
                            onClick={() => setIsOpen(false)}
                            className={`transition-colors duration-300 ${activeSection === nav.href ? "text-blue-500" : ""
                                } hover:text-blue-500`}
                        >
                            {nav.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Overlay when menu is open */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"></div>
            )}
        </div>
    );
};

export default Navbar;