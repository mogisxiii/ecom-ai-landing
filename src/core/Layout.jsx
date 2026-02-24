import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import config from "../config"
import { loadTheme } from "../themes/themeLoader"

export default function Layout({ children }) {
  useEffect(() => {
    loadTheme(config.theme)
  }, [config.theme])

  return (
    <div className="app-wrapper min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 main-content">
        {children}
      </main>

      <Footer />
    </div>
  )
}