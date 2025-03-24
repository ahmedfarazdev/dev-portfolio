import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A full-stack application with real-time data synchronization and advanced user authentication.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "MongoDB", "WebSockets"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "An AI-powered content management system with natural language processing capabilities.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Python", "TensorFlow", "AWS"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "A responsive e-commerce platform with integrated payment processing and inventory management.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Vue.js", "Express", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  return (
    <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden group">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`Screenshot of ${project.title} project showcasing ${project.tags.join(", ")}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href={project.repoUrl}>
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={project.demoUrl}>
                Live Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

