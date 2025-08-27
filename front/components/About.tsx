"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start order-last lg:order-first">
            <div className="relative">
              <div className="w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <img
                  src="/imgs/emanuel.jpeg"
                  alt="Emanuel Nascimento"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-24 sm:w-40 h-24 sm:h-40 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 lg:mb-4">
                Sobre <span className="text-primary">mim</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-accent mb-4 lg:mb-6">
                Desenvolvedor Web em Formação
              </h3>
            </div>

            <div className="space-y-4 lg:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Meu nome é Emanuel, e sou um apaixonado por tecnologia que encontrou na programação uma maneira de
                transformar ideias em soluções práticas. Como estudante de Engenharia de Software e estagiário em
                desenvolvimento de software com foco em VTEX IO, estou vivendo uma jornada empolgante, onde cada desafio
                é uma chance de crescer e aprender.
              </p>

              <p>
                No meu estágio, trabalho com equipes para construir e aprimorar soluções digitais, o que me ensinou a
                importância da colaboração e da atenção aos detalhes. Meus projetos pessoais e acadêmicos me desafiam a
                explorar novas ideias e a pensar de forma criativa, sempre buscando formas de melhorar minhas
                habilidades e entregar resultados de qualidade.
              </p>

              <p>
                Fora do mundo do código, gosto de praticar esportes, assistir séries, ouvir músicas e sair com amigos,
                atividades que me recarregam e inspiram novas ideias. Meu objetivo é me consolidar como desenvolvedor,
                contribuindo para projetos inovadores e enfrentando desafios que me permitam evoluir.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <a
                  href="https://www.linkedin.com/in/emanueldjn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Ver mais no LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
