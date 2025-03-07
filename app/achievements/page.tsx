"use client"

import Navigation from "@/components/navigation"
import Image from "next/image"
import { motion } from "framer-motion"

const achievements = [
  {
    id: 1,
    title: "ISRO ML Internship",
    description:
      "Selected as a Machine Learning Intern at Indian Research Space Organisation's Satish Dhawan Space Centre (SDSC SHAR), the spaceport of ISRO. Working under a senior scientist, I am researching solutions for mitigating space debris and collision risks with active satellites.",
    image:
      "/images/ISRO.png",
  },
  {
    id: 2,
    title: "TalentSprint Women Engineers Program",
    description:
      "Selected as one of the top 1% of scholars from over 22,000+ eligible applicants across the country for this program offered by TalentSprint, supported by Google",
    image:
      "/images/talentsprint.png",
  },
  {
    id: 3,
    title: "AWS AI ML Scholarship Program",
    description:
      "Selected as a recipient of the 2024 AWS AI & ML Scholarship! I am one of 1,000 students worldwide to receive a full scholarship for the Udacity AI Programming with Python Nanodegree program.",
    image:
      "/images/AWS.jpg",
  },
  {
    id: 4,
    title: "Research Head, GDSC MAIT",
    description:
      "Selected for the position of Research Head in Google Developers Student Club MAIT as part of the Core Team in our college. I managed written communications for a community of over 3,000+ followers and also helped in organizing and hosting various events",
    image: "/images/mait.png",
  },
  {
    id: 5,
    title: "Coddess.Cafe Mentorship Program",
    description:
      "Selected as a mentee out of 800+ talented applicants who applied for this program which provides mentorship and guidance to aspiring women in STEM field.",
    image: "/images/codess.jpg",
  },
  {
    id: 6,
    title: "Coordinator, TechXTract",
    description:
      "Selected as the Coordinator for this official society of the CST Department of our college wherein I help in coordinating various activities and events",
    image: "/images/tech.jpg",
  },
]

export default function Achievements() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background with light mint gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        <div className="h-full w-full bg-gradient-to-br from-mint to-white"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-light-green shape-triangle-top-left"></div>
      </motion.div>

      {/* Navigation */}
      <Navigation activeIcon="trophy" />

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
            <span className="text-black">MY</span> <span className="text-secondary">ACHIEVEMENTS</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="achievement-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 h-full flex flex-col w-[85%] mx-auto"
              >
                <div className="relative p-4 h-[300px] w-full">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="p-4 bg-mint border-t-4 border-secondary flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  )
}
