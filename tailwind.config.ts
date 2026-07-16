import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      colors: {
        navy: "#0F2742",
        slate: "#475569",
        mist: "#F6F8FB",
        line: "#E5EAF0",
        accent: "#D97706",
        "accent-light": "#FFFBEB",
        "accent-mist": "#FEF3C7",
        "ink": "#0F2742",
        "ink-2": "#475569"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 39, 66, 0.10)",
        warm: "0 4px 20px rgba(217, 119, 6, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
