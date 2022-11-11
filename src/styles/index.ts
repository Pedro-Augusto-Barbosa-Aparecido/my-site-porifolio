import { createStitches } from "@stitches/react";
import { stitchesColorTheme } from "./theme/themes";

export const {
  config,
  styled,
  globalCss,
  getCssText,
  keyframes,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: stitchesColorTheme,
    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    fonts: {
      roboto: "Roboto, sans-serif",
    },
    fontWeights: {
      robotoBold: 700,
      robotoRegular: 400,
    },
  },
});
