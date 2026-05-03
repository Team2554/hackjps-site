import { Navigation } from "./navigation"
import Image from "next/image"
import { SITE_CONFIG } from "@/lib/site-config"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-start px-4 pt-6 pb-24 md:px-6 lg:px-8 overflow-hidden">
      <Navigation />
      
      {/* Background Hawk Statue */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="relative h-[110%] w-full translate-y-[10%]">
          <Image
            src="/hawk-statue-hero.png"
            alt="Hawk Statue"
            fill
            className="object-contain object-right-bottom"
            priority
          />
          {/* Vignette/Fade effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center w-full relative z-10">
        {/* Main headline */}
        <h1 className="font-display text-5xl font-bold leading-none tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[14rem] mt-16 md:mt-8">
          {SITE_CONFIG.siteName.toUpperCase()}
        </h1>

        {/* New event box styled after image */}
        <div className="mt-8 relative inline-block self-start" style={{ fontFamily: "'ShareTechMono', monospace" }}>
          {/* Corner accents - Detached from rectangle */}
          <div className="absolute -left-[6px] -top-[6px] h-3 w-3 border-l-2 border-t-2 border-foreground/80" />
          <div className="absolute -right-[6px] -top-[6px] h-3 w-3 border-r-2 border-t-2 border-foreground/80" />
          <div className="absolute -bottom-[6px] -left-[6px] h-3 w-3 border-b-2 border-l-2 border-foreground/80" />
          <div className="absolute -bottom-[6px] -right-[6px] h-3 w-3 border-b-2 border-r-2 border-foreground/80" />
          
          <div className="border border-foreground/15 bg-foreground/5 px-6 py-3 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-bold tracking-[0.1em] text-foreground uppercase" style={{ fontFamily: "ShareTechMono, monospace" }}>
              {SITE_CONFIG.eventDatesLabel.toUpperCase()} @ {SITE_CONFIG.locationShort}
            </p>
          </div>
        </div>

        {/* CTA buttons removed */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-muted-foreground/30 p-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
