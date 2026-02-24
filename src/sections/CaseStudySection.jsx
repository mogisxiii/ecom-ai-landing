import siteConfig from "../config/siteConfig"

export default function CaseStudySection() {
  const section = siteConfig?.sections?.caseStudy
  const theme = siteConfig?.theme || {}

  if (!section?.enabled) return null

  const { title, items } = section
  const colors = theme?.colors || {}
  const ui = theme?.ui || {}

  return (
    <section
      id="case-study"
      className="py-20 md:py-24 px-6"
      style={{
        background: colors.background || "#0f172a",
        color: colors.text || "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        {title && (
          <div className="text-center mb-14 md:mb-16">
           <h2
  className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
  }}
>
              {title}
            </h2>
          </div>
        )}

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {items?.map((item, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: colors.surface || "#111827",
                borderRadius: ui?.borderRadius || "16px",
                border: `1px solid ${colors.muted || "#334155"}`,
              }}
            >
              {/* Company */}
              <div
                className="text-sm uppercase tracking-wider mb-4"
                style={{ color: colors.secondary || "#06b6d4" }}
              >
                {item.company}
              </div>

              {/* Result Highlight */}
              <div
                className="text-xl md:text-2xl font-bold mb-4"
                style={{
                  background: `linear-gradient(90deg, ${
                    colors.primary || "#3b82f6"
                  }, ${colors.accent || "#8b5cf6"})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.result}
              </div>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{ color: colors.muted || "#94a3b8" }}
              >
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}