"use client"

import { Code2, Construction, Palette, Sparkles } from "lucide-react"

const placeholderItems = [
  {
    title: "Projetos em curadoria",
    description: "Seleção e refinamento dos cases para que o portfólio mostre contexto, não só screenshot.",
    icon: Code2,
  },
  {
    title: "Direção visual consistente",
    description: "Ajuste de narrativa, hierarquia e acabamento para evitar a sensação de layout genérico.",
    icon: Palette,
  },
  {
    title: "Próximas entregas",
    description: "Novos estudos visuais, páginas de case e materiais de apoio para leitura mais profissional.",
    icon: Sparkles,
  },
]

export default function EmDesenvolvimento() {
  return (
    <section id="portfolio-placeholder" className="border-t border-border/60">
      <div className="section-shell section-space">
        <div className="glass-panel rounded-[2.4rem] p-6 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.8rem] bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(14,33,31,0.18)]">
              <Construction className="h-8 w-8" />
            </div>

            <p className="section-kicker mt-6">Em evolução</p>
            <h2 className="mt-4 text-4xl font-black text-foreground sm:text-5xl">
              Esta seção está sendo refinada para entrar no mesmo padrão do restante do portfólio.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              Em vez de publicar qualquer coisa, a ideia é mostrar projetos com melhor contexto, melhor direção visual e
              melhor leitura de impacto.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {placeholderItems.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className="surface-panel rounded-[1.8rem] p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-card/70 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
