import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Ahmed Faraz | Backend Developer",
  description:
    "I solve complex backend challenges with Go and reveal my proven approaches in a newsletter worth your inbox space.",
  keywords: ["backed developer","golang", "cuncurrency", "go developer", "Node.js", "web development", "portfolio", "JavaScript"],
  robots: "index, follow",
  alternates: {
    canonical: "https://gopherz.online",
  },
  openGraph: {
    type: "website",
    url: "https://gopherz.online",
    title: "Ahmed Faraz | Backend Developer",
    description:
      "I solve complex backend challenges with Go and reveal my proven approaches in a newsletter worth your inbox space.",
    siteName: "Ahmed Faraz Portfolio",
    images: [
      {
        url: "https://gopherz.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Faraz | Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Faraz | Backend Developer",
    description:
    "I solve complex backend challenges with Go and reveal my proven approaches in a newsletter worth your inbox space.",
    images: ["https://gopherz.online/twitter-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#E04000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
      <body className="bg-black text-white font-body min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          {children}
        </ThemeProvider>

        {/* Website Schema */}
        <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Ahmed Faraz - Backend Developer",
            "url": "https://gopherz.online",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://gopherz.online/blog?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
        </Script>

        {/* Person Schema */}
        <Script id="schema-person" type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "DevName",
            "url": "https://gopherz.online",
            "image": "https://gopherz.online/profile-photo.jpg",
            "sameAs": [
              "https://github.com/ahmedfarazdev",
              "https://x.com/dev_ahmedfaraz",
              "https://www.linkedin.com/in/ahmedfarazdev/"
            ],
            "jobTitle": "Backend Developer",
            "description": "Backend developer specializing in Go, Golang, React, Node.js, and modern web technologies."
          }
        `}
        </Script>

        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'