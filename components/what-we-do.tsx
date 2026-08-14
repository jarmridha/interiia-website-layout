"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const SERVICES = [
  {
    title: "Residential interior",
    image: "/images/cat-residential.png",
    body: "Your home is where your real life happens. We design it to feel exactly that — warm, personal, and unmistakably yours.",
  },
  {
    title: "Commercial interior",
    image: "/images/cat-commercial.png",
    body: "Workspaces that reflect your brand and support how your team actually works, without sacrificing warmth or comfort.",
  },
  {
    title: "Space planning & layout",
    image: "/images/cat-space.png",
    body: "Thoughtful layouts that let a space breathe — improving flow, light, and the way every room connects to the next.",
  },
  {
    title: "Arts & Furniture",
    image: "/images/cat-arts.png",
    body: "Curated pieces, custom furniture, and art that give a space its character and make it feel considered down to the detail.",
  },
]

export function WhatWeDo() {
  const [active, setActive] = useState(0)

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          What we do best
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={SERVICES[active].image || "/placeholder.svg"}
              alt={SERVICES[active].title}
              className="h-72 w-full object-cover transition-all duration-500 md:h-[28rem]"
            />
          </div>

          <div className="flex flex-col">
            {SERVICES.map((service, i) => {
              const isActive = i === active
              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className="border-b border-border py-5 text-left"
                  aria-expanded={isActive}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xl font-medium text-foreground sm:text-2xl">
                      {service.title}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isActive ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`grid transition-all duration-300 ${
                      isActive
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                      {service.body}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
