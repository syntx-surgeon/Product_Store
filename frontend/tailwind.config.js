import daisyui from "daisyui";



/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "coffee", // Fixed typo from "Config"
      "pastel",
      "forest",
      "lofi",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "night",
      "business",
      "dracula",
      "fantasy",
      "luxury",
    ],
  },
};