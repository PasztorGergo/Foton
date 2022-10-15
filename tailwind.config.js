/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#3B82F6",
        dark: "#0F172A",
        mid: "#CBD5E1",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
