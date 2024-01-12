/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXl: { max: "1279.98px" },
    },
    container: {
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.25rem",
        md: "2rem",
        xl: "3rem",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      blue: "#0B44CD",
      lightblue: "#3470FF",
      white: "#FFF",
      lightgray: "#12141780",
      lightblack: "#363535;",
      stone: "#F9F9F9",
      black:"#000",
    },
    extend: {
      backgroundImage: {
        // hero: "url('./src/assets/images/main-bg.webp')",
        // loading: "url('./src/assets/images/loading.webp')",
        // error: "url('./src/assets/images/error.webp')",
      },
    },
  },
  plugins: [],
};
