"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { navigationItems, profile } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  theme: string
  toggleTheme: () => void
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-[1.5rem] border border-border/70 backdrop-blur-2xl transition-all duration-300 ${
          isScrolled ? "bg-background/88 shadow-[0_24px_60px_rgba(8,15,25,0.12)]" : "bg-background/72"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-black text-primary-foreground">
              EN
            </span>

            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-semibold text-foreground">{profile.fullName}</p>
              <p className="section-kicker mt-1 text-primary/70">{profile.role}</p>
            </div>
          </button>

          <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-card/60 p-1 lg:flex">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/72 hover:bg-background hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="hidden rounded-full px-5 sm:inline-flex"
            >
              Vamos conversar
            </Button>

            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              aria-pressed={theme === "dark"}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-card/70 text-foreground hover:border-primary/35 hover:text-primary"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-card/70 text-foreground lg:hidden"
              aria-label="Alternar menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border/70 px-4 pb-4 pt-3 lg:hidden sm:px-5">
            <nav className="grid gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-2xl border border-border/60 bg-card/70 px-4 py-3 text-left text-sm font-medium text-foreground/82"
                >
                  {item.label}
                </button>
              ))}

              <Button onClick={() => scrollToSection("contact")} className="mt-2 rounded-2xl">
                Entrar em contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
