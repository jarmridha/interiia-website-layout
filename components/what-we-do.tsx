"use client"

import { useState } from "react"

const SERVICES = [
  { title: "Building Construction", image: "/images/cat-commercial.png", body: "End-to-end construction with disciplined planning, supervision, workmanship, quality control and professional execution." },
  { title: "Interior Fit-out & Finishing", image: "/images/cat-residential.png", body: "Practical, durable and well-coordinated interior fit-out and finishing solutions for residential and commercial spaces." },
  { title: "Renovation & Refurbishment", image: "/images/cat-space.png", body: "Carefully planned renovation and refurbishment that improves functionality, appearance, safety and long-term value." },
  { title: "Engineering Consultancy", image: "/images/cat-arts.png", body: "Engineering support covering estimation, BOQ, technical documentation, QA/QC, project coordination and construction guidance." },
]

export function WhatWeDo() {
  const [active, setActive] = useState(0)
  return (
    <section className="min-h-[635px] bg-[#f5f1e8] px-6 py-10 md:px-12 md:py-[42px]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(300px,1fr)]">
        <div className="overflow-hidden rounded-[3px]"><img src={SERVICES[active].image} alt={SERVICES[active].title} className="h-[520px] w-full object-cover transition-opacity duration-500" /></div>
        <div className="flex h-[520px] flex-col justify-center">
          {SERVICES.map((service, i) => { const open = i === active; return <button key={service.title} onClick={() => setActive(i)} className="border-b border-black/20 py-5 text-left first:border-t transition-opacity" aria-expanded={open}><div className="text-[16px] font-medium tracking-[-.02em]">{service.title}</div>{open && <p className="mt-5 max-w-[330px] text-[14px] leading-[1.35] text-black/60">{service.body}</p>}</button> })}
        </div>
      </div>
    </section>
  )
}
