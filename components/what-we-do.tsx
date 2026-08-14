"use client"

import { useState } from "react"

const SERVICES = [
  { title: "Residential interior", image: "/images/cat-residential.png", body: "Your home is where your real life happens. We design it to feel exactly that - warm, personal, and unmistakably yours." },
  { title: "Commercial interior", image: "/images/cat-commercial.png", body: "Workspaces that reflect your brand and support how your team actually works." },
  { title: "Space planning & layout", image: "/images/cat-space.png", body: "Thoughtful layouts that let a space breathe - improving flow, light, and connection." },
  { title: "Arts & Furniture", image: "/images/cat-arts.png", body: "Curated pieces, custom furniture, and art that give a space its character." },
]

export function WhatWeDo() {
  const [active, setActive] = useState(0)
  return (
    <section className="min-h-[635px] bg-[#f5f1e8] px-6 py-10 md:px-12 md:py-[42px]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(300px,1fr)]">
        <div className="overflow-hidden rounded-[3px]">
          <img src={SERVICES[active].image} alt={SERVICES[active].title} className="h-[520px] w-full object-cover transition-opacity duration-500" />
        </div>
        <div className="flex h-[520px] flex-col justify-center">
          {SERVICES.map((service, i) => {
            const open = i === active
            return (
              <button key={service.title} onClick={() => setActive(i)} className="border-b border-black/20 py-5 text-left first:border-t transition-opacity" aria-expanded={open}>
                <div className="text-[16px] font-medium tracking-[-.02em]">{service.title}</div>
                {open && <p className="mt-5 max-w-[330px] text-[14px] leading-[1.35] text-black/60">{service.body}</p>}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
