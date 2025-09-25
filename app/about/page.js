"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiZap, FiLock, FiCode, FiArrowRight } from 'react-icons/fi';
import { SiNextdotjs, SiTailwindcss, SiVercel, SiMongodb } from 'react-icons/si';

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const About = () => {
    return (
        <div className='min-h-screen bg-gray-900 bg-gradient-to-br from-[#1a0b2e] via-gray-900 to-gray-900 text-white pt-24 pb-12'>
            <div className='container mx-auto px-6'>

                <motion.header
                    className='text-center py-16 md:py-24'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='text-5xl md:text-7xl font-extrabold leading-tight mb-4'>
                        Redefining the <span className="text-purple-400">Link</span>.
                    </h1>
                    <p className='text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'>
                        BitLinks was born from a simple idea: URL shortening should be fast, free, and private. No trackers, no ads, no nonsense.
                    </p>
                </motion.header>

                <motion.section
                    className='py-16'
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold'>Our Philosophy</h2>
                        <p className='text-gray-400 mt-2'>What drives us to be different.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                        <div className='bg-gray-800/50 p-8 rounded-xl border border-gray-700'>
                            <FiZap className="mx-auto text-purple-400 mb-4" size={40} />
                            <h3 className="text-2xl font-bold mb-2">Simplicity First</h3>
                            <p className="text-gray-400">We cut the clutter. Our interface is designed to be intuitive and lightning-fast. Paste, shorten, and share in seconds.</p>
                        </div>
                        <div className='bg-gray-800/50 p-8 rounded-xl border border-gray-700'>
                            <FiLock className="mx-auto text-purple-400 mb-4" size={40} />
                            <h3 className="text-2xl font-bold mb-2">Privacy is Paramount</h3>
                            <p className="text-gray-400">We don't track your clicks or sell your data. Your information is yours alone. We believe in a more private internet.</p>
                        </div>
                        <div className='bg-gray-800/50 p-8 rounded-xl border border-gray-700'>
                            <FiCode className="mx-auto text-purple-400 mb-4" size={40} />
                            <h3 className="text-2xl font-bold mb-2">Open & Transparent</h3>
                            <p className="text-gray-400">BitLinks is fully open-source. You can view our code, contribute, or even host your own instance. Trust through transparency.</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    className='py-16 flex flex-col md:flex-row items-center gap-12'
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='md:w-1/3 text-center md:text-left'>
                        <h2 className='text-4xl font-bold'>Meet the Creator</h2>
                        <p className='text-gray-400 mt-2'>This project was built and is maintained by a solo developer passionate about clean code and useful tools.</p>
                    </div>
                    <div className='md:w-2/3'>
                        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col sm:flex-row items-center gap-6">

                            <Image src="/Daten_Logo.jpg" alt="Creator's Avatar" width={120} height={120} className="rounded-full border-2 border-purple-400" />
                            <div>
                                <h3 className="text-2xl font-bold">Daten Diva</h3>
                                <p className="text-gray-400 mt-2">"A full-stack developer focused on building beautiful, high-performance web applications."</p>
                                <div className="flex gap-4 mt-4">
                                    <Link href="https://github.com/Shazia-Zameer-999" target="_blank" className="text-gray-300 hover:text-purple-400 transition-colors">GitHub</Link>
                                    <Link href="https://www.linkedin.com/in/daten-diva-903014332/" target="_blank" className="text-gray-300 hover:text-purple-400 transition-colors">LinkedIn</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    className='py-16'
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold'>Built with Modern Technology</h2>
                        <p className='text-gray-400 mt-2'>Leveraging the power of the modern web stack.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-400">
                        <div className="flex flex-col items-center gap-3"><SiNextdotjs size={48} /><p>Next.js</p></div>
                        <div className="flex flex-col items-center gap-3"><SiTailwindcss size={48} /><p>Tailwind CSS</p></div>
                        <div className="flex flex-col items-center gap-3"><SiMongodb size={48} /><p>MongoDB</p></div>
                        <div className="flex flex-col items-center gap-3"><SiVercel size={48} /><p>Vercel</p></div>
                    </div>
                </motion.section>

                <motion.section
                    className='text-center py-16'
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className='text-4xl font-bold'>Ready to Create Your Own Short Link?</h2>
                    <p className='text-gray-400 mt-2 max-w-xl mx-auto'>Join us in making the web a simpler place, one link at a time.</p>
                    <Link href="/shorten">
                        <button className='mt-8 flex items-center gap-2 bg-purple-600 rounded-lg px-8 py-4 mx-auto font-bold text-white hover:bg-purple-700 transition-all duration-300 transform hover:scale-105'>
                            <span>Try It Now</span> <FiArrowRight />
                        </button>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default About;