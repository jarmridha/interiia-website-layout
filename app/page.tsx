import { SiteHeader } from "@/components/site-header"
import { CustomCursor } from "@/components/custom-cursor"
import { Hero } from "@/components/hero"
import { Introduction } from "@/components/introduction"
import { WhatWeDo } from "@/components/what-we-do"
import { Belief } from "@/components/belief"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <SiteHeader />
      <CustomCursor />
      <main>
        <Hero />
        <Introduction />
        <WhatWeDo />
        <Belief />
        <Projects />
        <Testimonials />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
