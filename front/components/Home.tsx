"use client"

import Image from "next/image"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroMetrics, profile, quickFacts, serviceHighlights } from "@/lib/portfolio-data"

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
]

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative pt-28 sm:pt-36">
      <div className="section-shell section-space">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="eyebrow-pill">Frontend engineer · React · Next.js · VTEX IO</span>
              <p className="section-kicker">Portfólio · Produto digital · Experiência com operação real</p>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] text-foreground sm:text-6xl xl:text-[5.4rem]">
                Interfaces com
                <span className="text-primary"> aparência de produto</span>
                <span className="block">e código pronto para rotina real.</span>
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {profile.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => scrollToSection("portfolio")} size="lg" className="rounded-full px-6">
                Ver projetos
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="rounded-full border-border/70 bg-card/70 px-6"
              >
                Falar comigo
              </Button>

              <Button asChild size="lg" variant="ghost" className="rounded-full px-4">
                <a href={profile.resumeHref} target="_blank" rel="noopener noreferrer">
                  Abrir CV
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="eyebrow-pill">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
              <span className="eyebrow-pill">{profile.availability}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/68 px-4 py-2 text-sm font-medium text-foreground/80 hover:border-primary/35 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />
              <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
                <div className="image-shell rounded-[1.6rem]">
                  <div className="relative aspect-[4/5]">
                    <Image src="/imgs/emanuel3x4.jpg" alt={profile.fullName} fill className="object-cover" priority />
                  </div>
                </div>

                <div className="relative space-y-5">
                  <div>
                    <p className="section-kicker">Visão profissional</p>
                    <h2 className="mt-3 text-3xl font-black leading-tight text-foreground">
                      {profile.headline}
                    </h2>
                  </div>

                  <p className="text-base leading-8 text-muted-foreground">{profile.differentiator}</p>

                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {quickFacts.map((fact) => (
                      <div key={fact.label} className="metric-card rounded-[1.4rem] p-4">
                        <p className="section-kicker">{fact.label}</p>
                        <p className="mt-3 text-sm leading-7 text-foreground/82">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="metric-card rounded-[1.6rem] p-5">
                  <p className="section-kicker">{metric.label}</p>
                  <p className="mt-4 text-sm leading-7 text-foreground/80">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {serviceHighlights.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
