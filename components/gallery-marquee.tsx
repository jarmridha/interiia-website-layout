const GALLERY = [
  { src: "/images/gallery-1.png", alt: "Minimalist dining nook with a round wooden table" },
  { src: "/images/gallery-2.png", alt: "Cozy reading corner with built-in oak shelving" },
  { src: "/images/gallery-3.png", alt: "Sunlit bedroom with linen bedding" },
  { src: "/images/gallery-4.png", alt: "Modern kitchen with fluted oak cabinetry" },
  { src: "/images/gallery-5.png", alt: "Serene bathroom with travertine walls" },
  { src: "/images/gallery-6.png", alt: "Entryway hallway with an arched doorway" },
]

export function GalleryMarquee() {
  const items = [...GALLERY, ...GALLERY]

  return (
    <section id="gallery" className="overflow-hidden py-14 md:py-20">
      <div className="marquee-mask">
        <div className="flex w-max animate-marquee gap-4 pl-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="h-56 w-72 shrink-0 overflow-hidden rounded-2xl md:h-72 md:w-96"
            >
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
