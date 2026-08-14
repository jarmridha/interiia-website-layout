const STATS = [
  { value: "100+", label: "Projects completed" },
  { value: "10+", label: "Awards won" },
  { value: "4.9", label: "Client rating" },
]

export function Introduction() {
  return (
    <section id="about" className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
          Introduction
        </p>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            We&apos;re not just decorators. We&apos;re listeners,
            problem-solvers, and believers that your home should work for your
            life — not the other way around. Every project starts the same way:
            we sit down, we listen, we learn who you are.
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 lg:border-t-0 lg:pt-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl font-medium text-foreground sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
