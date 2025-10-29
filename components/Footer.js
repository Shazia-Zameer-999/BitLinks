import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-700/50 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                    <div className="col-span-1 md:col-span-3 lg:col-span-2 pr-8">
                        <Link href="/" className="logo font-extrabold text-2xl">
                            BitLinks
                        </Link>
                        <p className="text-gray-400 mt-4 text-sm max-w-xs">
                            Fast, free, and private URL shortening for the modern web.
                        </p>
                        <div className="mt-6 border-t border-gray-800 pt-4">
                            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                Crafted by Daten Diva
                            </p>
                            <Link href="https://portfolio-dd-ebon.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group mt-2">
                                View Portfolio <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-bold text-white text-lg mb-4">Navigate</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
                            <li><a href="https://github.com/Shazia-Zameer-999/BitLinks" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-bold text-white text-lg mb-4">Legal</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                    
               
                    <div className="col-span-1 md:col-span-3 lg:col-span-1">
                         <h3 className="font-bold text-white text-lg mb-4">Stay Updated</h3>
                         <p className="text-gray-400 text-sm mb-4">Get notified about new features and updates.</p>
                        
                    </div>
                </div>
            </div>

            <div className="bg-black/20">
                <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} BitLinks. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <a href="https://github.com/Shazia-Zameer-999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                            <FiGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/daten-diva-903014332/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                            <FiLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;