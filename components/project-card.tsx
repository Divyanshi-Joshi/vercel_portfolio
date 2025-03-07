import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  image: string
  description: string
  github: string
}

export default function ProjectCard({ title, image, description, github }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center p-4">
            <p className="mb-4 text-sm">{description}</p>
            <Link
              href={github}
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  )
}

