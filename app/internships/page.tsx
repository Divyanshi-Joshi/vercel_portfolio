"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Image from "next/image"
import { MapPin, Calendar, Star } from "lucide-react"

const internships = [
  {
    id: 1,
    company: "University of Illinois",
    mentor: "Dr Darko Marinov",
    position: "Software Engineering Research Intern",
    duration: "June 2025 - Present",
    location: "Remote",
    description:
      "Currently researching the usage of Large Language Models (LLMs) like GPT for patch generation to fix bugs in software.",
    highlights: [
      "Automatic Program Repair (APR) through conversational feedback",
      "Unit Testing with LLMs",
      "Bug fixing automation",
    ],
    image: "/images/illinois.png",
    isOngoing: true,
  },
  {
    id: 2,
    company: "Indian Space Research Organisation (ISRO)",
    position: "Machine Learning Intern",
    duration: "July 2024 - August 2024",
    location: "Sriharikota, Andhra Pradesh",
    description:
      "Developed state-of-the-art models for spacecraft collision prediction using RNN and CNN architectures.",
    highlights: [
      "39.9% improvement over baseline metrics",
      "Analyzed multivariate time-series data with 103 features",
      "Applied PCA and feature selection to reduce to 24 critical features",
      "RNN and CNN architecture implementation",
    ],
    image: "/images/ISRO.png",
    isOngoing: false,
  },
]

export default function Internships() {
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
        
        {/* Top-right corner shape - Pink */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-200 rounded-full opacity-40"></div>
        
        {/* Left side accent - Peach */}
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-orange-100 rounded-full opacity-50"></div>
        
        {/* Bottom-left accent - Blue */}
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-45"></div>
        
        {/* Center subtle circle - Very light pink */}
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-pink-100 rounded-full opacity-30"></div>
      </div>

      {/* Navigation */}
      <Navigation activeIcon="briefcase" />

      {/* Content */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 py-20 md:p-6"
      >
        <div className="max-w-4xl mx-auto pt-10">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-center mb-4 md:mb-8"
          >
            <span className="text-black">MY</span> <span className="text-secondary">INTERNSHIPS</span>
          </motion.h1>

          <motion.p 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-base md:text-lg text-gray-600 mb-16 md:mb-20"
          >
            Professional journey through cutting-edge research and development
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Central Timeline Line - Wavy Designer Pattern */}
            <svg 
              className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full top-0" 
              viewBox="0 0 20 1400" 
              preserveAspectRatio="none" 
              style={{ pointerEvents: 'none', minHeight: '100%' }}
            >
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ed64a6" stopOpacity="1" />
                  <stop offset="25%" stopColor="#f472b6" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#f472b6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ed64a6" stopOpacity="1" />
                </linearGradient>
                
                {/* Shadow filter */}
                <filter id="shadow">
                  <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                </filter>
              </defs>
              
              {/* Main wavy line */}
              <path 
                d="M 10 0 Q 5 100 10 200 T 10 400 T 10 600 T 10 800 T 10 1000 T 10 1200 L 10 1400" 
                stroke="url(#timelineGradient)" 
                strokeWidth="4" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                filter="url(#shadow)"
                vectorEffect="non-scaling-stroke"
              />
              
              {/* Decorative dashed line on sides */}
              <path 
                d="M 3 0 Q 1 100 3 200 T 3 400 T 3 600 T 3 800 T 3 1000 T 3 1200 L 3 1400" 
                stroke="#ed64a6" 
                strokeWidth="1.5" 
                fill="none" 
                strokeDasharray="5,5"
                opacity="0.4"
                strokeLinecap="round"
              />
              
              <path 
                d="M 17 0 Q 19 100 17 200 T 17 400 T 17 600 T 17 800 T 17 1000 T 17 1200 L 17 1400" 
                stroke="#ed64a6" 
                strokeWidth="1.5" 
                fill="none" 
                strokeDasharray="5,5"
                opacity="0.4"
                strokeLinecap="round"
              />
            </svg>

            <div className="space-y-12">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.3 }}
                  className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content Container */}
                  <div className="w-1/2 px-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                              {internship.company}
                            </h2>
                            {internship.isOngoing && (
                              <span className="inline-flex items-center gap-1 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                                <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                                Ongoing
                              </span>
                            )}
                          </div>
                          {internship.mentor && (
                            <p className="text-sm text-pink-600 font-medium mb-1">
                              Mentor: {internship.mentor}
                            </p>
                          )}
                        </div>
                        <div className="w-16 h-16 ml-4 flex-shrink-0 relative">
                          <Image
                            src={internship.image}
                            alt={internship.company}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Position */}
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-secondary">
                        {internship.position}
                      </h3>

                      {/* Metadata */}
                      <div className="space-y-2 mb-5 pb-5 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-green-600" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-green-600" />
                          <span>{internship.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
                        {internship.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {internship.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700"
                          >
                            <Star className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-0 flex justify-center relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.3 }}
                      className="relative z-10"
                    >
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 w-12 h-12 -top-1.5 -left-1.5 bg-gradient-to-br from-pink-400 to-pink-300 rounded-full opacity-30 blur-lg" />
                      {/* Main circle with border */}
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-400 border-4 border-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      {/* Pulsing animation ring */}
                      <div className="absolute inset-0 w-12 h-12 bg-pink-400 rounded-full animate-pulse opacity-10" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-lg text-gray-600">
              Want to collaborate or learn more about my experience?{" "}
              <a
                href="/contact"
                className="text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-300 underline"
              >
                Get in touch
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}

