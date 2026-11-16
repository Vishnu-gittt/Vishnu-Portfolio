import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: "#F7F5F0",
          card: "#EFECE6",
          dark: "#111111",
          darkCard: "#1C1C1C",
          text: "#121212",
          muted: "#5A5A5A",
          border: "#DCD8CF",
          accent: "#8C3F2B", // Muted terracotta
          accentHover: "#733221",
          slate: "#2A363B",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
      },
      letterSpacing: {
        editorial: "-0.04em",
        tightest: "-0.06em",
      },
    },
  },
  plugins: [],
};

export default config;
