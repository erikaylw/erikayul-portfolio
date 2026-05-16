import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F2742",
        slate: "#475569",
        mist: "#F6F8FB",
        line: "#E5EAF0",
        blue: "#2563EB",
        sky: "#EAF2FF"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 39, 66, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
