import { ArrowUpRight } from "lucide-react"

const PROJECTS = [
  {
    tag: "Residential",
    title: "The Birchwood Residence",
    body: "A full interior renovation of a mid-century home, blending warm wood tones with soft, minimal furnishings.",
    image: "/images/project-birchwood.png",
  },
  {
    tag: "Commercial",
    title: "Kestrel & Co Headquarters",
    body: "Warm wood-paneled meeting rooms and a library lounge that softened the formality of law.",
    image: "/images/project-kestrel.png",
  },
  {
    tag: "Residential",
    title: "Marlowe Coastal Retreat",
    body: "A beachside apartment redesigned to bring natural light and coastal materials into every room.",
    image: "/images/project-marlowe.png",
  },
  {
    tag: "Residential",
    title: "Nordhaven Studio Loft",
    body: "A compact city loft reimagined with multipurpose furniture and a calm, tonal palette.",
    image: "/images/project-nordhaven.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Projects
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            This is what we mean
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-72"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <span className="w-fit rounded-full bg-muted px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {project.tag}
                </span>
                <h3 className="text-xl font-medium text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.body}
                </p>
                <a
                  href="#contact"
                  className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  View project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
