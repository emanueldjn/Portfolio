"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  img: string
  title: string
  description: string
  link: string
  github?: string
  tech: string[]
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      img: "/imgs/feliz-natal.png",
      title: "LandingPage Feliz Natal",
      description: "Projeto pessoal usando a biblioteca React com design festivo e interativo.",
      link: "https://feliz-natal-three.vercel.app/",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      img: "/img/calc2.png",
      title: "Calculadora React",
      description: "Calculadora funcional desenvolvida com React e design moderno.",
      link: "https://react-chi-ten.vercel.app/",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      img: "/img/sistema-bancario.jpg",
      title: "Sistema Bancário",
      description: "Sistema bancário completo desenvolvido em Python com funcionalidades avançadas.",
      link: "https://github.com/emanueldjn/projetos_python/tree/main/sistema_bancario_V2.py",
      tech: ["Python", "POO", "Algoritmos"],
    },
    {
      img: "/img/tic-tac-toe.png",
      title: "Jogo da Velha",
      description: "Jogo interativo com lógica de programação e design responsivo.",
      link: "https://desenvolvimento-web-ashen.vercel.app",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      img: "/img/rick-and-morty.jpg",
      title: "Rick and Morty App",
      description: "Aplicação React consumindo API do Rick and Morty com design moderno.",
      link: "https://rick-and-morty-alpha-puce.vercel.app/",
      tech: ["React", "API", "CSS"],
    },
    {
      img: "/img/churrascometro.jpg",
      title: "Churrascômetro",
      description: "Calculadora para churrascos com interface intuitiva e responsiva.",
      link: "https://desenvolvimento-web-ekzs.vercel.app",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ]

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 lg:mb-4">
            Últimos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos meus projetos mais recentes, desenvolvidos com diferentes tecnologias
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.img || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center space-x-2 sm:space-x-3 pt-3 sm:pt-4">
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 sm:space-x-2"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Ver Projeto</span>
                    </a>
                  </Button>

                  {project.github && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs sm:text-sm"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 sm:space-x-2"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Código</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
