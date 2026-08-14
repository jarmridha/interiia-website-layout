import { ArrowUpRight } from "lucide-react"

const STATS = [
  { label: "Studio", value: "Interiia, Toronto" },
  { label: "Est. since", value: "2020" },
  { label: "Speciality", value: "Residential & Commercial" },
  { label: "Rating", value: "4.9+" },
]

export function Hero() {
  return (
    <section id="top" className="px-4 pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <h1 className="text-balance text-5xl font-medium leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              We design around your dreams
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Interiia designs spaces that are tactile, considered, and built
              around how life actually happens. Based in Toronto, we work with
              clients who want more than a beautiful room — they want a space
              that understands them completely.
            </p>
            <a
              href="#projects"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl">
          <img
            src="/images/hero.png"
            alt="A serene modern living room with a lit fireplace and warm oak floors"
            className="h-[52vh] min-h-80 w-full object-cover md:h-[64vh]"
          />
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 rounded-3xl border border-border/60 bg-card p-6 md:grid-cols-4 md:p-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="text-base font-medium text-foreground">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
