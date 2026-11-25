/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F5F0",
        surface: "#FFFFFF",
        subtle: "#EFECE4",
        line: "#DDD8CE",
        ink: "#121815",
        muted: "#4B5550",
        court: "#14532D",
        "court-hover": "#0F3F22",
        "court-deep": "#0D2F1C",
        "court-ink": "#0A2315",
        "court-soft": "#E6F2EB",
        clay: "#B84A27",
        "clay-hover": "#9C3C1E",
        "clay-soft": "#FBECE6",
      },
      fontFamily: {
        display: [
          "Outfit",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        sans: [
          "DM Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      borderRadius: {
        btn: "10px",
      },
    },
  },
  plugins: [],
};
