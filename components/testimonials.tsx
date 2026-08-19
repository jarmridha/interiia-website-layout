"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const VALUES = [
  { title: "Quality first", body: "Every stage is approached with disciplined inspection, documentation and attention to workmanship.", image: "/images/project-birchwood.png" },
  { title: "Professional execution", body: "We coordinate people, materials, programme and technical requirements to keep delivery controlled and dependable.", image: "/images/project-kestrel.png" },
  { title: "Safety & responsibility", body: "We take project safety, compliance, communication and long-term performance seriously.", image: "/images/project-marlowe.png" },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = VALUES[index]
  const go = (dir: number) => setIndex((index + dir + VALUES.length) % VALUES.length)

  return <section className="bg-[#f5f1e8] px-6 py-8 md:px-12 md:py-9"><h2 className="border-b border-black/20 pb-5 text-[38px] leading-none tracking-[-.045em] md:text-[40px]">What we stand for</h2><div className="mt-8 grid gap-1 md:grid-cols-[1fr_1fr]"><div className="overflow-hidden rounded-[3px]"><img src={active.image} alt={active.title} className="h-[390px] w-full object-cover transition-all duration-500" /></div><div className="relative min-h-[390px] bg-[#ebe5d9] p-5 md:p-6"><h3 className="max-w-[430px] text-[30px] font-medium leading-[1.05] tracking-[-.03em]">{active.title}</h3><p className="mt-7 max-w-[430px] text-[20px] font-medium leading-[1.18] tracking-[-.025em]">{active.body}</p><div className="absolute bottom-0 right-0 w-[45%]"><div className="flex items-center gap-4 border-b border-black/20 pb-3 text-[12px]"><span>{String(index + 1).padStart(2, "0")}/{String(VALUES.length).padStart(2, "0")}</span><div className="ml-auto flex gap-4 pr-2"><button onClick={() => go(-1)} aria-label="Previous"><ArrowLeft className="h-4 w-4" /></button><button onClick={() => go(1)} aria-label="Next"><ArrowRight className="h-4 w-4" /></button></div></div></div></div></div></section>
}
