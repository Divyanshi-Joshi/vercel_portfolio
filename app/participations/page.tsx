"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"
import { motion } from "framer-motion"

const participations = [
  {
    id: 1,
    title: "IIIT Hyderabad Bootcamp",
    description:
      "Attended a 3-week long bootcamp as part of the Women Engineers Program wherein I enhanced my technical as well as corporate skills.",
    image:
      "/images/We.jpg",
  },
  {
    id: 2,
    title: "Google Arcade Facilitator Program", 
    description:
      "Under this two month long program, I completed hands-on labs focused on GCP like Compute Engine, Kubernetes Engine, BigQuery, Firebase, etc. I also learnt to setup, manage and administer relational PostgreSQL, MySQL and SQL Server databases in cloud.",
    image:
      "/images/arcade.png",
  },
  {
    id: 3,
    title: "Google Immersion Week",
    description:
      "Participated in a week-long immersion program, gaining exposure to various aspects of technology, teamwork and engaged in sessions on Intelligent Automation, AI for social good and Machine Learning, enhancing my understanding of the industry and its demands.",
    image:
      "/images/immersion.jpg",
  },
  {
    id: 4,
    title: "IEEE MAIT Web3 & OpenSource",
    description:
      "Attended a hands on workshop on Web3 covering topics like Web3.0, decentralized identity, earning reputation through Open Source contributions, Fastn Framework project development, smart contract building, etc.",
    image: "/images/ieee.jpeg",
  },
  {
    id: 5,
    title: "Smart India Hackathon (SIH)",
    description:
      "Participated in this hackathon wherein me and my team worked on developing an app to reduce the problems faced by farmers in agriculture",
    image: "/images/sih.webp",
  },
  {
    id: 6,
    title: "Google Cloud Study Jam",
    description:
      "Worked on Labs on Google Cloud Computing Foundations and Generative AI and learnt the fundamental concepts & skills required to navigate and work within Google Cloud like networking and security.",
    image: "/images/jam.webp",
  },
  {
    id: 7,
    title: "Google Devfest New Delhi",
    description:
      "This opportunity provided me with the privilege of connecting with fellow Tech Enthusiasts and exploring different technologies like Cybersecurity, Social Engineering, DevSecOps, LLMs using TensorFlow, Credential Management System, etc",
    image: "/images/devfest.jpg",
  },
  {
    id: 8,
    title: "AI for India 2.0",
    description:
      "Successfully participated and completed the online course on AI & Machine Learning provided by Skill India in partnership with Guvi",
    image: "/images/AI.png",
  },
]

export default function Participations() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <Navigation activeIcon="calendar" />

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
            className="text-4xl md:text-6xl font-bold text-center mb-4 md:mb-8"
          >
            <span className="text-black">MY</span> <span className="text-secondary">PARTICIPATIONS</span>
          </motion.h1>

          <motion.p 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-base md:text-lg mb-8 md:mb-16"
          >
            Here is some of the events and extra curricular activities in which I participated.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {participations.map((participation, index) => (
              <motion.div
                key={participation.id}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="participation-card rounded-lg overflow-hidden shadow-lg group relative"
              >
                <div className="h-48 md:h-64 relative">
                  <Image
                    src={participation.image || "/placeholder.svg"}
                    alt={participation.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                    <h3 className="text-xl font-bold mb-4">{participation.title}</h3>
                    <p className="text-center text-sm md:text-base">{participation.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  )
}
