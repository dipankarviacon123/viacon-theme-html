/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        auto: "auto",
      },
      grayscale: {
        10: "10%",
        15: "15%",
        20: "20%",
        25: "25%",
        30: "30%",
        35: "35%",
        40: "40%",
        45: "45%",
        50: "50%",
        55: "55%",
        60: "50%",
        65: "65%",
        70: "70%",
        75: "75%",
        80: "80%",
        85: "85%",
        90: "90%",
        95: "95%",
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#00C97F",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#00C97F",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
