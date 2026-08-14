import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Belief } from "@/components/belief"
import { Introduction } from "@/components/introduction"

export default function AboutPage() {
  return (
    <><SiteHeader /><main className="pt-24"><Introduction /><Belief /><section className="px-4 py-16 md:py-24"><div className="mx-auto max-w-6xl rounded-3xl bg-card p-8 md:p-12"><p className="text-xs uppercase tracking-widest text-muted-foreground">Our studio</p><h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">Thoughtful interiors, shaped around real life.</h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">Interiia is an interior design studio focused on calm, functional and characterful spaces. We combine architecture, materials, furniture and light into interiors that feel personal rather than prescribed.</p></div></section></main><SiteFooter /></>
  )
}
