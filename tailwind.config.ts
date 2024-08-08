import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

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
        chillax: ["Chillax Bold", "Chillax Regular", "Chillax Semibold"],
        archivo: ["Archivo Regular"],
      },
      colors: {
        gray: {
          100: "#E5E5E5",
          200: "#C3C3C3",
          300: "#7E7E7E",
          900: "#1D1D1D",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-outline-black": {
          textShadow: "0 1px 0 #1D1D1D, 1px 0 0 #1D1D1D, 0 -1px 0 #1D1D1D, -1px 0 0 #1D1D1D",
        },
        ".text-shadow-outline-white": {
          textShadow: "0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff",
        },
        ".hide-scrollbar": {
          /* For WebKit (Chrome, Safari, etc) */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* For Firefox */
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      })
    }),
  ],
}
export default config
