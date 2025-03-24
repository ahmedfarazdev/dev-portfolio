import type { Metadata } from "next"
import BlogPostClientPage from "./BlogPostClientPage"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // This would normally fetch the specific blog post from an API or CMS
  const article = {
    id: params.id,
    title: "Building Accessible React Components: A Comprehensive Guide",
    excerpt:
      "Learn how to create React components that are accessible to all users, including those with disabilities.",
    date: new Date(2023, 5, 15),
    category: "React",
  }

  return {
    title: `${article.title} | DevName's Blog`,
    description: article.excerpt,
    alternates: {
      canonical: `https://yourdomainname.com/blog/${article.id}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date.toISOString(),
      authors: ["DevName"],
      tags: [article.category, "Web Development", "Accessibility"],
      url: `https://yourdomainname.com/blog/${article.id}`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPostClientPage params={params} />
}

