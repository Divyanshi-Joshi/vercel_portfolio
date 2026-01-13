"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"
import SocialButton from "@/components/social-button"
import { motion } from "framer-motion"

export default function Home() {
  const tagline = "Building Intelligent Systems through Code & AI";

  // Animation variants for the container (staggers the letters)
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.05, // Adjust this for typing speed
      },
    },
  };

  // Animation variants for each individual letter
  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline-block",
    },
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background with decorative shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Top-left half circle - Mint Green */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full opacity-60"></div>
        
        {/* Bottom-right half circle - Light Green */}
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-emerald-200 rounded-full opacity-55"></div>
        
        {/* Top-right corner shape - Pink */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-200 rounded-full opacity-40"></div>
      </div>

      {/* Navigation */}
      <Navigation activeIcon="home" />

      {/* Content */}
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-16 max-w-7xl mx-auto"
      >
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 mb-10 md:mb-0"
        >
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi,
            <br />
            I&apos;m <span className="text-pink-500">Divyanshi Joshi</span>
          </motion.h1>

          {/* Typing Animation Tagline - Smaller Font Size */}
          <motion.h2
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-3xl font-bold mb-6 min-h-[1.5em] flex items-center"
          >
            {tagline.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {/* Blinking Cursor */}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-[3px] h-[1em] bg-pink-500 ml-1"
            />
          </motion.h2>

          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }} // Delayed so it appears after typing
            className="text-base md:text-lg text-gray-600 mb-8"
          >
            I am a final year Computer Science Student currently pursuing my B.Tech from Maharaja Agrasen Institute of
            Technology.
          </motion.p>

          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="flex flex-wrap gap-4"
          >
            <SocialButton label="LinkedIn" icon="in" href="https://www.linkedin.com/in/divyanshi-joshi-352a73256/" />
            <SocialButton label="GitHub" icon="github" href="https://github.com/Divyanshi-Joshi" />
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION: Added md:justify-end and md:pr-12 to shift right */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex-1 flex justify-center md:justify-end md:pr-12"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/images/c.png"
              alt="Divyanshi Joshi"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </motion.div>
      </motion.section>
    </main>
  )
}