/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#c622e2",

          "secondary": "#9f64c4",

          "accent": "#f756a9",

          "neutral": "#2C2839",

          "base-100": "#FBF8FC",

          "info": "#4C7DF0",

          "success": "#3ACFB9",

          "warning": "#B8960F",

          "error": "#ED4A55",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
