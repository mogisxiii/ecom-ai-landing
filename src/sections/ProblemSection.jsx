import siteConfig from "../config/siteConfig"

export default function ProblemSection() {
  const section = siteConfig?.sections?.problem
  const theme = siteConfig?.theme || {}

  if (!section?.enabled) return null

  const { title, items } = section
  const colors = theme?.colors || {}
  const ui = theme?.ui || {}

  return (
    <section
      id="problem"
      className="py-20 md:py-24 px-6"
      style={{
        background: colors.surface || "#111827",
        color: colors.text || "#ffffff",
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Title */}
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

        {/* Problem Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">

          {items?.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: colors.background || "#0F172A",
                borderRadius: ui?.borderRadius || "16px",
                border: `1px solid ${colors.muted || "#334155"}`,
              }}
            >
              <p
                className="text-base md:text-lg font-medium leading-relaxed"
                style={{ color: colors.muted || "#CBD5E1" }}
              >
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}