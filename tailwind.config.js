/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo-600
        secondary: "#38bdf8", // Sky-400
        dark: "#0f172a", // Slate-900
        light: "#f1f5f9"
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to right, #4f46e5, #38bdf8)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        pacifico: ['"Pacifico"', "cursive"],
      }
    },
  },
  plugins: [],
}
