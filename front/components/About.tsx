"use client"

import { differentiators, quickFacts } from "@/lib/portfolio-data"

export default function About() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="section-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Perfil</p>
            <h2 className="max-w-xl text-4xl font-black leading-[0.94] text-foreground sm:text-5xl">
              UI não é acabamento.
              <span className="block text-primary">É sistema de clareza.</span>
            </h2>
            <p className="max-w-md text-lg leading-8 text-muted-foreground">
              Minha vantagem está em conectar estética, fluxo e regra de negócio antes de encostar no componente.
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                <p>
                  Antes do front-end, passei por ERP, faturamento, suporte técnico, estoque e rotinas operacionais com
                  pouca margem para erro. Esse repertório muda completamente a forma como eu projeto uma interface.
                </p>
                <p>
                  Em vez de tratar tela como uma peça isolada, eu penso em contexto de uso, manutenção futura,
                  previsibilidade de comportamento e impacto na operação. O resultado tende a ser um front-end mais
                  confiável e mais fácil de sustentar.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="surface-panel rounded-[1.6rem] p-5">
                  <p className="section-kicker">{fact.label}</p>
                  <p className="mt-4 text-sm leading-7 text-foreground/82">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {differentiators.map((item) => (
                <article key={item.title} className="glass-panel rounded-[1.8rem] p-6">
                  <p className="section-kicker">Diferencial</p>
                  <h3 className="mt-4 text-2xl font-black text-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
