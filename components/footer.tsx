"use client"

import { useEffect, useRef, useState } from "react"

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const [scaleX, setScaleX] = useState(1)

  useEffect(() => {
    const fitTextToWidth = () => {
      const containerWidth = containerRef.current?.clientWidth ?? 0
      const textWidth = textRef.current?.scrollWidth ?? 0
      const safetyInset = 2

      if (containerWidth > 0 && textWidth > 0) {
        setScaleX((containerWidth - safetyInset) / textWidth)
      }
    }

    fitTextToWidth()

    const observer = new ResizeObserver(fitTextToWidth)
    if (containerRef.current) observer.observe(containerRef.current)

    document.fonts?.ready?.then?.(fitTextToWidth)
    window.addEventListener("resize", fitTextToWidth)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", fitTextToWidth)
    }
  }, [])

  return (
    <footer className="relative flex flex-col items-center justify-center overflow-visible p-0">
      {/* Vignette gradient fade at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent" />

      {/* Big HACKJPS text */}
      <div ref={containerRef} className="w-full">
        <h2
          ref={textRef}
          className="mx-auto w-max select-none font-display text-[23vw] font-bold uppercase leading-[0.7] tracking-tighter text-foreground/10"
          style={{ transform: `scaleX(${scaleX})`, transformOrigin: "center" }}
          aria-label="HackJPS"
        >
          HACKJPS
        </h2>
      </div>
    </footer>
  )
}
