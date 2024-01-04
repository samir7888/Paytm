/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        darknilla: "#0F3578",
        light: "#F6F6F6",
        nilla: "#00baf2",
        lightnilla: "#00afe3",
        ekdamdark: "#0d3e80",
        bg: "#F5F7FA"
      },
      screens: {
        'verysmall': {'max' : "399pxx"},
        'small': {'max' : '550px'},
        'medium': {'max' : '768px'},
        'large': {'max' : "1070px"},
        
      }
    },
  },
  plugins: [],
}

