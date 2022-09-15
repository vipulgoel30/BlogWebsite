/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xsm: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#28b44b",
        secondary: "#0777b8",
      },
      keyframes: {
        shake: {
          "0%,100%": {
            translate: 0,
          },
          "33%": {
            translate: ".2rem",
          },
          "66%": {
            translate: "-.2rem",
          },
        },
      },
      animation: {
        shake: "shake .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
