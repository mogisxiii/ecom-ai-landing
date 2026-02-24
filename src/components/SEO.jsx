import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import config from "../config"

export default function SEO({
  title,
  description,
  image,
}) {
  const location = useLocation()

  useEffect(() => {
    const {
      siteName,
      siteUrl,
      tagline,
      defaultSEO,
    } = config

    const siteTitle = siteName || ""
    const fullTitle = title
      ? `${title} | ${siteTitle}`
      : siteTitle

    const metaDescription =
      description || tagline || ""

    const metaImage =
      image || defaultSEO?.image

    const currentUrl =
      siteUrl + location.pathname

    document.title = fullTitle

    const setMeta = (
      name,
      content,
      property = false
    ) => {
      const attr = property
        ? "property"
        : "name"

      let element =
        document.querySelector(
          `meta[${attr}="${name}"]`
        )

      if (!element) {
        element =
          document.createElement("meta")
        element.setAttribute(attr, name)
        document.head.appendChild(element)
      }

      element.setAttribute(
        "content",
        content
      )
    }

    // Basic SEO
    setMeta("description", metaDescription)
    setMeta("robots", "index, follow")

    // Open Graph
    setMeta("og:title", fullTitle, true)
    setMeta("og:description", metaDescription, true)
    setMeta("og:image", metaImage, true)
    setMeta("og:url", currentUrl, true)
    setMeta("og:type", "website", true)
    setMeta(
      "og:locale",
      defaultSEO?.locale || "vi_VN",
      true
    )

    // Twitter
    setMeta("twitter:card", "summary_large_image")
    setMeta("twitter:title", fullTitle)
    setMeta("twitter:description", metaDescription)
    setMeta("twitter:image", metaImage)
    setMeta(
      "twitter:site",
      defaultSEO?.twitterHandle || ""
    )

    // Canonical
    let link =
      document.querySelector(
        'link[rel="canonical"]'
      )

    if (!link) {
      link =
        document.createElement("link")
      link.setAttribute(
        "rel",
        "canonical"
      )
      document.head.appendChild(link)
    }

    link.setAttribute("href", currentUrl)

  }, [title, description, image, location.pathname])

  return null
}