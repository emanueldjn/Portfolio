"use client"

import { useEffect, useState } from "react"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Home from "@/components/Home"
import Portfolio from "@/components/Portfolio"
import Skills from "@/components/Skills"

const THEME_STORAGE_KEY = "portfolio-theme-v3"

type ThemeMode = "light" | "dark"

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>("light")

  useEffect(() => {
    const savedTheme = (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null) ?? "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme: ThemeMode = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="hero-glow left-[-8rem] top-[6rem] h-[22rem] w-[22rem]" />
        <div className="hero-glow hero-glow-secondary right-[-6rem] top-[12rem] h-[18rem] w-[18rem]" />
        <div className="hero-grid-mask" />
      </div>

      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="overflow-x-clip">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
