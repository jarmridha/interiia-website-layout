"use client"

import { useEffect, useState } from "react"

export function SitePreloader() {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const duration = 1250
    let frame = 0

    const tick = (now: number) => {
      const elapsed = now - start
      const value = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(value)
      if (value < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setLeaving(true), 120)
        setTimeout(() => setHidden(true), 850)
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
      <div className="site-preloader__top">
        <span>Interiia</span>
        <span>{String(progress).padStart(2, "0")}</span>
      </div>
      <div className="site-preloader__brand">Interiia</div>
      <div className="site-preloader__bottom">
        <span>Interior design studio</span>
        <span>Toronto · Canada</span>
      </div>
      <div className="site-preloader__bar">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  )
}
