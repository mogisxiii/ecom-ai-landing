import siteConfig from "../config/siteConfig"

export default function HeroSection() {
  const hero = siteConfig?.sections?.hero
  const theme = siteConfig?.theme || {}

  if (!hero?.enabled) return null

  const {
    badge,
    title,
    subtitle,
    primaryButton,
    secondaryButton,
  } = hero

  const colors = theme?.colors || {}
  const ui = theme?.ui || {}
  const preset = theme?.preset || "dark-tech"

  const primaryButtonStyle =
    ui?.buttonStyle === "gradient"
      ? {
          background: `linear-gradient(135deg, ${
            colors.primary || "#3b82f6"
          }, ${colors.accent || "#8b5cf6"})`,
          borderRadius: ui?.borderRadius || "14px",
        }
      : {
          background: colors.primary || "#3b82f6",
          borderRadius: ui?.borderRadius || "14px",
        }

  const secondaryButtonStyle = {
    border: `1px solid ${colors.muted || "#94a3b8"}`,
    color: colors.text || "#ffffff",
    borderRadius: ui?.borderRadius || "14px",
  }

  // 🔥 Scroll helper
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-28 md:py-36 px-6"
      style={{
        background: colors.background || "#0f172a",
        color: colors.text || "#ffffff",
      }}
    >
      {/* Background Glow */}
      {preset === "dark-tech" && (
        <div
          className="absolute inset-0 opacity-30 blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${
              colors.primary || "#3b82f6"
            }, transparent 60%)`,
          }}
        />
      )}

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Badge */}
        {badge && (
          <div
            className="inline-block mb-6 px-4 py-2 text-sm font-medium tracking-wide"
            style={{
              background: colors.surface || "#111827",
              borderRadius: ui?.borderRadius || "14px",
              color: colors.secondary || "#06b6d4",
            }}
          >
            {badge}
          </div>
        )}

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6"
          style={{
            background: `linear-gradient(90deg, ${
              colors.primary || "#3b82f6"
            }, ${colors.accent || "#8b5cf6"})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12"
          style={{ color: colors.muted || "#94a3b8" }}
        >
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {primaryButton && (
            <button
              onClick={() => scrollToSection("demo")}
              className="px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              style={primaryButtonStyle}
            >
              {primaryButton.text}
            </button>
          )}

          {secondaryButton && (
            <button
              onClick={() => scrollToSection("process")}
              className="px-8 py-4 font-semibold transition-all duration-300 hover:bg-white/5"
              style={secondaryButtonStyle}
            >
              {secondaryButton.text}
            </button>
          )}

        </div>
      </div>
    </section>
  )
}