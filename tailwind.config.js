/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx, js}"],
  theme: {
    screens: {
      "mini": {'max':"500px"},
      "md":'1200px'
    },
  },
  plugins: [],
}

