import siteConfig from "../config/siteConfig"

export default function PricingSection() {
  const section = siteConfig?.sections?.pricing
  const theme = siteConfig?.theme || {}

  if (!section?.enabled) return null

  const { title, subtitle, plans } = section
  const colors = theme?.colors || {}
  const ui = theme?.ui || {}

  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{
        background: colors.background || "#0f172a",
        color: colors.text || "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
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
            className="text-lg md:text-xl mb-14"
            style={{ color: colors.muted || "#94a3b8" }}
          >
            {subtitle}
          </p>
        )}

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans?.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
              style={{
                background: plan.highlight
                  ? colors.surface || "#111827"
                  : colors.surface || "#111827",
                borderRadius: ui?.borderRadius || "16px",
                border: plan.highlight
                  ? `2px solid ${colors.primary || "#3b82f6"}`
                  : `1px solid ${colors.muted || "#334155"}`,
              }}
            >
              {/* Most Popular Badge */}
              {plan.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold"
                  style={{
                    background: colors.primary || "#3b82f6",
                    borderRadius: "999px",
                  }}
                >
                  Phổ biến nhất
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-semibold mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-3xl font-bold mb-4">
                {plan.price}
                <span
                  className="text-base ml-1"
                  style={{ color: colors.muted || "#94a3b8" }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p
                className="mb-6"
                style={{ color: colors.muted || "#94a3b8" }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3 text-left">
                {plan.features?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="mt-1 text-sm"
                      style={{ color: colors.primary || "#3b82f6" }}
                    >
                      ✓
                    </span>
                    <span
                      style={{ color: colors.muted || "#94a3b8" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.buttonLink}
                className="block w-full text-center py-3 font-semibold transition-all duration-300 hover:shadow-lg"
                style={{
                  background: plan.highlight
                    ? colors.primary || "#3b82f6"
                    : "transparent",
                  border: `1px solid ${
                    colors.primary || "#3b82f6"
                  }`,
                  borderRadius: ui?.borderRadius || "14px",
                  color: plan.highlight
                    ? "#ffffff"
                    : colors.primary || "#3b82f6",
                }}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}