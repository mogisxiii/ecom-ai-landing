export function loadTheme(theme) {
  switch (theme) {
    case "pastel":
      return import("./pastel/colors.css")
    case "colorful":
      return import("./colorful/colors.css")
    case "default":
    default:
      return import("./default/colors.css")
  }
}