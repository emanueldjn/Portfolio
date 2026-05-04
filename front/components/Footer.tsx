"use client"

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { navigationItems, profile } from "@/lib/portfolio-data"

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="pb-8">
      <div className="section-shell">
        <div className="glass-panel rounded-[2rem] px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="section-kicker">Emanuel Nascimento</p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Front-end com foco em produto, experiência, operação e interfaces que mantêm boa aparência quando o uso
                começa de verdade.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-foreground/76 hover:border-primary/35 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                )
              })}
            </div>

            <button
              onClick={() => scrollToSection("home")}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/74 hover:text-primary"
            >
              Voltar ao topo
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">© {year} Emanuel Nascimento</p>
        </div>
      </div>
    </footer>
  )
}
