/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#939393",
          "200": "#888",
          "300": "#1b1b1b",
          "400": "rgba(0, 0, 0, 0.2)",
        },
        palegoldenrod: {
          "100": "#fcf1bb",
          "200": "#fcf0b6",
        },
        gold: "#f6e43f",
        cornflowerblue: "#5aa5fd",
        whitesmoke: "#eee",
        darkgray: "#aaa",
        white: "#fff",
        khaki: "#fce570",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "league-spartan": "'League Spartan'",
        inherit: "inherit",
      },
      borderRadius: {
        "66xl": "85px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "9xl": "28px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      mq767: {
        raw: "screen and (max-width: 767px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
