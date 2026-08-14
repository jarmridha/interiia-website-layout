"use client"

import { useState } from "react"
import { Plus, ArrowUpRight } from "lucide-react"

const FAQS = [
  {
    q: "What does your interior design process look like?",
    a: "It starts with listening. We sit down with you, learn how you live, then move through concept, layout, material selection, and execution — keeping you involved at every step.",
  },
  {
    q: "Do you provide 3D renders before execution?",
    a: "Yes. Before anything is built or bought, we share detailed 3D renders so you can see and feel the space and refine it with us.",
  },
  {
    q: "Do you handle sourcing materials and furniture?",
    a: "We do. From finishes to furniture, we source and manage everything so the final space matches the design exactly.",
  },
  {
    q: "Can you work with the furniture I already own?",
    a: "Absolutely. We love blending pieces you already treasure with new additions to keep the space personal and lived-in.",
  },
  {
    q: "How many design revisions do we get?",
    a: "As many as it takes to get it right within your project scope. We iterate until the space genuinely feels like yours.",
  },
  {
    q: "Do you also manage on-site execution and contractors?",
    a: "Yes. We coordinate contractors and oversee execution on-site so the design is delivered to the standard we promised.",
  },
  {
    q: "What spaces do you design — only homes or commercial too?",
    a: "Both. We work across residential and commercial projects, from private homes to offices and hospitality spaces.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Questions worth asking
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div className="flex h-fit flex-col gap-5 rounded-3xl bg-muted p-6">
            <img
              src="/images/avatar-support.png"
              alt="Interiia support"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-medium text-foreground">
                Can&apos;t find what you&apos;re looking for?
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We&apos;re just a message away — real answers from real people,
                no bots, no waiting.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col">
            {FAQS.map((faq, i) => {
              const isOpen = i === open
              return (
                <button
                  key={faq.q}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="border-b border-border py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-medium text-foreground sm:text-lg">
                      {faq.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
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
