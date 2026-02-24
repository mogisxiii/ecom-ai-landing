import { useState } from "react"
import siteConfig from "../config/siteConfig"

export default function FAQSection() {
  const section = siteConfig?.sections?.faq
  const theme = siteConfig?.theme || {}

  if (!section?.enabled) return null

  const { title, subtitle, items } = section
  const colors = theme?.colors || {}
  const ui = theme?.ui || {}

  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-24 px-6"
      style={{
        background: colors.background || "#0f172a",
        color: colors.text || "#ffffff",
      }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
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
              className="text-lg"
              style={{ color: colors.muted || "#94a3b8" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {items?.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="transition-all duration-300"
                style={{
                  background: colors.surface || "#111827",
                  borderRadius: ui?.borderRadius || "16px",
                  border: `1px solid ${colors.muted || "#334155"}`,
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold"
                >
                  <span>{item.question}</span>

                  <span
                    className="text-xl transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      color: colors.primary || "#3b82f6",
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-6 leading-relaxed"
                    style={{ color: colors.muted || "#94a3b8" }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}