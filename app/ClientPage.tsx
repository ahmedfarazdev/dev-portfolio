"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import NewsletterSignup from "@/components/newsletter-signup"

export default function ClientPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const projects = [
    {
      id: 1,
      title: "PROJECT ALPHA",
      description: "A full-stack application with real-time data synchronization and advanced user authentication.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "WebSockets"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 2,
      title: "PROJECT BETA",
      description: "An AI-powered content management system with natural language processing capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Python", "TensorFlow", "AWS"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 3,
      title: "PROJECT GAMMA",
      description: "A responsive e-commerce platform with integrated payment processing and inventory management.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Express", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  const articles = [
    {
      id: 1,
      title: "Building Accessible React Components",
      excerpt:
        "Learn how to create React components that are accessible to all users, including those with disabilities.",
      date: "June 15, 2023",
      readTime: "8 min read",
      category: "React",
    },
    {
      id: 2,
      title: "Optimizing API Performance with GraphQL",
      excerpt: "Discover strategies to improve API performance using GraphQL and effective caching techniques.",
      date: "May 28, 2023",
      readTime: "12 min read",
      category: "Backend",
    },
  ]

  return (
    <div ref={containerRef} className="relative">
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 grid-background"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-primary/20 z-0"></div>
        </div>

        {/* <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </motion.div> */}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl text-reveal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="overflow-hidden mb-4 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
              className="flex gap-4"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <Badge className="bg-primary text-white px-4 py-1 text-sm font-body">BACKEND DEVELOPER</Badge>
                <Badge className="bg-transparent border-2 border-primary text-primary px-4 py-1 text-sm font-body">GO</Badge>
                <Badge className="bg-primary text-white px-4 py-1 text-sm font-body">TypeScript</Badge>
              </motion.div>
              
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-6xl md:text-8xl font-display tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                BUILDING <span className="text-primary">DIGITAL</span> FOUNDATIONS
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/80 font-light max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I solve complex backend challenges with Go and reveal my proven approaches in a newsletter worth your inbox space.
              </motion.p>

              <motion.div
                className="pt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white border-none rounded-none px-8 py-6 text-lg font-body"
                >
                  <Link href="/blog">
                    MY NEWSLETTER <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-none px-8 py-6 text-lg font-body"
                >
                  <Link href="/contact">GET IN TOUCH</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        

        <div className="absolute bottom-10 left-0 w-full flex justify-center">
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <h2 className="text-5xl md:text-6xl font-display tracking-tight">
              SELECTED <span className="text-primary">WORK</span>
            </h2>
            <Link href="/projects" className="group flex items-center text-white hover:text-primary transition-colors">
              <span className="mr-2 font-medium">VIEW ALL PROJECTS</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card relative overflow-hidden group h-[400px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-black/70 text-white text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display mb-2">{project.title}</h3>
                    <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex gap-4">
                      <Link
                        href={project.demoUrl}
                        className="text-white hover:text-primary flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </Link>
                      <Link
                        href={project.repoUrl}
                        className="text-white hover:text-primary flex items-center gap-1 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden diagonal-box">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display tracking-tight mb-6">
              SKILLS & <span className="text-primary">EXPERTISE</span>
            </h2>
            <p className="text-xl text-white/80">
              A decade of experience building digital products and solving complex problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-black/50 backdrop-blur-sm p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-display mb-4">FRONTEND</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary/20 text-white">React</Badge>
                <Badge className="bg-primary/20 text-white">Next.js</Badge>
                <Badge className="bg-primary/20 text-white">TypeScript</Badge>
                <Badge className="bg-primary/20 text-white">Tailwind CSS</Badge>
                <Badge className="bg-primary/20 text-white">Framer Motion</Badge>
              </div>
              <p className="text-white/70">
                Creating responsive, accessible, and performant user interfaces with modern technologies.
              </p>
            </motion.div>

            <motion.div
              className="bg-black/50 backdrop-blur-sm p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-display mb-4">BACKEND</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary/20 text-white">Node.js</Badge>
                <Badge className="bg-primary/20 text-white">Express</Badge>
                <Badge className="bg-primary/20 text-white">Python</Badge>
                <Badge className="bg-primary/20 text-white">Django</Badge>
                <Badge className="bg-primary/20 text-white">GraphQL</Badge>
              </div>
              <p className="text-white/70">
                Building robust APIs, services, and data pipelines that power modern applications.
              </p>
            </motion.div>

            <motion.div
              className="bg-black/50 backdrop-blur-sm p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-2xl font-display mb-4">DEVOPS</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary/20 text-white">Docker</Badge>
                <Badge className="bg-primary/20 text-white">AWS</Badge>
                <Badge className="bg-primary/20 text-white">CI/CD</Badge>
                <Badge className="bg-primary/20 text-white">Vercel</Badge>
                <Badge className="bg-primary/20 text-white">Netlify</Badge>
              </div>
              <p className="text-white/70">
                Deploying and maintaining scalable infrastructure for modern web applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <h2 className="text-5xl md:text-6xl font-display tracking-tight">
              LATEST <span className="text-primary">ARTICLES</span>
            </h2>
            <Link href="/blog" className="group flex items-center text-white hover:text-primary transition-colors">
              <span className="mr-2 font-medium">READ ALL ARTICLES</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-black/50 backdrop-blur-sm border border-white/10 p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary text-white">{article.category}</Badge>
                  <span className="text-sm text-white/60">{article.date}</span>
                  <span className="text-sm text-white/60">•</span>
                  <span className="text-sm text-white/60">{article.readTime}</span>
                </div>
                <h3 className="text-2xl font-display mb-3">{article.title}</h3>
                <p className="text-white/80 mb-6">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.id}`}
                  className="text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-display tracking-tight mb-6">
                WEEKLY <span className="text-primary">INSIGHTS</span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-white/80">
                Subscribe to my newsletter for exclusive content on Go backend development, and technical best practices.
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <p className="text-white/80">Weekly Go programming tips and optimizations</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <p className="text-white/80">Early access to backend design tutorials</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <p className="text-white/80">Exclusive system scaling insights</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-primary"></div>

              <NewsletterSignup />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden diagonal-box-reverse">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-display tracking-tight mb-6 text-white">
              LET'S WORK <span className="text-stroke-white">TOGETHER</span>
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
            <Button
              asChild
              className="bg-black hover:bg-black/90 text-white border-none rounded-none px-8 py-6 text-lg font-body"
            >
              <Link href="/contact">GET IN TOUCH</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black relative overflow-hidden border-t border-white/10">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-6xl font-display text-stroke opacity-30">
              DEVELOPER • DESIGNER • CREATOR • PROBLEM SOLVER • DEVELOPER • DESIGNER • CREATOR • PROBLEM SOLVER •
            </span>
          </div>
          <div className="marquee-content">
            <span className="text-6xl font-display text-stroke opacity-30">
              DEVELOPER • DESIGNER • CREATOR • PROBLEM SOLVER • DEVELOPER • DESIGNER • CREATOR • PROBLEM SOLVER •
            </span>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <Link href="/" className="text-white font-display text-3xl tracking-wider">
                AHMED<span className="text-primary">FARAZ</span>
              </Link>
              {/* <p className="text-white/60 mt-2">© {new Date().getFullYear()} All rights reserved.</p> */}
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/ahmedfarazdev"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://x.com/dev_ahmedfaraz"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/ahmedfarazdev/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a href="mailto:ahmedfarazdev@gmail.com" className="text-white hover:text-primary transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

