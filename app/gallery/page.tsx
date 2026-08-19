import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GalleryMarquee } from "@/components/gallery-marquee"

const IMAGES = ["/images/gallery-1.png","/images/gallery-2.png","/images/gallery-3.png","/images/cat-residential.png","/images/cat-commercial.png","/images/cat-space.png"]

export default function GalleryPage() {
  return <><SiteHeader /><main className="pt-24"><section className="px-4 py-16 md:py-24"><div className="mx-auto max-w-6xl"><p className="text-xs uppercase tracking-widest text-muted-foreground">Gallery</p><h1 className="mt-3 text-5xl font-medium tracking-tight sm:text-7xl">Construction & project work.</h1></div></section><GalleryMarquee /><section className="px-4 py-16 md:py-24"><div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">{IMAGES.map((src,i)=><div key={src} className="overflow-hidden rounded-3xl"><img src={src} alt={`Mridha Construction project ${i+1}`} className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105" /></div>)}</div></section></main><SiteFooter /></>
}
