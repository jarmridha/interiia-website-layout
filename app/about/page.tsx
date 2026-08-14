import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Belief } from "@/components/belief"
import { Introduction } from "@/components/introduction"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-14">
        <section className="bg-[#242424] px-6 py-24 text-white md:px-12 md:py-32">
          <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-white/65">Who we are</p>
          <h1 className="mt-7 max-w-5xl text-[52px] leading-[.98] tracking-[-.055em] md:text-[92px]">Building Trust.<br />Delivering Excellence.</h1>
          <p className="mt-10 max-w-2xl text-[17px] leading-[1.55] text-white/75">Mridha Construction and Consultancy is a professional construction and engineering company delivering reliable, quality-driven, and value-focused solutions across Bangladesh.</p>
        </section>
        <Introduction />
        <Belief />
        <section className="bg-[#f5f1e8] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-5xl border-t border-black/15 pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[.08em]">Our promise</p>
            <p className="mt-7 max-w-4xl text-[30px] leading-[1.15] tracking-[-.035em] md:text-[48px]">Your project is more than a job to us—it is a responsibility we take seriously.</p>
            <p className="mt-8 max-w-2xl text-[15px] leading-[1.6] text-black/65">Trusted Expertise. Professional Execution. Lasting Value.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
