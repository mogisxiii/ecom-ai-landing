import { useEffect, useRef, useState } from "react"
import siteConfig from "../config/siteConfig"

export default function CTASection() {
  const cta = siteConfig?.sections?.cta
  const theme = siteConfig?.theme || {}

  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // trigger 1 lần duy nhất
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  if (!cta?.enabled) return null

  const {
    title,
    subtitle,
    primaryButton,
    secondaryButton,
    highlight,
  } = cta

  const colors = theme?.colors || {}
  const ui = theme?.ui || {}
  const preset = theme?.preset || "dark-tech"

  const primaryButtonStyle =
    ui?.buttonStyle === "gradient"
      ? {
          background: `linear-gradient(135deg, ${
            colors.primary || "#3b82f6"
          }, ${colors.accent || "#8b5cf6"})`,
          borderRadius: ui?.borderRadius || "12px",
        }
      : {
          background: colors.primary || "#3b82f6",
          borderRadius: ui?.borderRadius || "12px",
        }

  const secondaryButtonStyle = {
    border: `1px solid ${colors.muted || "#94a3b8"}`,
    color: colors.text || "#ffffff",
    borderRadius: ui?.borderRadius || "12px",
  }

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative overflow-hidden py-24 px-6 text-center transition-all duration-1000 ease-out"
      style={{
        background: colors.background || "#0f172a",
        color: colors.text || "#ffffff",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0px)"
          : "translateY(40px)",
      }}
    >
      {/* Glow Background */}
      {preset === "dark-tech" && (
        <div
          className="absolute inset-0 opacity-20 blur-3xl"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${
              colors.accent || "#8b5cf6"
            }, transparent 60%)`,
          }}
        />
      )}

      <div className="relative max-w-4xl mx-auto">

        {highlight && (
          <div
            className="inline-block mb-6 px-4 py-2 text-sm font-medium transition-all duration-700"
            style={{
              background: colors.surface || "#111827",
              borderRadius: ui?.borderRadius || "12px",
              color: colors.secondary || "#06b6d4",
            }}
          >
            {highlight}
          </div>
        )}

        {title && (
          <h2
  className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
  }}
>
            {title}
          </h2>
        )}

        {subtitle && (
          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: colors.muted || "#94a3b8" }}
          >
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {primaryButton && (
            <a
              href={primaryButton.link}
              className="px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              style={primaryButtonStyle}
            >
              {primaryButton.text}
            </a>
          )}

          {secondaryButton && (
            <a
              href={secondaryButton.link}
              className="px-8 py-4 font-semibold transition-all duration-300 hover:bg-white/5"
              style={secondaryButtonStyle}
            >
              {secondaryButton.text}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}