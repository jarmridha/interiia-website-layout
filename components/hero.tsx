"use client"

import { useEffect, useRef } from "react"

const STATS = [
  { label: "Studio", value: "Interiia, Toronto" },
  { label: "Est. since", value: "2020" },
  { label: "Speciality", value: "Residential & Commercial" },
  { label: "Rating", value: "4.9+" },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const move = (e: MouseEvent) => {
      node.style.setProperty("--mx", `${(e.clientX / window.innerWidth - .5) * 12}px`)
      node.style.setProperty("--my", `${(e.clientY / window.innerHeight - .5) * 8}px`)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <section ref={ref} className="interiia-hero relative min-h-[633px] h-[100svh] overflow-hidden bg-[#1b1714] text-white">
      <img
        src="/images/hero.png"
        alt="Interiia interior design project"
        className="hero-bg absolute inset-0 h-full w-full object-cover"
        style={{ transform: "scale(1.015) translate3d(var(--mx,0px),var(--my,0px),0)" }}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full flex-col px-6 pb-8 pt-[108px] md:px-12 md:pb-8 md:pt-[122px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_330px] gap-8">
          <h1 className="hero-title max-w-[510px] text-[48px] leading-[1.02] tracking-[-.045em] md:text-[50px]">
            We design around<br />your dreams
          </h1>
          <div className="hero-copy self-start pt-[138px] text-[12px] font-semibold leading-[1.35] md:pt-[138px]">
            <p>
              Interiia designs spaces that are tactile, considered, and built around how life actually happens. Based in Toronto, we work with clients who want more than a beautiful room — they want a space that understands them completely.
            </p>
            <a href="/projects" className="mt-7 inline-block border-b border-white pb-1 text-[12px] font-semibold transition-opacity hover:opacity-60">View projects</a>
          </div>
        </div>

        <dl className="mt-auto grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="hero-stat animate-in" style={{ animationDelay: `${i * 100}ms` }}>
              <dt className="text-[11px] font-semibold">{stat.label}</dt>
              <dd className="mt-1 text-[12px] font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
