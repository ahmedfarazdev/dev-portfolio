import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { ArrowRight, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Web Development Insights & Tutorials | Ahmded Faraz's Blog",
  description:
    "Practical insights, tutorials, and best practices on web development, React, Node.js, and modern JavaScript frameworks.",
  alternates: {
    canonical: "https://gopherz.online/blog",
  },
  openGraph: {
    title: "Web Development Insights & Tutorials | DevName's Blog",
    description:
      "Practical insights, tutorials, and best practices on web development, React, Node.js, and modern JavaScript frameworks.",
    url: "https://gopherz.online/blog",
    type: "website",
  },
}

export default function BlogPage() {
  const categories = ["All", "React", "JavaScript", "TypeScript", "Web Dev", "Backend", "DevOps", "Career"]

  const articles = [
    {
      id: 1,
      title: "Building Accessible React Components: A Comprehensive Guide",
      excerpt:
        "Learn how to create React components that are accessible to all users, including those with disabilities.",
      image: "/placeholder.svg?height=200&width=400",
      date: new Date(2023, 5, 15),
      readTime: "8 min read",
      category: "React",
    },
    {
      id: 2,
      title: "Optimizing API Performance with GraphQL and Caching",
      excerpt: "Discover strategies to improve API performance using GraphQL and effective caching techniques.",
      image: "/placeholder.svg?height=200&width=400",
      date: new Date(2023, 4, 28),
      readTime: "12 min read",
      category: "Backend",
    },
    {
      id: 3,
      title: "The Future of Web Development: What to Expect in 2024",
      excerpt: "Explore upcoming trends and technologies that will shape the future of web development.",
      image: "/placeholder.svg?height=200&width=400",
      date: new Date(2023, 3, 10),
      readTime: "10 min read",
      category: "Web Dev",
    },
    {
      id: 4,
      title: "TypeScript Best Practices for Large-Scale Applications",
      excerpt: "Learn how to effectively use TypeScript in large codebases to improve maintainability and reduce bugs.",
      image: "/placeholder.svg?height=200&width=400",
      date: new Date(2023, 2, 22),
      readTime: "15 min read",
      category: "TypeScript",
    },
    {
      id: 5,
      title: "Mastering CSS Grid: Advanced Layout Techniques",
      excerpt: "Take your CSS Grid skills to the next level with these advanced techniques for complex layouts.",
      image: "/placeholder.svg?height=200&width=400",
      date: new Date(2023, 1, 18),
      readTime: "9 min read",
      category: "Web Dev",
    },
    {
      id: 6,
      title: "Containerization with Docker: A Practical Guide",
      excerpt: "Learn how to use Docker to containerize your applications for consistent development and deployment.",
      image: "/placeholder.svg?height=200&width=400",
      date: new Date(2023, 0, 5),
      readTime: "11 min read",
      category: "DevOps",
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground">Thoughts, tutorials, and insights on web development.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <Badge key={category} variant={category === "All" ? "default" : "outline"} className="cursor-pointer">
                {category}
              </Badge>
            ))}
          </div>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search articles..." className="w-full pl-8 sm:w-[250px]" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{article.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(article.date, { addSuffix: true })}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-sm text-muted-foreground">{article.readTime}</div>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read Article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>
    </div>
  )
}

