"use client"

import { useEffect, useState } from "react"

export function SitePreloader() {
  const [progress, setProgress] = useState(1)
  const [leaving, setLeaving] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const duration = 2200
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const elapsed = now - start
      const value = Math.min(100, Math.max(1, Math.floor((elapsed / duration) * 100)))
      setProgress(value)

      if (value < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        // Hold 100 briefly, then reveal the site with the same clean editorial feel.
        window.setTimeout(() => setLeaving(true), 180)
        window.setTimeout(() => setHidden(true), 850)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  if (hidden) return null

  return (
    <div
      className={`site-preloader ${leaving ? "is-leaving" : ""}`}
      aria-hidden="true"
    >
      <div className="site-preloader__name">Interiia</div>

      <div className="site-preloader__line" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      <div className="site-preloader__counter">
        <span>{progress}</span>
        <small>%</small>
      </div>
    </div>
  )
}
