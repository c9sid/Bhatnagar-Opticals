'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const navLinks = [
    { id: 1, name: "Why Us", href: "#why-us" },
    { id: 2, name: "Ad Estimate", href: "#ad-estimate" },
    { id: 3, name: "How it Works", href: "#how-it-works" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <div
            className={`fixed top-0 w-full z-50 transition-all duration-300 
                ${scrolled ? "bg-white/90 shadow-md backdrop-blur-lg py-3 text-black" : "bg-transparent py-5 text-white"}`}
        >
            <div className="container mx-auto flex justify-between items-center px-5">
                <div className="logo">
                    <Link href='/' className='text-blue-500 font-bold text-2xl'>
                        Bhatnagar<span className='text-yellow-400'>Opticals</span>
                    </Link>
                </div>

                <div className="menu">
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
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-5 py-4 flex flex-col items-start gap-4 font-medium z-40">
                    {navLinks.map((nav) => (
                        <Link
                            key={nav.id}
                            href={nav.href}
                            onClick={() => setIsOpen(false)}
                            className={`transition-colors duration-300 ${activeSection === nav.href ? "text-blue-500" : ""
                                } hover:text-blue-500 text-black`}
                        >
                            {nav.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
