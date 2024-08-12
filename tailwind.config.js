/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131313",
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
  plugins: [require("daisyui")],
};
