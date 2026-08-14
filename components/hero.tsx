"use client"

import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef } from "react"

const STATS = [
  { label: "Studio", value: "Interiia, Toronto" },
  { label: "Est. since", value: "2020" },
  { label: "Speciality", value: "Residential & Commercial" },
  { label: "Rating", value: "4.9+" },
]

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = imageRef.current
    if (!node) return
    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      node.style.setProperty("--mx", `${x * 10}px`)
      node.style.setProperty("--my", `${y * 10}px`)
    }
    const reset = () => {
      node.style.setProperty("--mx", "0px")
      node.style.setProperty("--my", "0px")
    }
    node.addEventListener("mousemove", onMove)
    node.addEventListener("mouseleave", reset)
    return () => {
      node.removeEventListener("mousemove", onMove)
      node.removeEventListener("mouseleave", reset)
    }
  }, [])

  return (
    <section id="top" className="px-4 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-20">
          <h1 className="reveal-up max-w-4xl text-balance text-[clamp(3.2rem,7vw,7.25rem)] font-medium leading-[.88] tracking-[-.055em] text-foreground">
            We design around your dreams
          </h1>
          <div className="reveal-up flex max-w-md flex-col gap-7 lg:pb-2">
            <p className="text-pretty text-[15px] leading-7 text-muted-foreground">
              Interiia designs spaces that are tactile, considered, and built around how life actually happens. We create calm, characterful interiors that feel unmistakably yours.
            </p>
            <a href="#projects" className="magnetic-button inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground">
              View projects <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div ref={imageRef} className="hero-image mt-12 overflow-hidden rounded-[2rem] md:mt-16">
          <img src="/images/hero.png" alt="Serene modern interior" className="h-[58vh] min-h-[28rem] w-full object-cover transition-transform duration-700 ease-out md:h-[68vh]" style={{ transform: "scale(1.025) translate3d(var(--mx), var(--my), 0)" }} />
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-7 border-b border-border/70 pb-7 md:grid-cols-4 md:gap-y-0">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="reveal-up flex flex-col gap-1" style={{ animationDelay: `${index * 90}ms` }}>
              <dt className="text-[10px] uppercase tracking-[.18em] text-muted-foreground">{stat.label}</dt>
              <dd className="text-sm font-medium text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
