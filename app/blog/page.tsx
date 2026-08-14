import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const POSTS = [
  ["01","Designing calmer homes without losing personality"],["02","Why material palettes matter more than trends"],["03","Small spaces, considered details"],["04","Lighting as an architectural material"],["05","A practical guide to planning an interior project"],["06","The details that make a room feel finished"],
]

export default function BlogPage() {
  return <><SiteHeader /><main className="pt-24"><section className="px-4 py-16 md:py-24"><div className="mx-auto max-w-6xl"><p className="text-xs uppercase tracking-widest text-muted-foreground">Journal</p><h1 className="mt-3 text-5xl font-medium tracking-tight sm:text-7xl">Ideas, interiors & insight.</h1></div></section><section className="px-4 pb-20 md:pb-28"><div className="mx-auto max-w-6xl divide-y divide-border border-y border-border">{POSTS.map(([n,title])=><article key={n} className="group grid gap-4 py-7 md:grid-cols-[80px_1fr_auto] md:items-center"><span className="text-sm text-muted-foreground">{n}</span><h2 className="text-2xl font-medium tracking-tight transition-transform group-hover:translate-x-2 md:text-4xl">{title}</h2><span className="text-sm text-muted-foreground">Read article ↗</span></article>)}</div></section></main><SiteFooter /></>
}
