"use client"

import { Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { contactLinks, serviceHighlights } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"

const iconMap = {
  email: Mail,
  phone: MessageCircle,
  linkedin: Linkedin,
  github: Github,
  cv: Download,
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="contact-shell relative overflow-hidden rounded-[2.6rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(121,177,165,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(240,167,108,0.22),transparent_26%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[0.48fr_0.52fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-white/60">Contato</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.94] text-white sm:text-5xl">
                Se a interface precisa elevar o nível do produto, podemos conversar.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Aberto para oportunidades remotas, freelas e times que precisam de um front-end com mais critério
                visual, clareza de fluxo e responsabilidade técnica.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {serviceHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                  <a href="mailto:emanuelnas29@gmail.com">Enviar email</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/18 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="https://wa.me/5491155740085" target="_blank" rel="noopener noreferrer">
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((item) => {
                const Icon = iconMap[item.kind]
                const shouldOpenInNewTab = item.href.startsWith("http") || item.href.endsWith(".pdf")

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={shouldOpenInNewTab ? "_blank" : undefined}
                    rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                    className="rounded-[1.8rem] border border-white/12 bg-white/6 p-5 backdrop-blur-xl transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 text-white/84">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.28em] text-white/55">{item.label}</p>
                    <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-white/68">{item.description}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
