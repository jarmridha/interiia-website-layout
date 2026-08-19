"use client"

import { useEffect, useRef } from "react"

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const STATS = [
  { label: "Established", value: "2019" },
  { label: "Coverage", value: "Across Bangladesh" },
  { label: "Speciality", value: "Construction & Engineering" },
  { label: "Focus", value: "Quality & Safety" },
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
      <img src={`${BASE_PATH}/images/hero.png`} alt="Mridha Construction and Consultancy project" className="hero-bg absolute inset-0 h-full w-full object-cover" style={{ transform: "scale(1.015) translate3d(var(--mx,0px),var(--my,0px),0)" }} />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col px-6 pb-8 pt-[118px] md:px-12 md:pb-8 md:pt-[132px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_330px]">
          <div>
            <p className="mb-7 text-[11px] font-semibold uppercase tracking-[.08em]">Mridha Construction and Consultancy</p>
            <h1 className="hero-title max-w-[620px] text-[48px] leading-[1.02] tracking-[-.05em] md:text-[64px]">Building Trust.<br />Delivering Excellence.</h1>
          </div>
          <div className="hero-copy self-start pt-[92px] text-[12px] font-semibold leading-[1.45] md:pt-[108px]">
            <p>Reliable construction and engineering solutions, built on expertise, integrity, quality, and a commitment to delivering lasting value.</p>
            <a href={`${BASE_PATH}/about`} className="mt-7 inline-block border-b border-white pb-1 text-[12px] font-semibold transition-opacity hover:opacity-60">Who we are</a>
          </div>
        </div>
        <dl className="mt-auto grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="hero-stat" style={{ animationDelay: `${i * 100}ms` }}>
              <dt className="text-[11px] font-semibold">{stat.label}</dt>
              <dd className="mt-1 text-[12px] font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
