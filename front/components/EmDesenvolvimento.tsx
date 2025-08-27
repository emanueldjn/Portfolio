"use client"

import { Construction, Code, Palette, Zap } from "lucide-react"

export default function EmDesenvolvimento() {
  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 lg:mb-4">
            Seção em <span className="text-primary">Desenvolvimento</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Esta seção está sendo desenvolvida com muito carinho. Em breve você verá projetos incríveis aqui!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-12">
          {/* Construction Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-primary to-accent p-6 sm:p-8 rounded-full">
              <Construction className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-colors duration-300">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2">Projetos Inovadores</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Desenvolvendo soluções criativas com as mais modernas tecnologias
                </p>
              </div>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-colors duration-300">
                <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2">Design Moderno</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Interfaces elegantes e experiências de usuário excepcionais
                </p>
              </div>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-colors duration-300">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2">Performance</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Aplicações rápidas e otimizadas para a melhor experiência
                </p>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Progresso</span>
              <span className="text-sm font-medium text-primary">75%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-3/4 animate-pulse"></div>
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="text-center space-y-2">
            <p className="text-lg sm:text-xl font-semibold text-foreground">Em breve, projetos incríveis!</p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Estou trabalhando duro para trazer conteúdo de qualidade
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
