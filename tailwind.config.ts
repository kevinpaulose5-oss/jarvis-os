import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./widgets/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        card: "rgba(255,255,255,0.06)",
        primary: "#6ee7ff",
        accent: "#8b5cf6"
      }
    }
  },
  plugins: []
};

export default config;
