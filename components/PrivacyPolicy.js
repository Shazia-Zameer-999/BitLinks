"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiDatabase, FiShare2, FiArchive, FiGitPullRequest, FiHelpCircle } from 'react-icons/fi';
import Link from 'next/link';


const PolicySection = ({ icon, title, summary, children }) => (
    <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-600/20 p-3 rounded-lg text-purple-400">
                {icon}
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <p className="text-lg font-semibold text-gray-300 italic mb-4 border-l-4 border-purple-500 pl-4">
                {summary}
            </p>
            <div className="prose prose-invert prose-p:text-gray-400 prose-ul:text-gray-400 max-w-none">
                {children}
            </div>
        </div>
    </motion.div>
);

const PrivacyPolicy = () => {
    return (
        <div className='min-h-screen bg-gray-900 bg-gradient-to-br from-[#1a0b2e] via-gray-900 to-gray-900 text-white pt-24 pb-12'>
            <div className='container mx-auto px-6'>
                <motion.header
                    className='text-center py-16'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='text-5xl md:text-7xl font-extrabold leading-tight mb-4'>
                        Our Commitment to Privacy
                    </h1>
                    <p className='text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'>
                        We believe privacy is a right, not a feature. Here’s a straightforward look at how we handle your data (or rather, how we *don't*).
                    </p>
                    <p className="text-sm text-gray-500 mt-4">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </motion.header>

                <div className="max-w-4xl mx-auto">
                    <PolicySection
                        icon={<FiDatabase size={24} />}
                        title="Information We Collect"
                        summary="The Gist: We collect the absolute minimum required for the service to work. That's it. We do NOT collect your IP address or any other personal info."
                    >
                        <p>We are serious about your privacy. The only pieces of information we collect and store are:</p>
                        <ul>
                            <li>The original long URL you provide.</li>
                            <li>The shortened URL we generate.</li>
                        </ul>
                        <p>We specifically **do not** collect or store any Personal Identifiable Information (PII). This includes your IP address, browser information (user agent), or any form of tracking cookies.</p>
                    </PolicySection>

                    <PolicySection
                        icon={<FiShare2 size={24} />}
                        title="How We Use Information"
                        summary="The Gist: We use the link data solely to redirect visitors. We will never track your clicks, show you ads, or sell your data. Ever."
                    >
                        <p>The information we collect is used for one purpose and one purpose only: to make the URL redirection work. When a user clicks a BitLinks URL, we look up the original long URL in our database and send them there. We do not analyze, aggregate, or monetize click data.</p>
                    </PolicySection>

                    <PolicySection
                        icon={<FiArchive size={24} />}
                        title="Data Retention"
                        summary="The Gist: Your links are stored indefinitely, unless they are found to violate our Terms of Service, in which case they will be deleted."
                    >
                        <p>We store the created links in our database to keep the service functional. We reserve the right to remove any link at any time if it is found to be in violation of our Acceptable Use policy as outlined in our Terms of Service.</p>
                    </PolicySection>

                    <PolicySection
                        icon={<FiShield size={24} />}
                        title="Data Security"
                        summary="The Gist: We take standard, reasonable measures to protect our database and keep the service secure."
                    >
                        <p>We implement industry-standard security measures to protect our infrastructure and the data we store. While no online service can be 100% secure, we are committed to protecting our systems from unauthorized access.</p>
                    </PolicySection>

                    <PolicySection
                        icon={<FiGitPullRequest size={24} />}
                        title="Changes to This Policy"
                        summary="The Gist: If we update this policy, we'll post the changes here. Continuing to use BitLinks means you agree to the new policy."
                    >
                        <p>We may update this Privacy Policy from time to time. The most current version will always be available on this page. By continuing to use our service after changes become effective, you agree to be bound by the revised policy.</p>
                    </PolicySection>

                    <PolicySection
                        icon={<FiHelpCircle size={24} />}
                        title="Questions?"
                        summary="The Gist: Have a question about our privacy practices? Please don't hesitate to reach out."
                    >
                        <p>If you have any questions or concerns about this Privacy Policy, please feel free to get in touch with us via our <Link href="/contact" className="text-purple-400 hover:underline">Contact Page</Link>.</p>
                    </PolicySection>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;