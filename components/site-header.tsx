"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV = [
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const home = pathname === "/"

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b ${home ? "border-white/20 bg-black/10 text-white" : "border-black/10 bg-[#f5f1e8]/95 text-[#171717]"} backdrop-blur-[2px]`}>
      <nav className="mx-auto flex min-h-[58px] items-center justify-between px-5 md:px-12">
        <a href="/" className="flex items-center gap-2.5 text-[13px] font-semibold tracking-[-0.02em]">
          <img src="/mridha-logo.svg" alt="Mridha Construction and Consultancy" className="h-8 w-8 rounded-full object-cover" />
          <span className="hidden sm:inline">Mridha Construction &amp; Consultancy</span>
          <span className="sm:hidden">Mridha C&amp;C</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="text-[11px] font-semibold tracking-[-0.01em] transition-opacity hover:opacity-60">
              {item.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className={`border-t px-5 py-4 md:hidden ${home ? "border-white/20 bg-black/90 text-white" : "border-black/10 bg-[#f5f1e8] text-[#171717]"}`}>
          <div className="flex flex-col gap-4">
            {NAV.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium">{item.label}</a>)}
          </div>
        </div>
      )}
    </header>
  )
}
