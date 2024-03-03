/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: "League Spartan, sans-serif",
      },
      boxShadow: {
        lift: "0 4px 0 0",
      },
    },
  },
  plugins: [],
};
