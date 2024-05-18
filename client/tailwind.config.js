/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInAnim: {
          "20%": { opacity: 0 },
          "60%": { transform: "translateX(0%)" },
          "75%": { transform: "translateX(2%)" },
          "100%": { opacity: 1, transform: "translateX(0%)" },
        },
      },
      animation: {
        slideInAnim: "slideInAnim 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
