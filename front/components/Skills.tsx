"use client"

import { skillGroups } from "@/lib/portfolio-data"

export default function Skills() {
  const allItems = skillGroups.flatMap((group) => group.items)

  return (
    <section id="skills">
      <div className="section-shell section-space">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Stack</p>
            <h2 className="mt-4 text-4xl font-black leading-[0.94] text-foreground sm:text-5xl">
              Ferramentas organizadas para entrega de produto, não para enfeite.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            A stack faz sentido quando ajuda a acelerar entendimento, reduzir retrabalho e manter qualidade mesmo com o
            produto em movimento.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-panel rounded-[1.9rem] p-6 sm:p-7">
              <p className="section-kicker">Capability</p>
              <h3 className="mt-4 text-2xl font-black text-foreground">{group.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{group.description}</p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="surface-panel mt-8 rounded-[2rem] p-6 sm:p-7">
          <p className="section-kicker">Ferramentas recorrentes</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {allItems.map((item) => (
              <span key={item} className="skill-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
