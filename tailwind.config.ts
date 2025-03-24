import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E04000",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#A0A0A0",
        },
        accent: {
          DEFAULT: "#E04000",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#0D0D0D",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#0D0D0D",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "rotate-in": {
          "0%": { transform: "rotate(-10deg)", opacity: "0" },
          "100%": { transform: "rotate(0)", opacity: "1" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "70%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "text-reveal": {
          "0%": {
            "clip-path": "polygon(0 0, 0 0, 0 100%, 0 100%)",
            transform: "translateX(10px)",
          },
          "100%": {
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-out-right": "slide-out-right 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "rotate-in": "rotate-in 0.6s ease-out",
        "bounce-in": "bounce-in 0.6s ease-out",
        marquee: "marquee 25s linear infinite",
        "text-reveal": "text-reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "#FFFFFF",
            h1: {
              color: "#FFFFFF",
              fontFamily: "'Bebas Neue', sans-serif",
            },
            h2: {
              color: "#FFFFFF",
              fontFamily: "'Bebas Neue', sans-serif",
            },
            h3: {
              color: "#FFFFFF",
              fontFamily: "'Bebas Neue', sans-serif",
            },
            h4: {
              color: "#FFFFFF",
              fontFamily: "'Bebas Neue', sans-serif",
            },
            a: {
              color: "#E04000",
              "&:hover": {
                color: "#FF6D3F",
              },
            },
            code: {
              backgroundColor: "#1A1A1A",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
              color: "#E04000",
              fontFamily: "'JetBrains Mono', monospace",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "#1A1A1A",
              borderRadius: "0.5rem",
              padding: "1rem",
              overflow: "auto",
              fontFamily: "'JetBrains Mono', monospace",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config

