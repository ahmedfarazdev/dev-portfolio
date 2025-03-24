import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail } from "lucide-react"

export const metadata = {
  title: "About Ahmed Faraz | Backend Developer Background & Skills",
  description:
    "Learn about my experience, skills, and approach to web development. Specializing in full-stack development with 5+ years of industry experience.",
  alternates: {
    canonical: "https://gopherz.online/about",
  },
  openGraph: {
    title: "About Ahmed Faraz | Backend Developer Background & Skills",
    description:
      "Learn about my experience, skills, and approach to web development. Specializing in full-stack development with 5+ years of industry experience.",
    url: "https://gopherz.online/about",
    type: "website",
  },
}

export default function AboutPage() {
  const skills = [
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Vercel", "Kafka, RabbitMQ"] },
    { category: "Backend", items: ["Go (Golang)", "RESTful API", "Microservices", "gRPC", "GraphQL"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Jest"] },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16 xl:grid-cols-[1fr_400px]">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
            <p className="mt-4 text-xl text-muted-foreground">
            Go architect crafting powerful backends and sharing insider knowledge through my must-read developer newsletter.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">My Journey</h2>
            <p className="leading-relaxed">
              I'm a developer with over 5 years of experience building web applications and digital products. My journey
              began with a curiosity about how websites work, which led me to learn HTML and CSS. As my skills evolved,
              I discovered my passion for creating intuitive user experiences and solving complex problems through code.
            </p>
            <p className="leading-relaxed">
              Throughout my career, I've worked with startups and established companies, helping them build scalable
              applications and implement efficient development workflows. I'm constantly learning and exploring new
              technologies to stay at the forefront of web development.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, you can find me reading science fiction, writing jokes, or experimenting
              with new business ideas on internet.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">My Approach</h2>
            <p className="leading-relaxed">
              I believe in creating software that not only functions flawlessly but also provides an exceptional user
              experience. My approach combines technical expertise with a deep understanding of user needs and business
              goals.
            </p>
            <p className="leading-relaxed">
              I'm passionate about writing clean, maintainable code and implementing best practices in every project. I
              value collaboration and clear communication, working closely with designers, product managers, and
              stakeholders to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="sticky top-24">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border-8 border-background bg-muted">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Developer Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Currently</h3>
                  <p className="text-sm text-muted-foreground">
                    Working as a Senior Developer at <span className="font-medium">Marvellex Software Solutions</span>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">Gulberg Greens, Islamabad</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

