import { useEffect, useRef, useState } from "react"
import siteConfig from "../config/siteConfig"

function useCountUp(end, duration = 1500, startAnimation) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    let start = 0
    const increment = end / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [end, duration, startAnimation])

  return count
}

export default function StatsSection() {
  const section = siteConfig?.sections?.stats
  const theme = siteConfig?.theme || {}

  if (!section?.enabled) return null

  const { title, items } = section
  const colors = theme?.colors || {}
  const ui = theme?.ui || {}

  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // Trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-20 md:py-24 px-6"
      style={{
        background: colors.surface || "#111827",
        color: colors.text || "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        {title && (
          <div className="mb-14 md:mb-16">
           <h2
  className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
  }}
></h2>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {items?.map((item, index) => {
            const count = useCountUp(item.value, 1500, visible)

            return (
              <div key={index}>
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    background: `linear-gradient(90deg, ${
                      colors.primary || "#3b82f6"
                    }, ${colors.accent || "#8b5cf6"})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {count}
                  {item.suffix}
                </div>

                <div
                  className="text-sm md:text-base"
                  style={{ color: colors.muted || "#94a3b8" }}
                >
                  {item.label}
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}