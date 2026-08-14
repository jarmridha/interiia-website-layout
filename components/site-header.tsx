"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "/about" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-cream/80 px-5 py-2.5 backdrop-blur-md">
        <a href="/" className="text-lg font-medium tracking-tight text-foreground">
          Interiia
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Start a project
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border/60 bg-cream/95 p-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-full bg-foreground px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Start a project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
