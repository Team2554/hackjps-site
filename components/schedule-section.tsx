"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { SafeExternalLink } from "@/components/safe-external-link"
import { SITE_CONFIG } from "@/lib/site-config"

const schedule = {
  "Day 1 - March 29": [
    { time: "8:00 AM", event: "Check-in & Breakfast" },
    { time: "9:30 AM", event: "Opening Ceremony" },
    { time: "10:30 AM", event: "Team Formation" },
    { time: "11:00 AM", event: "Hacking Begins!" },
    { time: "12:30 PM", event: "Lunch" },
    { time: "2:00 PM", event: "Workshop: Intro to AI/ML" },
    { time: "4:00 PM", event: "Workshop: Building APIs" },
    { time: "6:30 PM", event: "Dinner" },
    { time: "8:00 PM", event: "Mentor Office Hours" },
    { time: "10:00 PM", event: "Game Night & Snacks" },
  ],
  "Day 2 - March 30": [
    { time: "12:00 AM", event: "Midnight Snacks" },
    { time: "8:00 AM", event: "Breakfast" },
    { time: "10:00 AM", event: "Soft Deadline" },
    { time: "12:00 PM", event: "Hacking Ends & Lunch" },
    { time: "1:30 PM", event: "Judging Begins" },
    { time: "4:30 PM", event: "Closing Ceremony" },
    { time: "5:30 PM", event: "Networking Reception" },
  ],
} as const

type DayKey = keyof typeof schedule

export function ScheduleSection() {
  const days = Object.keys(schedule) as DayKey[]
  const [activeDay, setActiveDay] = useState<DayKey>(days[0])

  const currentSchedule = schedule[activeDay] || []

  return (
    <section id="schedule" className="min-h-screen px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="group flex items-center gap-4">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            EVENT SCHEDULE
          </h2>
          <SafeExternalLink
            href={SITE_CONFIG.links.devpostDates}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-muted-foreground hover:text-accent"
            aria-label="View on DevPost"
          >
            <ExternalLink className="h-8 w-8" />
          </SafeExternalLink>
        </div>

        {/* Day tabs */}
        <div className="mt-12 flex gap-4" style={{ fontFamily: "'ShareTechMono', monospace" }}>
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={cn(
                "relative px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all",
                activeDay === day 
                  ? "bg-accent text-accent-foreground border-transparent" 
                  : "bg-transparent text-muted-foreground border border-foreground/15 hover:bg-foreground/5"
              )}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule list */}
        <div className="mt-10 space-y-0">
          {currentSchedule.map((item) => (
            <div
              key={`${item.time}-${item.event}`}
              className="flex items-center gap-6 border-t border-border/50 py-4"
            >
              <div className="w-24 shrink-0 text-sm font-medium text-muted-foreground">
                {item.time}
              </div>
              <div className="flex-1 font-medium text-foreground">
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
