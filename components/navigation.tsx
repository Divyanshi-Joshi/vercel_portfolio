"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Settings, Trophy, Calendar, Contact, Briefcase, BookOpen } from "lucide-react"

interface NavigationProps {
  activeIcon: "home" | "settings" | "trophy" | "calendar" | "briefcase" | "contact" | "book"
}

export default function Navigation({ activeIcon }: NavigationProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const icons = [
    {
      name: "home",
      icon: Home,
      label: "Home",
      href: "/",
      color: activeIcon === "home" ? "bg-secondary" : "bg-gray-700",
    },
    {
      name: "briefcase",
      icon: Briefcase,
      label: "Work Experience",
      href: "/internships",
      color: activeIcon === "briefcase" ? "bg-secondary" : "bg-gray-700",
    },
    {
      name: "book",
      icon: BookOpen,
      label: "Publications",
      href: "/publications",
      color: activeIcon === "book" ? "bg-secondary" : "bg-gray-700",
    },
    {
      name: "settings",
      icon: Settings,
      label: "Projects",
      href: "/projects",
      color: activeIcon === "settings" ? "bg-secondary" : "bg-gray-700",
    },
    {
      name: "trophy",
      icon: Trophy,
      label: "Achievements",
      href: "/achievements",
      color: activeIcon === "trophy" ? "bg-secondary" : "bg-gray-700",
    },
    {
      name: "calendar",
      icon: Calendar,
      label: "Participations",
      href: "/participations",
      color: activeIcon === "calendar" ? "bg-secondary" : "bg-gray-700",
    },
    {
      name: "contact",
      icon: Contact,
      label: "Contact",
      href: "/contact",
      color: activeIcon === "contact" ? "bg-secondary" : "bg-gray-700",
    },
  ]

  return (
    <div className="fixed z-50 flex gap-2 md:gap-4 top-8 right-8">
      {icons.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`nav-icon ${item.color} text-white rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.7)] relative flex items-center justify-center`}
          onMouseEnter={() => setHoveredIcon(item.name)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div className="p-3 md:p-4 flex items-center justify-center">
            <item.icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span 
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
                hoveredIcon === item.name ? 'max-w-[200px] ml-2 opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              {item.label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
