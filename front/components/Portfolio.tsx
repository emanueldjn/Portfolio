"use client"

import Image from "next/image"
import { ArrowUpRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { productCases, publicProjects } from "@/lib/portfolio-data"

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-border/60">
      <div className="section-shell section-space">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Projetos</p>
            <h2 className="mt-4 text-4xl font-black leading-[0.94] text-foreground sm:text-5xl">
              Prova visual de execução pública e contexto profissional por trás dela.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Os projetos públicos ajudam a ler acabamento, estrutura e sensibilidade visual. Os casos privados mostram a
            camada de produto, operação e integração que sustenta esse trabalho.
          </p>
        </div>

        <div className="space-y-6">
          {publicProjects.map((project, index) => (
            <article key={project.title} className="group overflow-hidden rounded-[2.2rem] border border-border/70 bg-card/65">
              <div className={`grid gap-0 ${index % 2 === 0 ? "xl:grid-cols-[0.94fr_1.06fr]" : "xl:grid-cols-[1.06fr_0.94fr]"}`}>
                <div className={`flex flex-col justify-between p-6 sm:p-8 ${index % 2 === 1 ? "xl:order-2" : ""}`}>
                  <div>
                    <p className="section-kicker">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="mt-4 text-3xl font-black text-foreground sm:text-4xl">{project.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="skill-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button asChild className="mt-7 rounded-full px-6">
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        Abrir projeto
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={`relative min-h-[320px] overflow-hidden ${index % 2 === 1 ? "xl:order-1" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/10 via-transparent to-primary/12" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2.2rem] border border-border/70 bg-foreground px-6 py-8 text-background sm:px-8 sm:py-10">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-background/60">Cases sob NDA</p>
              <h3 className="mt-4 text-3xl font-black text-background sm:text-4xl">
                Trabalho real também aparece onde a vitrine não pode mostrar tudo.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-background/72">
              Mesmo sem abrir código ou contexto completo, dá para sinalizar as frentes de impacto e a natureza do
              problema resolvido.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {productCases.map((item) => (
              <article key={item.title} className="rounded-[1.7rem] border border-background/12 bg-background/6 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-background/55">{item.label}</p>
                    <h4 className="mt-4 text-2xl font-black text-background">{item.title}</h4>
                  </div>
                  <Lock className="mt-1 h-4 w-4 text-background/55" />
                </div>

                <p className="mt-4 text-sm leading-7 text-background/74">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {item.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-background/12 px-3 py-2 text-xs font-semibold text-background/76">
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
