"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill out all fields.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message || "Thanks for reaching out! I'll get back to you soon.");
     
                setFormData({ name: '', email: '', message: '' });
            } else {
         
                toast.error(result.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error('Something went wrong. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} toastOptions={{
                style: { background: '#333', color: '#fff' },
            }} />
            <div className='min-h-screen flex items-center justify-center bg-gray-900 bg-gradient-to-br from-[#1a0b2e] via-gray-900 to-gray-900 px-4 pt-24 pb-12'>
                <motion.div
                    className='mx-auto max-w-4xl w-full'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text-center mb-12'>
                        <h1 className='text-5xl md:text-6xl font-bold text-white mb-3'>Get in Touch</h1>
                        <p className='text-lg text-gray-400'>Have a question or a project in mind? Let's talk.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                        <form
                            onSubmit={handleSubmit}
                            className='bg-gray-900/50 backdrop-blur-lg border border-gray-700/50 p-8 rounded-xl shadow-2xl flex flex-col gap-6'
                        >
                            <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>

                            <div className="relative">
                                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    onChange={handleChange}
                                    value={formData.name}
                                    name="name"
                                    className='w-full p-4 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                />
                            </div>

                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    name="email"
                                    className='w-full p-4 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                />
                            </div>

                            <div className="relative">
                                <FiMessageSquare className="absolute left-4 top-6 -translate-y-1/2 text-gray-400" />
                                <textarea
                                    placeholder="Your Message"
                                    onChange={handleChange}
                                    value={formData.message}
                                    rows={5}
                                    name="message"
                                    className='w-full p-4 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className='flex items-center justify-center gap-3 w-full bg-purple-600 rounded-lg p-4 font-bold text-white hover:bg-purple-700 transition-all disabled:bg-purple-800 disabled:cursor-not-allowed'
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                                {!loading && <FiSend />}
                            </button>
                        </form>

                        <div className="flex flex-col gap-6 text-center md:text-left pt-8">
                            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                            <p className="text-gray-400">
                                You can also find me on these platforms. I'm most active on GitHub and LinkedIn.
                            </p>
                            <div className="flex justify-center md:justify-start gap-6 mt-4">
                                <a href="https://github.com/Shazia-Zameer-999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    <FiGithub size={32} />
                                </a>
                                <a href="https://www.linkedin.com/in/daten-diva-903014332/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    <FiLinkedin size={32} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default ContactForm;