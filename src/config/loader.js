import siteConfig from "./site.config"

/**
 * Loader chuẩn hóa config
 * Cho phép validate & fallback
 */
function normalizeConfig(config) {
  return {
    ...config,

    theme: config.theme || "default",

    contact: {
      phone: config.contact?.phone || "",
      email: config.contact?.email || "",
      address: config.contact?.address || "",
    },

    social: {
      facebook: config.social?.facebook || "",
      youtube: config.social?.youtube || "",
    },

    features: {
      enableGallery: config.features?.enableGallery ?? true,
      enableNews: config.features?.enableNews ?? true,
      enableRegister: config.features?.enableRegister ?? true,
    },
  }
}

const config = normalizeConfig(siteConfig)

export default config