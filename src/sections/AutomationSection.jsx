import { memo } from "react"
import Container from "../components/Container"

/* ========================================
   Main Section
======================================== */

function AutomationSection({ data }) {
  if (!data?.enabled) return null

  const {
    title,
    subtitle,
    items = [],
  } = data

  return (
    <section
      className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
      aria-labelledby="automation-section-title"
    >
      <BackgroundDecor />

      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {items.map((item, index) => (
            <AutomationCard
              key={item?.id || index}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default memo(AutomationSection)

/* ========================================
   Background Decor
======================================== */

function BackgroundDecor() {
  return (
    <>
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl opacity-40" />
    </>
  )
}

/* ========================================
   Section Header
======================================== */

const SectionHeader = memo(function SectionHeader({
  title,
  subtitle,
}) {
  return (
    <header className="text-center mb-20 max-w-3xl mx-auto relative z-10">
      <h2
        id="automation-section-title"
        className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900"
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 leading-relaxed text-lg">
          {subtitle}
        </p>
      )}

      <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-8" />
    </header>
  )
})

/* ========================================
   Automation Card
======================================== */

const AutomationCard = memo(function AutomationCard({
  item,
}) {
  const {
    icon,
    title,
    description,
    features = [],
  } = item || {}

  return (
    <article
      className="
        relative group
        rounded-3xl
        p-[1px]
        bg-gradient-to-br
        from-primary/40
        via-white/40
        to-secondary/40
        transition-all duration-500
        hover:-translate-y-4
      "
    >
      <div
        className="
          relative h-full
          bg-white/70 backdrop-blur-xl
          rounded-3xl
          p-8
          border border-white/40
          shadow-xl
          transition-all duration-500
          group-hover:shadow-2xl
        "
      >
        <div className="relative z-10 flex flex-col h-full">

          {/* Icon */}
          {icon && (
            <div className="mb-6 text-4xl">
              {icon}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              {description}
            </p>
          )}

          {/* Features */}
          {features.length > 0 && (
            <ul className="mt-4 space-y-3 text-sm flex-grow">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </article>
  )
})