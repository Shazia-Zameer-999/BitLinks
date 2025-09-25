"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi"; // Using react-icons for a techy feel

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};
const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function Home() {
  return (
    <main className="bg-gray-900 bg-gradient-to-br from-[#1a0b2e] via-gray-900 to-gray-900 text-white">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] container mx-auto px-6">
        <motion.div
          className="flex flex-col gap-6 items-start justify-center text-left py-12 md:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.h1 className="text-5xl lg:text-6xl font-extrabold leading-tight"
            variants={itemVariants}>
            The Fastest &amp; Simplest <br />
            <span className="text-purple-400">URL Shortener</span>
          </motion.h1>
          <motion.p className="text-lg text-gray-400 max-w-lg"
            variants={itemVariants}>
            Straight to the point. No tracking, no invasive logins. Just a clean, free, and open-source URL shortener built for everyone.
          </motion.p>
          <motion.div className="flex gap-4 py-5"
            variants={itemVariants}>
            <Link href="/generate">
              <button className='flex items-center gap-2 bg-purple-600 rounded-lg px-6 py-3 font-bold text-white hover:bg-purple-700 transition-all duration-300 transform hover:scale-105'>
                <span>Try Now</span> <FiArrowRight />
              </button>
            </Link>
            <Link href="https://github.com/your-repo" target="_blank">
              <button className='flex items-center gap-2 bg-gray-700 rounded-lg px-6 py-3 font-bold text-white hover:bg-gray-600 transition-all duration-300 transform hover:scale-105'>
                <FiGithub /> <span>GitHub</span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="flex items-center justify-center relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible">
          <Image
            alt="An abstract geometric vector graphic"
            src={"/vector.png"}
            width={600}
            height={600}
            className="object-contain"
          />
        </motion.div>
      </section>
    </main>
  );
}
