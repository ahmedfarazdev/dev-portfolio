import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // In a real implementation, you would fetch this data from your CMS or database
  const blogPosts = [
    { id: 1, title: "Building Accessible React Components", date: "2023-06-15", lastUpdated: "2023-09-01" },
    { id: 2, title: "Optimizing API Performance with GraphQL", date: "2023-05-28", lastUpdated: null },
    { id: 3, title: "The Future of Web Development", date: "2023-04-10", lastUpdated: "2023-08-15" },
    { id: 4, title: "TypeScript Best Practices", date: "2023-03-22", lastUpdated: null },
    { id: 5, title: "Mastering CSS Grid", date: "2023-02-18", lastUpdated: null },
    { id: 6, title: "Containerization with Docker", date: "2023-01-05", lastUpdated: "2023-07-20" },
  ]

  const projects = [
    { id: 1, title: "Project Alpha", date: "2023-05-10", lastUpdated: null },
    { id: 2, title: "Project Beta", date: "2023-04-15", lastUpdated: "2023-08-01" },
    { id: 3, title: "Project Gamma", date: "2023-03-20", lastUpdated: null },
    { id: 4, title: "Project Delta", date: "2023-02-25", lastUpdated: null },
    { id: 5, title: "Project Epsilon", date: "2023-01-30", lastUpdated: "2023-07-15" },
    { id: 6, title: "Project Zeta", date: "2023-01-05", lastUpdated: null },
  ]

  const baseUrl = "https://gopherz.online"

  // Static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Add blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.lastUpdated ? new Date(post.lastUpdated) : new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Add projects
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: project.lastUpdated ? new Date(project.lastUpdated) : new Date(project.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...routes, ...blogRoutes, ...projectRoutes]
}

