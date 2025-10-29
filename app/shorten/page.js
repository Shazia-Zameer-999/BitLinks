"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Toaster, toast } from 'react-hot-toast';
import { FiLink, FiEdit2, FiZap, FiCopy, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!url) {
            toast.error("Please enter a URL to shorten.");
            return;
        }
        setLoading(true);
        setgenerated("");
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("/api/generate", requestOptions);
            const result = await response.json();

            if (response.ok) {

                const finalShortUrl = result.shorturl || shorturl;
                // setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${finalShortUrl}`);
                const currentHost = window.location.origin;
                setgenerated(`${currentHost}/${finalShortUrl}`);
                toast.success(result.message || 'URL shortened successfully!');
                seturl("");
                setshorturl("");
            } else {
                toast.error(result.message || 'Failed to shorten URL.');
            }
        } catch (error) {
            console.error(error);
            toast.error('An unexpected error occurred.');
        } finally {
            setLoading(false);
        }

    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(generated);
        toast.success('Copied to clipboard!');
    };



    return (
        <>

            <Toaster position="top-center" reverseOrder={false} toastOptions={{
                className: '',
                style: {
                    background: '#333',
                    color: '#fff',
                },
            }} />
            <div className='min-h-screen flex items-center justify-center bg-gray-900 bg-gradient-to-br from-[#1a0b2e] via-gray-900 to-gray-900 px-4 pt-24 pb-12'>
                <motion.div
                    className='mx-auto max-w-2xl w-full bg-gray-900/50 backdrop-blur-lg border border-gray-700/50 p-8 rounded-xl shadow-2xl'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text-center mb-8'>
                        <h1 className='text-4xl font-bold text-white mb-2'>Shorten a Long Link</h1>
                        <p className='text-gray-400'>Enter your long URL and an optional custom alias.</p>
                    </div>

                    <div className='flex flex-col gap-6'>
                      
                        <div className="relative">
                            <FiLink className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                            <input
                                value={url}
                                onChange={e => seturl(e.target.value)}
                                className='w-full p-4 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
                                type="text"
                                name="url"
                                placeholder='Enter your long URL (e.g., https://...)' />
                        </div>


                        <div className="relative">
                            <FiEdit2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                            <input
                                value={shorturl}
                                onChange={e => setshorturl(e.target.value)}
                                className='w-full p-4 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
                                type="text"
                                name="shorturl"
                                placeholder='Custom alias (optional)' />
                        </div>


                        <button
                            onClick={generate}
                            disabled={loading}
                            className='flex items-center justify-center gap-3 w-full bg-purple-600 rounded-lg p-4 font-bold text-white hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 disabled:bg-purple-800 disabled:cursor-not-allowed disabled:scale-100'
                        >
                            {loading ? (
                                <FiLoader className="animate-spin" />
                            ) : (
                                <FiZap />
                            )}
                            <span>{loading ? 'Generating...' : 'Generate'}</span>
                        </button>
                    </div>


                    {generated && (
                        <motion.div
                            className="mt-8 p-4 bg-gray-800 border border-gray-700 rounded-lg"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                        >
                            <p className="text-gray-400 mb-2">Your shortened link is ready:</p>
                            <div className="flex items-center justify-between gap-4">
                                <Link target="_blank" href={generated} className="text-purple-400 font-mono break-all hover:underline">
                                    {generated}
                                </Link>
                                <button onClick={copyToClipboard} className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                                    <FiCopy size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </>
    )
}

export default Shorten
