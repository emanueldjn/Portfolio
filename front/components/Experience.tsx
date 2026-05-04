"use client"

import { educationNotes, experienceItems, serviceHighlights } from "@/lib/portfolio-data"

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border/60">
      <div className="section-shell section-space">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Trajetória</p>
            <h2 className="mt-4 text-4xl font-black leading-[0.94] text-foreground sm:text-5xl">
              Experiência que combina interface, operação e continuidade.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Minha evolução profissional não veio só do código. Ela foi construída em contato direto com sistemas,
            atendimento, urgência operacional e produto em uso.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="glass-panel rounded-[1.9rem] p-6">
              <p className="section-kicker">Formação contínua</p>
              <div className="mt-5 space-y-4">
                {educationNotes.map((note) => (
                  <p key={note} className="text-sm leading-7 text-foreground/80">
                    {note}
                  </p>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[1.9rem] p-6">
              <p className="section-kicker">Frentes mais recorrentes</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {serviceHighlights.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative space-y-6 pl-6 sm:pl-8">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

            {experienceItems.map((item, index) => (
              <article key={`${item.company}-${item.role}`} className="relative">
                <span className="absolute left-[-0.44rem] top-8 h-3.5 w-3.5 rounded-full border-4 border-background bg-primary" />

                <div className="glass-panel rounded-[2rem] p-6 sm:p-7">
                  <div className="flex flex-col gap-4 border-b border-border/60 pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="section-kicker">0{index + 1}</p>
                      <h3 className="mt-3 text-2xl font-black text-foreground">{item.role}</h3>
                      <p className="mt-2 text-base font-medium text-foreground/78">{item.company}</p>
                    </div>

                    <div className="rounded-[1.2rem] border border-border/60 bg-background/50 px-4 py-3 text-sm text-muted-foreground">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-foreground/82">
                        <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
