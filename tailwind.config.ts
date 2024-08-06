import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        chillax: ["Chillax Regular"],
        archivo: ["Archivo Regular"],
      },
      colors: {
        gray: {
          100: "#E5E5E5",
          200: "#C3C3C3",
          300: "#7E7E7E",
          400: "#E6E6E6",
          500: "#D9D9D9",
          600: "#C9C9C9",
          700: "#BCBCBC",
          800: "#A9A9A9",
          900: "#1D1D1D",
        },
      },
    },
  },
  plugins: [],
}
export default config
