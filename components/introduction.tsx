const STATS = [
  { value: "100+", label: "Projects completed" },
  { value: "10+", label: "Awards won" },
  { value: "4.9", label: "Client rating" },
]

const GALLERY = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
]

export function Introduction() {
  return (
    <section className="relative min-h-[635px] overflow-hidden bg-[#f5f1e8] px-6 py-[82px] md:px-12">
      <div className="max-w-[455px]">
        <p className="mb-24 text-[11px] font-semibold">Introduction</p>
        <p className="text-[26px] leading-[1.27] tracking-[-.035em] md:text-[26px]">
          We&apos;re not just decorators. We&apos;re listeners, problem-solvers, and believers that your home should work for your life - not the other way around. Every project starts the same way: we sit down, we listen, we learn who you are.
        </p>
        <div className="mt-8 grid grid-cols-3 border-t border-black/20 pt-7">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-[26px] leading-none tracking-[-.03em]">{stat.value}</div>
              <div className="mt-2 text-[12px] text-black/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-[150px] w-[62%] md:h-[165px] md:w-[61%]">
        {GALLERY.map((src, i) => (
          <div key={src} className="absolute bottom-0 overflow-hidden rounded-t-[3px]" style={{ right: `${i * 31}%`, width: `${35 - i * 4}%`, height: `${70 + i * 27}%`, zIndex: i + 1 }}>
            <img src={src} alt="Interior detail" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
