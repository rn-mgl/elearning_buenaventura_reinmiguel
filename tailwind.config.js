/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pr-orange": "#FF893F",
        "pr-yellow": "#FFD675",
        "pr-black": "#0D0D0D",
        "dark-gray": "#262626",
      },
      fontFamily: {
        lexend: "Lexend",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
