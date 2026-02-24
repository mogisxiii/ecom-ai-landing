import siteConfig from "../config/siteConfig"

export default function Container({
  children,
  className = "",
  fullWidth = false,
}) {
  const theme = siteConfig?.theme || {}
  const colors = theme?.colors || {}
  const preset = theme?.preset || "dark-tech"

  return (
    <div
      className={`
        relative
        ${fullWidth ? "w-full" : "max-w-7xl mx-auto"}
        px-6 md:px-8
        ${className}
      `}
      style={{
        background:
          preset === "minimal" ? "#ffffff" : "transparent",
        color: colors.text || "#ffffff",
      }}
    >
      {children}
    </div>
  )
}