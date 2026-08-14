import { ArrowUpRight } from "lucide-react"

const SITEMAP = ["Home", "Projects", "Blogs", "Gallery", "About us", "Contact us"]

export function SiteFooter() {
  return (
    <footer className="bg-[#242424] text-white">
      <section className="relative h-[375px] overflow-hidden">
        <img src="/images/cta-sofa.png" alt="Warm interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute left-6 top-12 w-[400px] bg-[#242424] p-6 md:left-12 md:top-12">
          <h2 className="text-[38px] leading-[1.05] tracking-[-.045em]">Build your dream<br />space with us</h2>
          <p className="mt-7 max-w-[330px] text-[13px] font-semibold leading-[1.3] text-white/75">Interiia is a studio-based interior design practice helping homeowners and businesses shape spaces around how they actually live, work, and feel.</p>
          <a href="/contact" className="mt-7 inline-flex items-center gap-3 rounded-[3px] bg-[#f5f1e8] px-3 py-2 text-[12px] text-black">Contact us <ArrowUpRight className="h-3.5 w-3.5" /></a>
        </div>
      </section>

      <section className="px-6 py-8 md:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div><p className="border-b border-white/20 pb-4 text-[11px] font-semibold">Sitemap</p><div className="pt-4 flex flex-col gap-2 text-[14px] font-semibold">{SITEMAP.map(x => <a key={x} href={x === "Home" ? "/" : `/${x.toLowerCase().replace(" ", "")}`}>{x}</a>)}</div></div>
          <div><p className="border-b border-white/20 pb-4 text-[11px] font-semibold">Visit</p><p className="pt-4 text-[14px] font-semibold leading-[1.45]">42 Riverside Lane, Studio<br />3, Toronto, ON M5V 2T6</p></div>
          <div><p className="border-b border-white/20 pb-4 text-[11px] font-semibold">Work With Us</p><a href="mailto:uxridham@gmail.com" className="block pt-4 text-[14px] font-semibold">uxridham@gmail.com</a></div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-14">
          <div className="overflow-hidden text-[31vw] leading-[.72] tracking-[-.07em] text-white md:text-[24vw]">Interiia</div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-white/20 pt-4 text-[10px] font-semibold">
          <div className="flex gap-6"><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">LinkedIn</a><a href="#">X</a></div>
          <div>© {new Date().getFullYear()} Interiia Studio Inc.</div>
        </div>
      </section>
    </footer>
  )
}
