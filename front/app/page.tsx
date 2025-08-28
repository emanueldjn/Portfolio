"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Home from "@/components/Home"
import About from "@/components/About"
import EmDesenvolvimento from "@/components/EmDesenvolvimento"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Portfolio from "@/components/Portfolio"

export default function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home />
        <About />
        {/* <Portfolio /> */}
        <EmDesenvolvimento />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
