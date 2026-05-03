"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { SafeExternalLink } from "@/components/safe-external-link"
import {
  RESOURCE_MENU_ITEMS,
  RESOURCE_QUICK_LINKS,
  RESOURCE_SECTIONS,
} from "@/lib/resources-content"
import { SITE_CONFIG } from "@/lib/site-config"

export default function ResourcesPage() {
  const [activeId, setActiveId] = useState<
    (typeof RESOURCE_MENU_ITEMS)[number]["id"]
  >("general")

  const activeSection =
    RESOURCE_SECTIONS.find((section) => section.id === activeId) ??
    RESOURCE_SECTIONS[0]

  return (
    <main className="min-h-screen bg-black text-[#c7c3b5]">
      <header className="border-b border-[#c7c3b5]/20 px-4 pb-5 pt-6 md:px-8">
        <div className="grid grid-cols-2 items-start gap-4 md:grid-cols-3">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#c7c3b5]/90 md:text-xs">
            <p>Location: {SITE_CONFIG.locationShort}</p>
            <p className="mt-1">Dates: {SITE_CONFIG.eventDatesLabel}</p>
          </div>

          <div className="hidden items-center justify-center md:flex">
            <h1 className="font-display text-2xl font-bold uppercase tracking-tight text-[#c7c3b5]">
              <Link href={SITE_CONFIG.links.home} className="transition-colors hover:text-white">
                {SITE_CONFIG.siteName}
              </Link>{" "}
              <span className="font-mono text-xs tracking-[0.18em] text-[#c7c3b5]/70">| Hacker Resources</span>
            </h1>
          </div>

          <div className="justify-self-end text-right font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#c7c3b5]/90 md:text-xs">
            <p>Hackers: {SITE_CONFIG.hackerCountLabel}</p>
            <p className="mt-1">Building: {SITE_CONFIG.buildDurationLabel}</p>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:grid md:min-h-[calc(100vh-92px)] md:grid-cols-[290px_1fr]">
        <aside className="border-b border-[#c7c3b5]/20 md:border-b-0 md:border-r md:border-[#c7c3b5]/20">
          <nav className="flex overflow-x-auto md:block">
            {RESOURCE_MENU_ITEMS.map((item) => {
              const active = item.id === activeId

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`min-w-fit border-r border-[#c7c3b5]/10 px-5 py-4 text-left font-sans text-xl transition-colors md:block md:w-full md:border-r-0 md:border-b md:border-[#c7c3b5]/10 md:px-4 md:py-3 md:text-[1.8rem] ${
                    active
                      ? "bg-[#c7c3b5] text-black"
                      : "text-[#c7c3b5]/95 hover:bg-[#c7c3b5]/10"
                  }`}
                >
                  {item.label}
                </button>
              )
            })}

            <SafeExternalLink
              href={SITE_CONFIG.links.devpostResources}
              className="flex min-w-fit items-center gap-2 border-r border-[#c7c3b5]/10 px-5 py-4 font-sans text-xl text-[#c7c3b5]/95 transition-colors hover:bg-[#c7c3b5]/10 md:border-b md:border-r-0 md:border-[#c7c3b5]/10 md:px-4 md:py-3 md:text-[1.8rem]"
            >
              Get Started
              <ExternalLink className="h-4 w-4" />
            </SafeExternalLink>

            <SafeExternalLink
              href={SITE_CONFIG.links.devpost}
              className="flex min-w-fit items-center gap-2 border-r border-[#c7c3b5]/10 px-5 py-4 font-sans text-xl text-[#c7c3b5]/95 transition-colors hover:bg-[#c7c3b5]/10 md:border-b md:border-r-0 md:border-[#c7c3b5]/10 md:px-4 md:py-3 md:text-[1.8rem]"
            >
              Schedule
              <ExternalLink className="h-4 w-4" />
            </SafeExternalLink>
          </nav>
        </aside>

        <section className="relative px-6 py-8 md:px-10 md:py-10 lg:px-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[#c7c3b5]/15" />

          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#c7c3b5]/60">
              {activeSection.menu}
            </p>
            <h2 className="mt-3 whitespace-pre-line font-display text-6xl font-bold uppercase leading-[0.88] tracking-tight text-[#e1dece] md:text-7xl lg:text-8xl">
              {activeSection.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c7c3b5]/75 md:text-lg">
              {activeSection.subtitle}
            </p>

            <div className="mt-7 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
              {RESOURCE_QUICK_LINKS.map((link) => (
                <SafeExternalLink
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between border border-[#c7c3b5]/20 bg-[#c7c3b5]/[0.03] px-4 py-3 transition-colors hover:bg-[#c7c3b5]/10"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#d7d3c3]">
                    {link.label}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#c7c3b5]/75 transition-transform group-hover:translate-x-0.5" />
                </SafeExternalLink>
              ))}
            </div>

            <div className="mt-10 space-y-10 pb-16">
              {activeSection.blocks.map((block) => (
                <article key={block.heading} className="space-y-4 border-t border-[#c7c3b5]/12 pt-6">
                  <h3 className="font-mono text-xl uppercase tracking-[0.12em] text-[#d7d3c3] md:text-2xl">
                    {block.heading}
                  </h3>

                  {block.body?.map((paragraph) => (
                    <p key={paragraph} className="max-w-3xl text-base leading-8 text-[#c7c3b5]/85 md:text-[1.07rem]">
                      {paragraph}
                    </p>
                  ))}

                  {block.bullets && (
                    <ul className="space-y-3 pl-5 text-base text-[#c7c3b5]/85 marker:text-[#e1dece] md:text-[1.07rem]">
                      {block.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
