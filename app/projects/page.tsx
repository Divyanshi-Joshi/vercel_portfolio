"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import ProjectCard from "@/components/project-card"

const projects = [
  {
    title: "NER using Agentic AI",
    image: "/images/NER.png",
    description:
      "An Intelligent Multi-Agent NER (Named Entity Recognition) Framework that uses LLMs orchestrated via LangGraph to achieve SOTA zero-shot entity extraction",
    github: "https://github.com/Divyanshi-Joshi/NER-using-Agentic-AI",
  },

  {
    title: "Duckling Game",
    image: "/images/duckling.png",
    description:
      "A fun and interactive game that teaches programming concepts through a series of levels and challenges built using React.",
    github: "https://github.com/Divyanshi-Joshi/Duckling_Game",
  },

  {
    title: "KitchenPal", 
    image: "/images/kitchen.jpg",
    description:
      "It is a Kitchen Management Application which provides a comprehensive solution for efficient kitchen management, meal planning, grocery organization and waste reduction.",
    github: "https://github.com/Divyanshi-Joshi/KitchenPal",
  },

  {
    title: "VisionAssist",
    image: "/images/visionassist.png", 
    description:
      "A computer vision based machine learning project which empowers the blind with Object Detection, Recognition and Spatial Localization in indoor spaces like rooms through audio input-output",
    github: "https://github.com/Divyanshi-Joshi/VisionAssist",
  },
  {
    title: "CropCare",
    image: "/images/cropcare.png",
    description:
      "An app for assisting farmers by disease detection and connecting them to experts to get instant and refined solutions",
    github: "https://github.com/Divyanshi-Joshi/CropCare",
  },
  {
    title: "Anomaly Detection",
    image:
      "/images/anomaly.jpg",
    description:
      "This project contains a comprehensive study and implementation of various machine learning techniques for anomaly detection by tackling a real life problem - credit card fraud detection",
    github: "https://github.com/Divyanshi-Joshi/Anomaly-Detection",
  },
  {
    title: "Spacecraft Collision Prediction",
    image: "/images/space.jpg",
    description:
      "This project utilized RNN and CNN to enhance spacecraft collision prediction accuracy by analyzing historical conjunction data (CDMs) provided by the European Space Agency.",
    github: "https://github.com/Divyanshi-Joshi/Spacecraft_Collision_Avoidance_Prediction",
  },
  {
    title: "Dog Breed Classification",
    image: "/images/dog.jpg",
    description: "Utilized a pre trained Image Classifier to classify various dog breeds.",
    github: "https://github.com/Divyanshi-Joshi/Identifying-Dog-Breeds-using-a-Pre-trained-Image-Classifier",
  },
  {
    title: "Diamond UI",
    image: "/images/diamond.png",
    description: "Developed a UI for the diamonds game using the pygame python module",
    github: "https://github.com/Divyanshi-Joshi/WE-Module3/tree/main/Diamond_Game_UI_Development",
  },
]

export default function Projects() {
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
      </div>

      {/* Navigation */}
      <Navigation activeIcon="settings" />

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
            <span className="text-black">MY</span> <span className="text-secondary">PROJECTS</span>
          </motion.h1>
          <motion.p 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-600 mb-12"
          >
            Here is some of my work that I&apos;ve done in various programming languages.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 3) }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {/* GitHub Link Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 * (projects.length + 3) }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 mb-4">
              For more projects, check out my GitHub{" "}
              <a
                href="https://github.com/Divyanshi-Joshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-300 underline"
              >
                HERE!
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
