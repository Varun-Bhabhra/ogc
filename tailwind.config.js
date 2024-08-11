/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#19B4B1",
        secondary: "#5AB87E",
        dark: "#131313",
        light: "#ffffff",
        extraOne: "#7D26C7",
        extraTwo: "#FC0182",
      },
      fontFamily: {
        metro: ["metropolis", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('../src/assets/hero.webp')",
        herobgMob: "url('../src/assets/herobg-mob.webp')",
        herobg: "url('../src/assets/herobg.webp')",
      },
    },
  },
  plugins: [],
};
