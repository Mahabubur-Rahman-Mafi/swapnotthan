/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        swapnotheme: {
          primary: "#701B2E",
          secondary: "#194B1A",
          accent: "#B4A81F",
          white: "#FFFFFF",
          black: "#000000",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
