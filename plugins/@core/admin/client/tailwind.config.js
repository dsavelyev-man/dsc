/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cod-gray": {
          50: "#f5f5f6",
          100: "#e5e6e8",
          200: "#cecfd3",
          300: "#acadb4",
          400: "#82848e",
          500: "#676873",
          600: "#585962",
          700: "#4b4b53",
          800: "#424348",
          900: "#3a3a3f",
          950: "#0a0a0b",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
