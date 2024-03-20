import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark-background": "url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')",
        "light-background": "url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')",
      },
      fontFamily: {
        sans: ['var(--font-flexo)']
      },
      width: {
        "70": "70%"
      }
    },
  },
  plugins: [],
};
export default config;
