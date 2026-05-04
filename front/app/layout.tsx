import type React from "react"
import { Geist_Mono, Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata = {
  title: "Emanuel Nascimento | Frontend Engineer",
  description:
    "Portfólio de Emanuel Nascimento, frontend engineer especializado em React, TypeScript, Next.js e VTEX IO.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${montserrat.variable} ${openSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen selection:bg-primary selection:text-primary-foreground">{children}</body>
    </html>
  )
}
