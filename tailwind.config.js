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
          primary: "#163e2b",
          secondary: "#cce4d0",
          accent: "#f5f440",
          neutral: "#66d05b",
          "base-100": "#ecf5f0",
          info: "#4970DA",
          success: "#29BCA1",
          warning: "#F5B00F",
          error: "#F1467F",
        },
      },
    ],
  },
};
