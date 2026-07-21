"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { BookOpen, Users, FileText, Award } from "lucide-react"

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  acceptanceRate?: string;
}

const publications: Publication[] = [
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

const highlightName = (authors: string, name: string) => {
  const parts = authors.split(new RegExp(`(${name})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === name.toLowerCase() ? (
          <span key={i} className="font-bold text-pink-600 bg-pink-50 px-1 rounded">{part}</span>
        ) : (
          part
        )
      )}
    </span>
  );
};

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

          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100 hover:border-pink-300 hover:shadow-[0_8px_30px_rgb(236,72,153,0.1)] transition-all duration-500 overflow-hidden"
              >
                {/* Decorative background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-pink-100 rounded-xl text-pink-500 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 shrink-0 mt-1">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                      {publication.title}
                    </h2>
                  </div>

                  <div className="space-y-4 text-sm md:text-base text-gray-700 ml-2 md:ml-14">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        {highlightName(publication.authors, "Divyanshi Joshi")}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                      <p className="font-medium text-gray-800">
                        {publication.venue}
                      </p>
                    </div>

                    {publication.acceptanceRate && (
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold border border-amber-200">
                          {publication.acceptanceRate}
                        </span>
                      </div>
                    )}
                  </div>
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
