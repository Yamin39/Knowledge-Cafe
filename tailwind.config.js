/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-full": "#111111",
        "dark-60": "#11111199",
      },
    },
  },
  plugins: [],
};
