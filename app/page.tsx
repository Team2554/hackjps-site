import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ScheduleSection } from "@/components/schedule-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { ArchiveSection } from "@/components/archive-section"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto bg-black text-foreground">
      <div className="flex min-h-screen flex-col snap-start">
        <HeroSection />
      </div>
      <div className="snap-start">
        <AboutSection />
      </div>
      <div className="snap-start">
        <ScheduleSection />
      </div>
      <div className="snap-start">
        <SponsorsSection />
      </div>
      <div className="snap-start">
        <ArchiveSection />
      </div>
      <div className="snap-start">
        <FAQSection />
      </div>
    </main>
  )
}
