"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiGavel, FiUserCheck, FiShield, FiAlertTriangle, FiGitPullRequest, FiXCircle } from 'react-icons/fi';


const TermSection = ({ icon, title, summary, children }) => (
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
            <div className="prose prose-invert prose-p:text-gray-400 prose-li:text-gray-400 max-w-none">
                {children}
            </div>
        </div>
    </motion.div>
);

const TermsOfService = () => {
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
                        The Rules of the Road
                    </h1>
                    <p className='text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'>
                        Our terms are simple because our service is simple. Here’s what you need to know when using BitLinks.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </motion.header>

             
                <div className="max-w-4xl mx-auto">
                    <TermSection
                        icon={<FiUserCheck size={24} />}
                        title="Accepting the Terms"
                        summary="By using BitLinks, you're agreeing to these terms. It’s a two-way street: you get a great free service, and you agree to use it responsibly."
                    >
                        <p>Welcome to BitLinks! By accessing or using our website and services, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you don't agree with any part of these terms, then you may not use the service.</p>
                    </TermSection>

                    <TermSection
                        icon={<FiAlertTriangle size={24} />}
                        title="Acceptable Use"
                        summary="The Gist: Don't be evil. Use our service for good, not for spamming, phishing, malware, or linking to illegal or hateful content. We have zero tolerance for sketchy links."
                    >
                        <p>We want BitLinks to be a safe and useful tool for everyone. You agree not to use our service to:</p>
                        <ul>
                            <li>Create links to any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable.</li>
                            <li>Distribute spam, unsolicited messages, or chain letters.</li>
                            <li>Create links for phishing scams, malware distribution, or any form of cybercrime.</li>
                            <li>Attempt to disrupt or compromise the integrity and security of our servers.</li>
                        </ul>
                        <p>Violation of these rules will result in the immediate deletion of your links and a potential ban from our service.</p>
                    </TermSection>
                    
                    <TermSection
                        icon={<FiShield size={24} />}
                        title="Your Content & Our Service"
                        summary="What you link to is your responsibility. Our service is provided 'as is' without any guarantees. While we aim for 100% uptime, we can't promise it."
                    >
                        <p>You retain full ownership of the content you link to. However, you are solely responsible for that content. We provide our service "as is" and make no promises or guarantees about its reliability or availability. We are not liable for any damages or losses resulting from your use of the service, including any downtime or data loss.</p>
                    </TermSection>

                    <TermSection
                        icon={<FiXCircle size={24} />}
                        title="Termination"
                        summary="We can remove any link or stop providing services to anyone at our discretion, especially if these rules are broken."
                    >
                        <p>We reserve the right to suspend or terminate your access to the service at any time, for any reason, without notice. This is especially true if you violate the letter or spirit of these terms. We can delete any short link that we find to be in violation of our Acceptable Use policy.</p>
                    </TermSection>
                    
                     <TermSection
                        icon={<FiGitPullRequest size={24} />}
                        title="Changes to These Terms"
                        summary="The web changes, and so will these terms. We'll update this page if we make changes. By continuing to use the service, you accept the new terms."
                    >
                        <p>We may modify these terms from time to time. The most current version will always be posted on this page. We encourage you to review it periodically. Your continued use of BitLinks after any changes constitutes your acceptance of the new terms.</p>
                    </TermSection>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;