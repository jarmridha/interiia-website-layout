import { ArrowUpRight } from "lucide-react"

const SITEMAP = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Gallery", href: "#gallery" },
  { label: "About us", href: "#about" },
  { label: "Contact us", href: "#contact" },
]

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="px-4 pb-4">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink text-cream">
        {/* CTA */}
        <div className="relative">
          <img
            src="/images/cta-sofa.png"
            alt="A plush cream boucle sofa on warm oak flooring"
            className="h-64 w-full object-cover md:h-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-0 flex items-end p-6 md:p-12">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Build your dream space with us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Interiia is a studio-based interior design practice helping
                homeowners and businesses shape spaces around how they actually
                live, work, and feel.
              </p>
              <a
                href="mailto:studio@interiia.com"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                Contact us
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-10 border-t border-cream/10 p-6 md:grid-cols-3 md:p-12">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-cream/50">
              Sitemap
            </p>
            <ul className="flex flex-col gap-2">
              {SITEMAP.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-cream/50">
              Visit
            </p>
            <p className="text-sm leading-relaxed text-cream/80">
              42 Riverside Lane, Studio 3,
              <br />
              Toronto, ON M5V 2T6
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-cream/50">
              Work With Us
            </p>
            <a
              href="mailto:studio@interiia.com"
              className="text-sm text-cream/80 transition-colors hover:text-cream"
            >
              studio@interiia.com
            </a>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div className="px-6 pb-2 md:px-12">
          <p className="w-full text-center text-[22vw] font-medium leading-none tracking-tight text-cream md:text-[16vw]">
            Interiia
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-cream/10 p-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between md:px-12">
          <p>© {new Date().getFullYear()} Interiia Studio Inc.</p>
          <p>Crafted with care in Toronto.</p>
        </div>
      </div>
    </footer>
  )
}
