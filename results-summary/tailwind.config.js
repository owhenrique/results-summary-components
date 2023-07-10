/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 67%)",
          yellow: "hsl(39, 100%, 56%)",
          green: "hsl(166, 100%, 37%)",
          blue: "hsl(234, 85%, 45%)"

        },
        gradiants: {
          light_blue: "hsl(252, 100%, 67%)",
          royal_blue: "hsl(241, 81%, 54%)",
          violet_blue: "hsla(256, 72%, 46%, 1)",
          persian_blue: "hsla(241, 72%, 46%, 0)"
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          light_blue: "hsl(221, 100%, 96%)",
          lavender: "hsl(241, 100%, 89%)",
          dark_blue: "hsl(224, 30%, 27%)",
        },
      },
    },
  },
  plugins: [],
};
