/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {

      /* =================================================
         🎨 COLOR SYSTEM – AI SALES (Trust + ROI Focus)
      ================================================= */
      colors: {

        /* 🔵 Brand – Core Trust */
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },

        /* 🟣 Premium Depth */
        premium: {
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
        },

        /* 🟠 Conversion Accent (CTA) */
        accent: {
          500: "#f97316",
          600: "#ea580c",
        },

        /* 💰 ROI Psychology */
        profit: {
          500: "#22c55e",
          600: "#16a34a",
        },

        loss: {
          500: "#ef4444",
          600: "#dc2626",
        },

        /* 🧱 Surface */
        surface: {
          dark: "#0f172a",
          card: "#13233A",
          soft: "#f8fafc",
          muted: "#f1f5f9",
        },
      },

      /* =================================================
         🌈 GRADIENT PRESETS – SALES FOCUSED
      ================================================= */
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)",

        "cta-gradient":
          "linear-gradient(90deg, #f97316 0%, #ea580c 100%)",

        "profit-gradient":
          "linear-gradient(90deg, #22c55e 0%, #16a34a 100%)",

        "dark-section":
          "linear-gradient(to bottom, #0f172a 0%, #0b1120 100%)",
      },

      /* =================================================
         🔲 BORDER RADIUS – PREMIUM SOFT
      ================================================= */
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
      },

      /* =================================================
         🌑 SHADOW SYSTEM – TRUST DEPTH
      ================================================= */
      boxShadow: {
        soft: "0 8px 25px rgba(0,0,0,0.06)",
        medium: "0 12px 35px rgba(0,0,0,0.08)",
        strong: "0 25px 60px rgba(0,0,0,0.12)",

        /* subtle glow only for CTA */
        glowBrand: "0 0 30px rgba(99,102,241,0.35)",
        glowAccent: "0 0 30px rgba(249,115,22,0.35)",
      },

      /* =================================================
         🎞 ANIMATION – PROFESSIONAL ONLY
      ================================================= */
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        pop: "pop 0.35s ease-out forwards",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pop: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },

      /* =================================================
         🔤 TYPOGRAPHY – SALES READABILITY
      ================================================= */
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      fontSize: {
        hero: ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        section: ["32px", { lineHeight: "1.2", fontWeight: "600" }],
      },
    },
  },

  plugins: [],
}