"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "Our office used to feel like any other office. Now clients walk in and immediately ask who designed it. That reaction alone was worth every penny.",
    name: "Neha Pandey",
    role: "Homeowner",
    avatar: "/images/avatar-neha.png",
  },
  {
    quote:
      "They listened to how we actually live before drawing a single line. The result feels less like a renovation and more like the home we always meant to have.",
    name: "Daniel Brooks",
    role: "Homeowner",
    avatar: "/images/avatar-support.png",
  },
  {
    quote:
      "Every detail was considered, every material intentional. Interiia turned a cramped loft into a space that finally feels calm and completely ours.",
    name: "Amara Osei",
    role: "Homeowner",
    avatar: "/images/avatar-neha.png",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const active = TESTIMONIALS[index]

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total)

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Real home, Real reactions
        </h2>

        <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-12">
          <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          <div className="mt-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={active.avatar || "/placeholder.svg"}
                alt={active.name}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {active.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {active.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}/
                {String(total).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
