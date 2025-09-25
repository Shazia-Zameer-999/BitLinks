"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)

    }

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-lg border-b border-gray-700/50'>
            <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
                {/* Logo */}
                <div className='flex gap-2'>
                    <Image src={"/link.jpg"} alt='logo' width={40} height={50} className='rounded-full' />
                    <Link href="/" className="logo font-bold text-2xl text-white">
                        BitLinks
                    </Link>
                </div>

                {/* Desktop Menu Links */}
                <div className='hidden md:flex items-center gap-8 text-lg text-gray-300'>
                    <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link>
                    <Link href="/shorten" className="hover:text-purple-400 transition-colors">Shorten</Link>
                    <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link>
                </div>

                {/* Desktop Action Buttons */}
                <div className='hidden md:flex items-center gap-4'>
                    <Link href="https://github.com/Shazia-Zameer-999/BitLinks" target="_blank">
                        <button className='cursor-pointer flex items-center gap-2 bg-gray-700 rounded-lg px-4 py-2 font-semibold text-white hover:bg-gray-600 transition-all'>
                            <FiGithub /> Github
                        </button>
                    </Link>
                    <Link href="/shorten">
                        <button className='cursor-pointer bg-purple-600 rounded-lg px-5 py-2 font-semibold text-white hover:bg-purple-700 transition-all transform hover:scale-105'>
                            Try Now
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='md:hidden absolute top-full left-0 w-full bg-gray-900/95 border-t border-gray-700/50'
                >
                    <div className='flex flex-col items-center gap-6 py-8 text-lg text-gray-300'>
                        <Link href="/" onClick={toggleMenu} className="hover:text-purple-400">Home</Link>
                        <Link href="/about" onClick={toggleMenu} className="hover:text-purple-400">About</Link>
                        <Link href="/shorten" onClick={toggleMenu} className="hover:text-purple-400">Shorten</Link>
                        <Link href="/contact" onClick={toggleMenu} className="hover:text-purple-400">Contact Us</Link>
                        <div className='flex items-center gap-4 mt-4'>
                            <Link href="https://github.com/Shazia-Zameer-999/BitLinks" target="_blank">
                                <button className='cursor-pointer flex items-center gap-2 bg-gray-700 rounded-lg px-4 py-2 font-semibold text-white hover:bg-gray-600 transition-all'>
                                    <FiGithub /> Github
                                </button>
                            </Link>
                            <Link href="/generate">
                                <button className='cursor-pointer bg-purple-600 rounded-lg px-5 py-2 font-semibold text-white hover:bg-purple-700 transition-all'>
                                    Try Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}

export default Navbar
