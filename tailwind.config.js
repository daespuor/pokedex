const colors = require("tailwindcss/colors");
const config = require("tailwindcss/defaultConfig");
const plugin = require("tailwindcss/plugin");

const theme = {
  primary: "#335C58",
  darkPrimary: "#535858",
  secondary: "#5EA89F",
  darkSecondary: "#636868",
  tertiary: "#7AD8CD",
  darkTertiary: "#F0F8F7",
  accent: "#FF7A00",
  darkAccent: "#CAA37F",
  secondaryAccent: "#E53232",
  darkSecondaryAccent: "#CC9C9C",
  tertiaryAccent: "#EBEF1C",
  darkTertiaryAccent: "#C9CA89",
  white: "#FFFFFF",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      header: theme.primary,
      darkHeader: theme.darkPrimary,
      headerText: theme.darkTertiary,
      darkHeaderText: theme.darkTertiary,
      bodyBackground: theme.darkTertiary,
      darkBodyBackground: theme.darkSecondary,
      bodyText: theme.primary,
      darkBodyText: theme.darkTertiary,
      darkAltBodyText: theme.tertiary,
      cardBackground: theme.white,
      darkCardBackground: theme.darkSecondary,
      buttonBackground: theme.accent,
      darkButtonBackground: theme.tertiary,
      buttonBackgroundActive: theme.darkAccent,
      darkButtonBackgroundActive: theme.darkTertiary,
      buttonText: theme.darkTertiary,
      darkButtonText: theme.darkPrimary,
      secondaryButtonBackground: theme.tertiary,
      darkSecondaryButtonBackground: theme.primary,
      secondaryButtonBorder: theme.darkSecondary,
      darkSecondaryButtonBorder: theme.secondary,
      secondaryButtonText: theme.primary,
      darkSecondaryButtonText: theme.darkTertiary,
      tertiaryButtonBackground: theme.accent,
      darkTertiaryButtonBackground: theme.tertiary,
      tertiaryButtonText: theme.accent,
      darkTertiaryButtonText: theme.tertiary,
      menuItemBackground: theme.darkTertiary,
      darkMenuItemBackground: theme.darkTertiary,
      menuItemText: theme.primary,
      darkMenuItemText: theme.primary,
      menuItemBackgroundHover: theme.accent,
      darkMenuItemBackgroundHover: theme.darkAccent,
      menuItemTextHover: theme.darkTertiary,
      darkMenuItemTextHover: theme.darkTertiary,
      dividerText: theme.darkSecondary,
      popupBackground: theme.white,
      darkPopupBackground: theme.darkPrimary,
      popupText: theme.darkPrimary,
      darkPopupText: theme.white,
      popupTitle: theme.accent,
      darkPopupTitle: theme.darkAccent,
      modalBackground: theme.darkTertiary,
      darkModalBackground: theme.darkPrimary,
      modalTitle: theme.primary,
      darkModalTitle: theme.darkTertiary,
      modalText: theme.darkPrimary,
      darkModalText: theme.darkTertiary,
      secondary: "#F0F8F7",
      primary: "#335C58",
      accent: "#7AD8CD",
      fireAccent: "#FF7A00",
      darkSecondary: "#535858",
      darkPrimary: "#F0F8F7",
      darkFireAccent: "#CAA37F",
    },
    zIndex: {
      ...config.theme.zIndex,
      "neg-1": -1,
    },
    extend: {
      backgroundImage: {
        layout: "url('../assets/images/kanto.png')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      color: ["active"],
      borderColor: ["active", "focus-visible"],
    },
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
                maskImage: `linear-gradient(${direction}, transparent ${step}, #535858)`,
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
      addUtilities(utilities, ["dark"]);
    }),
  ],
};
