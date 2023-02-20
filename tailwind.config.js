/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...require("tailwindcss/colors"),
      "jo-green-1": "#235d3a",
      "jo-green-2": "#397d54",
      "jo-green-3": "#73c088",
      "jo-green-4": "#a8e087",
      "jo-green-5": "#c8ead1",
      "palette-1": "#cce4d0",
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: [
      {
        jo: {
          primary: "#053f33",
          secondary: "#ecf5f0",
          accent: "#43AA8B",
          neutral: "#36494d",
          "base-100": "#cce4d0",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
