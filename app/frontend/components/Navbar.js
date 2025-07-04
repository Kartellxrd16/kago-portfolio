'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react'; // Import icons for menu toggle

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
    const [activeSection, setActiveSection] = useState(''); // State to manage active section

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Effect to handle clicks outside the mobile menu to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click is outside the main navbar row AND the mobile menu overlay itself
            // This prevents the menu from closing if you click the toggle button or inside the opened menu
            if (isOpen &&
                !event.target.closest('.navbar-main') &&
                !event.target.closest('.mobile-menu-overlay')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Effect to update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects', 'contact'];
            let currentActive = '';

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Check if the section is roughly in the middle of the viewport
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentActive = sectionId;
                        break;
                    }
                }
            }
            setActiveSection(currentActive);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar-main bg-darkBg text-lightText p-4 md:px-8 flex justify-between items-center sticky top-0 z-50 shadow-md">

            {/* Left side: ONLY the Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 z-50">
                <Image
                    src='/logo1.png'
                    alt="Logo"
                    width={50}
                    height={50}
                    priority
                    className="flex-shrink-0"
                />
                {/* REMOVED: <span className="text-2xl font-bold ml-2">Kp</span> */}
                {/* This was causing the duplicate 'Kp' if the image itself is 'Kp' */}
            </Link>


            {/* Right side: Desktop Navigation Links or Mobile Menu Button */}
            <div className="flex items-center"> {/* Container for right-aligned items */}
                {/* Desktop Navigation Links - Hidden on small screens, flex on medium and larger */}
                <ul className="hidden md:flex space-x-6">
                    <li className="nav-link">
                        <Link
                            href="#about"
                            className={`hover:text-accentTeal ${activeSection === 'about' ? 'text-accentTeal font-bold' : ''}`}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            href="#skills"
                            className={`hover:text-accentTeal ${activeSection === 'skills' ? 'text-accentTeal font-bold' : ''}`}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            href="#projects"
                            className={`hover:text-accentTeal ${activeSection === 'projects' ? 'text-accentTeal font-bold' : ''}`}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            href="#contact"
                            className={`hover:text-accentTeal ${activeSection === 'contact' ? 'text-accentTeal font-bold' : ''}`}
                        >
                            Contact us
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button (Hamburger/X) - Visible only on small screens (md:hidden) */}
                {/* This button is now on the right side */}
                <div className="md:hidden z-50 ml-4"> {/* Added ml-4 for spacing from desktop links if they were visible */}
                    <button onClick={toggleMenu} className="mobile-menu-button text-lightText focus:outline-none">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>


            {/* Mobile Menu Overlay - Appears only when isOpen is true and on small screens */}
            {isOpen && (
                <div className="mobile-menu-overlay md:hidden absolute top-0 left-0 w-full h-screen bg-darkBg bg-opacity-95 flex flex-col items-start pt-20 px-8 space-y-8 z-40 animate-fade-in">
                    {/* The close button is now handled by the toggle button in the main navbar */}
                    {/* The logo in the screenshot 'image_094e9f.png' is likely from the Header component,
                        which is underneath this overlay. We don't want to place another logo here. */}

                    <ul className="flex flex-col items-start space-y-6 w-full">
                        <li className="nav-link text-3xl font-semibold">
                            <Link
                                href="#about"
                                className={`text-lightText hover:text-accentTeal ${activeSection === 'about' ? 'text-accentTeal font-bold' : ''}`}
                                onClick={toggleMenu} // Close menu on click
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-link text-3xl font-semibold">
                            <Link
                                href="#skills"
                                className={`text-lightText hover:text-accentTeal ${activeSection === 'skills' ? 'text-accentTeal font-bold' : ''}`}
                                onClick={toggleMenu}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-link text-3xl font-semibold">
                            <Link
                                href="#projects"
                                className={`text-lightText hover:text-accentTeal ${activeSection === 'projects' ? 'text-accentTeal font-bold' : ''}`}
                                onClick={toggleMenu}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-link text-3xl font-semibold">
                            <Link
                                href="#contact"
                                className={`text-lightText hover:text-accentTeal ${activeSection === 'contact' ? 'text-accentTeal font-bold' : ''}`}
                                onClick={toggleMenu}
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}