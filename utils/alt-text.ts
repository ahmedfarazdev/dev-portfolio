type ImageContext = {
  type: "project" | "blog" | "profile" | "decorative"
  subject?: string
  action?: string
  technology?: string[]
}

export function generateAltText(context: ImageContext): string {
  if (context.type === "decorative") {
    return ""
  }

  let altText = ""

  switch (context.type) {
    case "project":
      altText = `Screenshot of ${context.subject || "project"}`
      if (context.action) {
        altText += ` showing ${context.action}`
      }
      if (context.technology && context.technology.length > 0) {
        altText += ` built with ${context.technology.join(", ")}`
      }
      break
    case "blog":
      altText = `${context.subject || "Diagram"}`
      if (context.action) {
        altText += ` illustrating ${context.action}`
      }
      break
    case "profile":
      altText = `Profile photo of ${context.subject || "developer"}`
      break
  }

  return altText
}

