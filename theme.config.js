// theme.config.js
const { ThemeBuilder, Theme } = require("tailwindcss-theming");

const mainTheme = new Theme()
  .default()
  .colors({
    space: "#f8f8f9",
    grayish: "#F0EFF4",
    card: "#ffffff",
    "on-card": "#3a3a3a",
    brand: "#08d2d2",
    "on-brand": "#ffffff",
    danger: "#ff0000",
    "on-input": "#4a5568",
    "message-green": "#70bb50",
  })
  .colorVariant("strong", "#b5b5b5", "grayish")
  .colorVariant("light", "#e4e4e4", "grayish")
  .colorVariant("strong", "#353535", "on-card")
  .colorVariant("light", "#f8f8f9", "on-card")

const darkTheme = new Theme()
  .colors({
    space: "#181818",
    grayish: "#181818",
    card: "#000000",
    "on-card": "#ffffff",
    brand: "#ffffff",
    "on-brand": "#000000",
    danger: "#ff0000",
  })
  .colorVariant("strong", "#b5b5b5", "grayish")
  .colorVariant("strong", "#ffffff", "on-card")
  .colorVariant("light", "#181818", "on-card")

module.exports = new ThemeBuilder().asDataThemeAttribute().default(mainTheme);
//.dark(darkTheme);
