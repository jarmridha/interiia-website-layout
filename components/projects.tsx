const PROJECTS = [
  { tag: "Residential", title: "The Birchwood Residence", body: "A full interior renovation of a mid-century home, blending warm wood tones with soft, minimal furnishings.", image: "/images/project-birchwood.png" },
  { tag: "Commercial", title: "Kestrel & Co Headquarters", body: "Warm wood-paneled meeting rooms and a library lounge that softened the formality of law.", image: "/images/project-kestrel.png" },
  { tag: "Residential", title: "Marlowe Coastal Retreat", body: "A beachside apartment redesigned to bring natural light and coastal materials into every room.", image: "/images/project-marlowe.png" },
  { tag: "Residential", title: "Nordhaven Studio Loft", body: "A compact city loft reimagined with multipurpose furniture and a calm, tonal palette.", image: "/images/project-nordhaven.png" },
]

export function Projects() {
  return (
    <section id="projects" className="bg-[#f5f1e8] px-6 py-7 md:px-12 md:py-8">
      <h2 className="border-b border-black/20 pb-5 text-[38px] leading-none tracking-[-.045em] md:text-[40px]">This is what we mean</h2>
      <div className="pt-8">
        {PROJECTS.map((project) => (
          <article key={project.title} className="grid gap-8 border-b border-black/20 py-8 first:pt-0 md:grid-cols-[190px_492px_1fr] md:items-start">
            <div className="text-[11px] font-semibold">Projects</div>
            <div className="overflow-hidden rounded-[3px]">
              <img src={project.image} alt={project.title} className="h-[327px] w-full object-cover transition-transform duration-700 hover:scale-[1.025]" />
            </div>
            <div className="pt-0 md:pl-0">
              <span className="inline-block rounded-[3px] border border-black/50 px-2 py-1 text-[10px]">{project.tag}</span>
              <h3 className="mt-5 text-[16px] font-medium tracking-[-.02em]">{project.title}</h3>
              <p className="mt-2 max-w-[400px] text-[14px] leading-[1.25] text-black/70">{project.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
