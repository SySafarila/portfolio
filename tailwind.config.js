/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        amber: colors.amber,
        "cool-gray": colors.gray,
        dim: {
          1: "#112838",
          2: "#123247",
        },
        gold: {
          1: "#CFA87F",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      backgroundColor: ["active"],
      grayscale: ["hover", "focus"],
      contrast: ["hover", "focus"],
      borderRadius: ["hover", "focus"],
      letterSpacing: ["hover", "focus"],
      sepia: ["dark", "hover"],
      animation: ["hover"],
      display: ["dark"],
    },
  },
  plugins: [],
};
