import Link from "next/link"
import { Linkedin, Gitlab, Github } from "lucide-react"

interface SocialButtonProps {
  label: string
  icon: string
  href: string
}

export default function SocialButton({ label, icon, href }: SocialButtonProps) {
  return (
    <Link
      href={href}
      className="px-6 py-2 bg-pink-500 text-white rounded-full flex items-center gap-2 hover:bg-pink-600 transition-colors"
    >
      {label}
      <span>
        {icon === "in" && <Linkedin size={16} />}
        {icon === "gitlab" && <Gitlab size={16} />}
        {icon === "github" && <Github size={16} />}
      </span>
    </Link>
  )
}

