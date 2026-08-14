const STATS = [
  { value: "2019", label: "Established" },
  { value: "100%", label: "Quality focused" },
  { value: "360°", label: "Project lifecycle" },
]

const GALLERY = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
]

export function Introduction() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#f5f1e8] px-6 py-[82px] md:px-12">
      <div className="max-w-[650px]">
        <p className="mb-10 text-[11px] font-semibold uppercase tracking-[.08em]">About Mridha Construction &amp; Consultancy</p>
        <h2 className="mb-8 max-w-[620px] text-[42px] leading-[1.05] tracking-[-.045em] md:text-[52px]">
          Building Trust. Delivering Excellence.
        </h2>
        <p className="max-w-[650px] text-[20px] leading-[1.38] tracking-[-.025em] md:text-[24px]">
          Reliable construction and engineering solutions, built on expertise, integrity, quality, and a commitment to delivering lasting value.
        </p>
        <div className="mt-10 max-w-[610px] space-y-5 text-[15px] leading-[1.55] text-black/75">
          <p><strong className="text-black">Mridha Construction and Consultancy</strong> is a professional construction and engineering company delivering reliable, quality-driven, and value-focused solutions across Bangladesh. Since 2019, we have been committed to transforming our clients&apos; ideas into well-planned, professionally executed, and built-to-last projects.</p>
          <p>From building construction and interior fit-outs to residential and commercial renovation, refurbishment, and engineering consultancy, we provide comprehensive solutions throughout the project lifecycle—from planning and estimation to execution, quality assurance, and final handover.</p>
          <p>Our work is guided by engineering expertise, disciplined project management, transparent communication, and uncompromising attention to quality and safety. We understand that every project represents a significant investment, which is why we take responsibility for every detail and remain focused on delivering the right solution—not simply the quickest one.</p>
          <p>At <strong className="text-black">Mridha Construction and Consultancy</strong>, we believe trust is earned through consistent performance, honest communication, dependable workmanship, and results that stand the test of time.</p>
          <p className="font-semibold text-black">Your project is more than a job to us—it is a responsibility we take seriously.</p>
        </div>
        <div className="mt-9 grid grid-cols-3 border-t border-black/20 pt-7">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-[24px] leading-none tracking-[-.03em]">{stat.value}</div>
              <div className="mt-2 text-[12px] text-black/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-[180px] w-[58%] md:h-[190px] md:w-[55%]">
        {GALLERY.map((src, i) => (
          <div key={src} className="absolute bottom-0 overflow-hidden rounded-t-[3px]" style={{ right: `${i * 31}%`, width: `${35 - i * 4}%`, height: `${70 + i * 27}%`, zIndex: i + 1 }}>
            <img src={src} alt="Construction and interior project detail" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
