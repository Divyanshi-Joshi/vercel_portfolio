"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"
import SocialButton from "@/components/social-button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      <Navigation activeIcon="home" />

      {/* Content */}
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-16 max-w-7xl mx-auto"
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
            I'm <span className="text-pink-500">Divyanshi Joshi</span>
          </motion.h1>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold mb-6"
          >
            AI ML Enthusiast
          </motion.h2>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-gray-600 mb-8"
          >
            I am a third year Computer Science Student currently pursuing my B.Tech from Maharaja Agrasen Institute of
            Technology.
          </motion.p>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <SocialButton label="LinkedIn" icon="in" href="https://www.linkedin.com/in/divyanshi-joshi-352a73256/" />
            <SocialButton label="GitHub" icon="github" href="https://github.com/Divyanshi-Joshi" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex-1 flex justify-center"
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
