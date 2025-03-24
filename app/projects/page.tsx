import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Web Development Portfolio & Case Studies | Ahmed Faraz",
  description:
    "Explore my featured projects and case studies showcasing expertise in React, Node.js, and full-stack development.",
  alternates: {
    canonical: "https://gopherz.online/projects",
  },
  openGraph: {
    title: "Web Development Portfolio & Case Studies | Ahmed Faraz",
    description:
      "Explore my featured projects and case studies showcasing expertise in React, Node.js, and full-stack development.",
    url: "https://gopherz.online/projects",
    type: "website",
  },
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A full-stack application with real-time data synchronization and advanced user authentication.",
      longDescription:
        "This project showcases my ability to build complex applications with real-time features. I implemented WebSockets for live updates, JWT for secure authentication, and a responsive UI that works across all devices.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "MongoDB", "WebSockets"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "An AI-powered content management system with natural language processing capabilities.",
      longDescription:
        "This CMS uses machine learning to analyze and categorize content automatically. I built the frontend with Next.js for optimal performance and SEO, while the backend uses Python for the ML components.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Python", "TensorFlow", "AWS"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "A responsive e-commerce platform with integrated payment processing and inventory management.",
      longDescription:
        "This e-commerce solution provides a seamless shopping experience with fast page loads and smooth transitions. I implemented Stripe for secure payments and built a custom inventory system that updates in real-time.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Vue.js", "Express", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 4,
      title: "Project Delta",
      description: "A collaborative task management tool with drag-and-drop functionality and team permissions.",
      longDescription:
        "This project helps teams organize their work efficiently with intuitive task boards. I focused on creating a smooth drag-and-drop experience and implemented a robust permissions system for team collaboration.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 5,
      title: "Project Epsilon",
      description: "A data visualization dashboard with interactive charts and real-time analytics.",
      longDescription:
        "This dashboard makes complex data accessible through interactive visualizations. I used D3.js for custom charts and implemented WebSockets to ensure all data updates in real-time without page refreshes.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Svelte", "D3.js", "Express", "Socket.io"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 6,
      title: "Project Zeta",
      description: "A progressive web app for fitness tracking with offline capabilities and sync.",
      longDescription:
        "This PWA allows users to track their workouts even without an internet connection. I implemented service workers for offline functionality and IndexedDB for local data storage that syncs when connectivity is restored.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "PWA", "IndexedDB", "Node.js"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
          <p className="text-xl text-muted-foreground">A collection of my work, side projects, and experiments.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">{project.longDescription}</p>
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
      </div>
    </div>
  )
}

