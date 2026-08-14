import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatWeDo } from "@/components/what-we-do"

const SERVICES = ["Residential interiors","Commercial interiors","Space planning","Interior styling","Concept design & visualization","Furniture & material selection"]

export default function ServicesPage() {
  return <><SiteHeader /><main className="pt-24"><section className="px-4 py-16 md:py-24"><div className="mx-auto max-w-6xl"><p className="text-xs uppercase tracking-widest text-muted-foreground">Services</p><h1 className="mt-3 max-w-4xl text-5xl font-medium tracking-tight sm:text-7xl">Design from first idea to final detail.</h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">A considered design service for homes, workspaces and hospitality environments, tailored to the way you use your space.</p></div></section><WhatWeDo /><section className="px-4 py-16 md:py-24"><div className="mx-auto max-w-6xl divide-y divide-border rounded-3xl border border-border/60 bg-card">{SERVICES.map((s,i)=><div key={s} className="flex items-center justify-between p-6 md:p-8"><span className="text-sm text-muted-foreground">0{i+1}</span><h2 className="text-xl font-medium md:text-3xl">{s}</h2><span className="text-sm text-muted-foreground">Explore →</span></div>)}</div></section></main><SiteFooter /></>
}
