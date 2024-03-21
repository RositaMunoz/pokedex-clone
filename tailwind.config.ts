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
        "dark-background": "url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')",
        "light-background": "url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')",
      },
      fontFamily: {
        sans: ['var(--font-flexo)']
      },
      width: {
        "70": "70%"
      },
      colors: {
        "normal": "#C4C4A4",
        "fire": "#F08030",
        "fighting": "#C03028",
        "water": "#6890F0",
        "flying": "#A890F0",
        "grass": "#78C850",
        "poison": "#A040A0",
        "electric": "#F8D030",
        "ground": "#E0C068",
        "psychic": "#F85888",
        "rock": "#B8A038",
        "ice": "#98D8D8",
        "bug": "#A8B820",
        "dragon": "#7038F8",
        "ghost": "#705898",
        "dark": "#705848",
        "steel": "#B8B8D0",
        "fairy": "#EE99AC",
        "light-gray": "#919191",
        "dark-gray": "#313131",
        "darker-gray": "#212121",
        "alert-green": "#4dad5b",
        "button-blue": "#30a7d7",
        "button-orange": "#ee6b2f"
      }
    },
  },
  plugins: [],
};
export default config;
