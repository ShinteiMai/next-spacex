module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      72: "18rem",
      84: "21rem",
      96: "24rem",
      108: "27rem",
      120: "30rem",
      132: "33rem",
      154: "36rem",
    },
    extend: {
      fontFamily: {
        sans: ["Heebo", "sans-serif"],
      },
      letterSpacing: {
        xl: "0.3em",
        "2xl": "0.6em",
        "3xl": "0.9em",
        "4xl": "1.2em",
      },
      inset: {
        "1/8": "12.5%",
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem",
        120: "30rem",
        132: "33rem",
        154: "36rem",
        166: "39rem",
        178: "42rem",
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
        "screen-5/6": "83vh",
      },
      colors: {
        primary: "#2F2F2F",
        "primary-heavy": "#2E2E2E",
        secondary: "#FFFFFF",
      },
      backgroundImage: {
        "launch-placeholder": "url('/images/placeholder.jpg')",
      },
    },
  },
  variants: {
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
  },
  plugins: [require("tailwindcss-filters")],
};
