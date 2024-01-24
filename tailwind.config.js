/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        Robo: ["Roboto", "sans-serif"],
        myan: ["Noto Sans Myanmar", "sans-serif"],
      },
    },
  },
  plugins: [],
};
