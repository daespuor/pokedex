const colors = require("tailwindcss/colors");
const config = require("tailwindcss/defaultConfig");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      secondary: "#F0F8F7",
      primary: "#335C58",
      accent: "#7AD8CD"
    },
    zIndex: {
      ...config.theme.zIndex,
      "neg-1": -1,
    },
    extend: {
      backgroundImage: {
        layout: "url('../assets/kanto.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const directions = {
        t: "to top",
        tr: "to top right",
        r: "to right",
        br: "to bottom right",
        b: "to bottom",
        bl: "to bottom left",
        l: "to left",
        tl: "to top left",
      };
      const steps = [
        "0%",
        "10%",
        "20%",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
      ];
      const utilities = Object.entries(directions).reduce(
        (result, [shorthand, direction]) => {
          const variants = steps.map((step) => {
            const className = `.gradient-mask-${shorthand}-${step}`;
            return {
              [className]: {
                maskImage: `linear-gradient(${direction}, transparent ${step}, #F0F8F7)`,
              },
            };
          });
          const stepClasses = Object.assign(...variants);
          return {
            ...result,
            ...stepClasses,
          };
        },
        {}
      );
      addUtilities(utilities);
    }),
  ],
};
