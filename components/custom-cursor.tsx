"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia("(pointer:fine)").matches
    setEnabled(fine)
    if (!fine) return
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e: MouseEvent) => setHover(!!(e.target as HTMLElement)?.closest("a,button"))
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
    }
  }, [])

  if (!enabled) return null
  return <span aria-hidden="true" className={`pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full border border-white mix-blend-difference md:block ${hover ? "scale-[2.2]" : "scale-100"}`} style={{ transform: `translate3d(${pos.x - 6}px, ${pos.y - 6}px, 0)`, transition: "transform .18s ease, width .2s ease, height .2s ease" }} />
}
