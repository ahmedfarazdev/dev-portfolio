"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`
    }
  }, [cursorPosition])

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/projects" },
    { name: "WRITING", path: "/blog" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ]

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const menuItemVariants = {
    closed: { y: 50, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <>
      <div ref={cursorRef} className={`nav-indicator ${isHovering ? "visible" : ""}`} />

      <div className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-white font-display text-3xl tracking-wider"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            AHMED<span className="text-primary">FARAZ</span>
          </Link>

          <button
            onClick={toggleMenu}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white z-50"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-1/2 h-full border-r border-primary/20" />
                <div className="absolute top-0 left-1/4 w-1/2 h-full border-r border-primary/20" />
                <div className="absolute top-0 left-2/4 w-1/2 h-full border-r border-primary/20" />
                <div className="absolute top-0 left-3/4 w-1/2 h-full border-r border-primary/20" />

                <div className="absolute top-0 left-0 w-full h-1/2 border-b border-primary/20" />
                <div className="absolute top-1/4 left-0 w-full h-1/2 border-b border-primary/20" />
                <div className="absolute top-2/4 left-0 w-full h-1/2 border-b border-primary/20" />
                <div className="absolute top-3/4 left-0 w-full h-1/2 border-b border-primary/20" />
              </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col items-center md:items-start">
                <motion.div
                  className="mb-12 overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="h-1 bg-primary w-full" />
                </motion.div>

                <nav className="flex flex-col items-center md:items-start space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={menuItemVariants}
                      className="overflow-hidden"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <Link
                        href={item.path}
                        className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider menu-item inline-block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="mt-16 flex space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-primary transition-colors"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-primary transition-colors"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-primary transition-colors"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    LinkedIn
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

