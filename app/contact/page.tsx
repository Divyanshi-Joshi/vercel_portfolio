"use client"

import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background with decorative shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base white background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Top-left half circle - Mint Green */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full opacity-60"></div>
        
        {/* Bottom-right half circle - Light Green */}
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-emerald-200 rounded-full opacity-55"></div>
      </div>

      {/* Navigation */}
      <Navigation activeIcon="contact" />

      {/* Content */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 py-20 md:p-6"
      >
        <div className="max-w-6xl mx-auto pt-10">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16"
          >
            <span className="text-black">CONTACT</span> <span className="text-secondary">ME</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">CONTACT ME HERE !</h2>

              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-center gap-3 md:gap-4"
                >
                  <div className="text-xl md:text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold">Location : </span>
                    New Delhi, India
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-center gap-3 md:gap-4"
                >
                  <div className="text-xl md:text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold">Email : </span>
                    divyanshijoshi2610@gmail.com
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="flex items-center gap-3 md:gap-4"
                >
                  <div className="text-xl md:text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-graduation-cap"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold">Education : </span>
                    Maharaja Agrasen Institute of Technology
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="flex items-center gap-3 md:gap-4"
                >
                  <div className="text-xl md:text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold">Languages : </span>
                    English, Hindi
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="flex gap-4 mt-8"
              >
                <Link
                  href="https://github.com/Divyanshi-Joshi"
                  className="bg-gray-700 text-white p-3 md:p-4 rounded-full hover:bg-gray-800 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.35-3.37-1.35-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1.01.07 1.55 1.04 1.55 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 2.5-.34c.85.004 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.41.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.69.91.69 1.84v2.73c0 .27.18.58.69.48A10.012 10.012 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/divyanshi-joshi-352a73256/"
                  className="bg-gray-700 text-white p-3 md:p-4 rounded-full hover:bg-gray-800 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <Image
                src="/images/point.jpg"
                alt="Contact illustration"
                width={400}
                height={400}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
