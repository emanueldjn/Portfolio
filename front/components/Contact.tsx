"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 lg:mb-4">
            Entre em <span className="text-primary">contato</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre oportunidades, projetos ou apenas trocar uma ideia sobre tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 lg:mb-6">Vamos trabalhar juntos!</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou precisa de
                ajuda com desenvolvimento web, não hesite em entrar em contato.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">Email</h4>
                  <p className="text-muted-foreground text-sm sm:text-base break-all">emanuelnas29@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">Telefone</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">+54 9 11 5574-0085</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">Localização</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Buenos Aires - ARG <br/>Campo do Brito, SE - Brasil </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Número para contato"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Assunto do Email"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Sua Mensagem"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-input border-border focus:border-primary resize-none text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
