import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LatestArticles() {
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
  ]

  return (
    <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card key={article.id} className="flex flex-col h-full">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={`Featured image for article: ${article.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
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
  )
}

