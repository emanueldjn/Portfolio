"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const texts = [ "Desenvolvedor de Software" ,"Bacharel em Eng. de Software", "Full-Stack Developer" ]
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeWriter = () => {
      const currentText = texts[textIndex]
      const displayText = isDeleting ? currentText.substring(0, charIndex - 1) : currentText.substring(0, charIndex + 1)

      if (textRef.current) {
        textRef.current.textContent = displayText
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true
        }, 1500)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
      }

      charIndex += isDeleting ? -1 : 1
      setTimeout(typeWriter, isDeleting ? 50 : 100)
    }

    typeWriter()
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground font-medium">Olá, meu nome é</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground">Emanuel</h1>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
                e sou <span ref={textRef} className="border-r-2 border-primary animate-pulse"></span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Engenheiro de Software em formação, com experiência prática em projetos web e mobile, atuando
              principalmente com React, TypeScript, Node.js e VTEX IO. Busco crescer profissionalmente como
              Desenvolvedor, contribuindo com times colaborativos.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6">
              <a
                href="https://www.linkedin.com/in/emanueldjn/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-glow"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/emanueldjn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-glow"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <a
                  href="/pdf/EmanuelNascimento_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">ABRIR CV</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-float">
                <div className="w-full h-full rounded-full bg-background p-2">
                  <img
                    src="/imgs/emanuel3x4.jpg"
                    alt="Emanuel Nascimento"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
      </button>
    </section>
  )
}
