import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FloatingResourcesButton } from "@/components/floating-resources-button"
import { TerminalLoading } from "@/components/terminal-loading"
import { SITE_CONFIG } from "@/lib/site-config"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-display",
})
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: `${SITE_CONFIG.siteName} ${SITE_CONFIG.year} | Build the Future`,
  description: `Join ${SITE_CONFIG.siteName} ${SITE_CONFIG.year} for a ${SITE_CONFIG.buildDurationLabel.toLowerCase()} high-school hackathon in Edison, NJ.`,
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        <TerminalLoading />
        {children}
        <FloatingResourcesButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
