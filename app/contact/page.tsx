import ContactPageClient from "./ContactPageClient"

export const metadata = {
  title: "Contact DevName | Hire a Full-Stack Developer",
  description:
    "Get in touch for project inquiries, collaboration opportunities, or to discuss your web development needs.",
  alternates: {
    canonical: "https://gopherz.online/contact",
  },
  openGraph: {
    title: "Contact DevName | Hire a Full-Stack Developer",
    description:
      "Get in touch for project inquiries, collaboration opportunities, or to discuss your web development needs.",
    url: "https://gopherz.online/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}

