type EventParams = {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: any
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (command: "event" | "config" | "set", action: string, params?: EventParams) => void
  }
}

export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-XXXXXXXXXX", {
      page_path: url,
    })
  }
}

export function trackEvent(
  action: string,
  category?: string,
  label?: string,
  value?: number,
  additionalParams?: Record<string, any>,
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...additionalParams,
    })
  }
}

