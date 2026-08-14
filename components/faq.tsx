"use client"

import { useState } from "react"
import { Plus, ArrowUpRight } from "lucide-react"

const FAQS = [
  ["What does your interior design process look like?", "It starts with listening. We learn how you live, then move through concept, layout, materials, and execution."],
  ["Do you provide 3D renders before execution?", "Yes. Detailed renders are shared before execution so you can review the design."],
  ["Do you handle sourcing materials and furniture?", "Yes. We source finishes, furniture and details as part of the project."],
  ["Can you work with the furniture I already own?", "Absolutely. Existing pieces can be integrated into the new design."],
  ["How many design revisions do we get?", "We iterate within the agreed project scope until the direction feels right."],
  ["Do you also manage on-site execution and contractors?", "Yes. We can coordinate execution and contractor work on site."],
  ["What spaces do you design — only homes or commercial too?", "Both residential and commercial interiors."],
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="bg-[#f5f1e8] px-6 py-8 md:px-12 md:py-9">
      <h2 className="border-b border-black/20 pb-5 text-[38px] leading-none tracking-[-.045em] md:text-[40px]">Questions worth asking</h2>
      <div className="mt-8 grid gap-16 md:grid-cols-[320px_1fr] md:gap-[18%]">
        <div className="h-fit rounded-[6px] bg-[#ebe5d9] p-5">
          <img src="/images/avatar-support.png" alt="" className="h-[39px] w-[39px] rounded-[3px] object-cover" />
          <p className="mt-6 text-[16px] font-medium">Can&apos;t find what you&apos;re looking for?</p>
          <p className="mt-3 text-[14px] leading-[1.3] text-black/65">We&apos;re just a message away - real answers from real people, no bots, no waiting</p>
          <a href="/contact" className="mt-10 inline-flex items-center gap-3 rounded-[3px] border border-black/50 px-3 py-2 text-[12px]">Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" /></a>
        </div>
        <div>
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i
            return <div key={q} className="border-b border-black/20"><button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium"><span>{q}</span><Plus className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} /></button>{isOpen && <p className="pb-4 pr-8 text-[13px] leading-[1.35] text-black/60">{a}</p>}</div>
          })}
        </div>
      </div>
    </section>
  )
}
