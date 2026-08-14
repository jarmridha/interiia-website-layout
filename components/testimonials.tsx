"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const TESTIMONIALS = [
  { quote: "They didn't just redesign my living room - they redesigned how I feel when I come home. There's a calm here I didn't know I was missing until they created it.", name: "Sophia Renault", role: "Homeowner", avatar: "/images/avatar-neha.png", image: "/images/project-birchwood.png" },
  { quote: "They listened to how we actually live before drawing a single line. The result feels less like a renovation and more like the home we always meant to have.", name: "Daniel Brooks", role: "Homeowner", avatar: "/images/avatar-support.png", image: "/images/project-kestrel.png" },
  { quote: "Every detail was considered, every material intentional. Interiia turned a cramped loft into a space that finally feels calm and completely ours.", name: "Amara Osei", role: "Homeowner", avatar: "/images/avatar-neha.png", image: "/images/project-marlowe.png" },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = TESTIMONIALS[index]
  const go = (dir: number) => setIndex((index + dir + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="bg-[#f5f1e8] px-6 py-8 md:px-12 md:py-9">
      <h2 className="border-b border-black/20 pb-5 text-[38px] leading-none tracking-[-.045em] md:text-[40px]">Real home, Real reactions</h2>
      <div className="mt-8 grid gap-1 md:grid-cols-[1fr_1fr]">
        <div className="overflow-hidden rounded-[3px]"><img src={active.image} alt={active.name} className="h-[390px] w-full object-cover transition-all duration-500" /></div>
        <div className="relative min-h-[390px] bg-[#ebe5d9] p-5 md:p-6">
          <blockquote className="max-w-[430px] text-[20px] font-medium leading-[1.18] tracking-[-.025em]">&quot;{active.quote}&quot;</blockquote>
          <div className="absolute bottom-6 left-5 flex items-center gap-3 md:left-6"><img src={active.avatar} alt="" className="h-[38px] w-[38px] rounded-[3px] object-cover" /><div><div className="text-[13px] font-semibold">{active.name}</div><div className="text-[12px]">{active.role}</div></div></div>
          <div className="absolute bottom-0 right-0 w-[45%]"><div className="flex items-center gap-4 border-b border-black/20 pb-3 text-[12px]"><span>{String(index + 1).padStart(2, "0")}/{String(TESTIMONIALS.length).padStart(2, "0")}</span><div className="ml-auto flex gap-4 pr-2"><button onClick={() => go(-1)} aria-label="Previous"><ArrowLeft className="h-4 w-4" /></button><button onClick={() => go(1)} aria-label="Next"><ArrowRight className="h-4 w-4" /></button></div></div></div>
        </div>
      </div>
    </section>
  )
}
