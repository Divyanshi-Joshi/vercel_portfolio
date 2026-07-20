"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { BookOpen, Calendar, Star } from "lucide-react"

const publications = [
  {
    id: 1,
    title:
      "The Discreet Charm of the Bugeoisie: A First Look at Bug Reports Created by Researchers",
    authors:
      "Ji young Kim, Jana Dragovic, Alessandro Botta, T. M. Rithwanul Islam, Alaa Mohamad, Karim Sharaf, Sejuti Sharmin Siddiqui, Divyanshi Joshi, Harini Anand, Nurjemal Saryyeva, Shubham Chapagain, Saad Nasir, Darko Marinov, and Bogdan Alexandru Stoica",
    venue:
      "In Proceedings of the ACM International Symposium on Software Testing and Analysis (ISSTA 2026), Oakland, CA, Oct 2026. (To appear)",
    acceptanceRate: "Acceptance Rate: 23.6%",
  },
  {
    id: 2,
    title:
      "Causal-NeuroEdit: Surgical Debiasing of Pre-Trained Language Models via Causal Attribution and Adaptive Gradient Editing",
    authors: "Divyanshi Joshi, Garima Mittal, and Pooja Gupta",
    venue: "Manuscript in preparation for journal submission",
  },
]

export default function Publications() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full opacity-60"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-emerald-200 rounded-full opacity-55"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-200 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-orange-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-45"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-pink-100 rounded-full opacity-30"></div>
      </div>

      <Navigation activeIcon="book" />

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
            <span className="text-black">MY</span> <span className="text-secondary">PUBLICATIONS</span>
          </motion.h1>

          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-base md:text-lg text-gray-600 mb-16 md:mb-20"
          >
            Research contributions and manuscripts in progress
          </motion.p>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-pink-500 mt-1" />
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {publication.title}
                  </h2>
                </div>

                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <span className="font-semibold text-pink-600">Authors:</span>{" "}
                    {publication.authors}
                  </p>
                  <p>
                    <span className="font-semibold text-pink-600">Venue:</span>{" "}
                    {publication.venue}
                  </p>
                  {publication.acceptanceRate && (
                    <p>
                      <span className="font-semibold text-pink-600">Note:</span>{" "}
                      {publication.acceptanceRate}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-lg text-gray-600">
              Interested in collaboration or discussing these works?{" "}
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
