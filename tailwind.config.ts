import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17202A",
        mist: "#F6F8FB",
        leaf: "#2F855A",
        coral: "#D96C4A"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(23, 32, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
