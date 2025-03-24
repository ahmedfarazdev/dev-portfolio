"use client"

import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Script from "next/script"
import Breadcrumbs from "@/components/breadcrumbs"
import LastUpdated from "@/components/last-updated"

export default function BlogPostClientPage({ params }: { params: { id: string } }) {
  // This would normally fetch the specific blog post from an API or CMS
  const article = {
    id: params.id,
    title: "Building Accessible React Components: A Comprehensive Guide",
    excerpt:
      "Learn how to create React components that are accessible to all users, including those with disabilities.",
    content: `
      <p>Accessibility is a crucial aspect of web development that ensures everyone, including people with disabilities, can use and navigate your website effectively. In React, building accessible components requires attention to detail and following best practices.</p>
      
      <h2>Why Accessibility Matters</h2>
      <p>Web accessibility is not just a nice-to-have feature; it's essential for several reasons:</p>
      <ul>
        <li>It ensures your application is usable by everyone, regardless of their abilities</li>
        <li>It improves the overall user experience for all users</li>
        <li>It's often a legal requirement in many countries</li>
        <li>It can improve your SEO and reach a wider audience</li>
      </ul>
      
      <h2>Key Principles for Accessible React Components</h2>
      
      <h3>1. Semantic HTML</h3>
      <p>Always start with proper semantic HTML elements. React allows you to use all standard HTML elements, so take advantage of them:</p>
      <pre><code>
      {/* Bad */}
      <div onClick={handleClick}>Click me</div>
      
      {/* Good */}
      <button onClick={handleClick}>Click me</button>
      </code></pre>
      
      <h3>2. Keyboard Navigation</h3>
      <p>Ensure all interactive elements are accessible via keyboard navigation. This includes:</p>
      <ul>
        <li>Using proper focus management</li>
        <li>Implementing keyboard event handlers</li>
        <li>Ensuring a visible focus indicator</li>
      </ul>
      
      <h3>3. ARIA Attributes</h3>
      <p>When HTML semantics aren't enough, use ARIA (Accessible Rich Internet Applications) attributes to enhance accessibility:</p>
      <pre><code>
      <button
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div id="dropdown-menu" hidden={!isOpen}>
        {/* Menu items */}
      </div>
      </code></pre>
      
      <h3>4. Color Contrast</h3>
      <p>Ensure sufficient color contrast between text and background to make content readable for users with visual impairments. Tools like the WebAIM Contrast Checker can help verify your color choices.</p>
      
      <h2>Building an Accessible Form Component</h2>
      <p>Let's look at how to build an accessible form input component in React:</p>
      <pre><code>
      function AccessibleInput({ id, label, error, ...props }) {
        return (
          <div>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              aria-invalid={!!error}
              aria-describedby={error ? \`\${id}-error\` : undefined}
              {...props}
            />
            {error && (
              <div id={\`\${id}-error\`} className="error">
                {error}
              </div>
            )}
          </div>
        );
      }
      </code></pre>
      
      <h2>Testing Accessibility</h2>
      <p>Always test your components for accessibility. Some useful tools include:</p>
      <ul>
        <li>React's built-in ESLint plugin with jsx-a11y</li>
        <li>Browser extensions like axe DevTools</li>
        <li>Screen readers like NVDA or VoiceOver</li>
        <li>Keyboard-only navigation testing</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building accessible React components requires intentionality and awareness, but the benefits are substantial. By following these principles, you'll create applications that are usable by everyone, regardless of their abilities.</p>
      
      <p>Remember that accessibility is not a one-time task but an ongoing process. Regularly test and improve your components to ensure they remain accessible as your application evolves.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    date: new Date(2023, 5, 15),
    readTime: "8 min read",
    category: "React",
    author: {
      name: "DevName",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Senior Frontend Developer",
    },
    relatedPosts: [
      {
        id: 2,
        title: "Optimizing API Performance with GraphQL and Caching",
        category: "Backend",
      },
      {
        id: 4,
        title: "TypeScript Best Practices for Large-Scale Applications",
        category: "TypeScript",
      },
      {
        id: 5,
        title: "Mastering CSS Grid: Advanced Layout Techniques",
        category: "Web Dev",
      },
    ],
    lastUpdated: new Date(2024, 0, 20),
  }

  // Add this inside the BlogPostPage component, before the return statement
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    image: `https://gopherz.online${article.image}`,
    datePublished: article.date.toISOString(),
    dateModified: article.date.toISOString(),
    author: {
      "@type": "Person",
      name: "DevName",
      url: "https://gopherz.online/about",
    },
    publisher: {
      "@type": "Person",
      name: "DevName",
      logo: {
        "@type": "ImageObject",
        url: "https://gopherz.online/logo.png",
      },
    },
    description: article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gopherz.online/blog/${article.id}`,
    },
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: article.category, href: `/blog/category/${article.category.toLowerCase()}` },
          { label: article.title },
        ]}
      />
      {/* Then add this inside the return statement, right after the opening <div> tag */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <Badge variant="outline" className="mb-4">
            {article.category}
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">{article.title}</h1>

          <LastUpdated
            publishDate={article.date.toISOString()}
            updateDate={article.lastUpdated ? article.lastUpdated.toISOString() : null}
          />

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDistanceToNow(article.date, { addSuffix: true })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="relative aspect-[2/1] overflow-hidden rounded-lg mb-8">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={article.author.avatar || "/placeholder.svg"}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium">{article.author.name}</div>
              <div className="text-sm text-muted-foreground">{article.author.title}</div>
            </div>
            <div className="ml-auto">
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {article.relatedPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    {post.category}
                  </Badge>
                  <Link href={`/blog/${post.id}`} className="font-medium hover:underline">
                    {post.title}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

