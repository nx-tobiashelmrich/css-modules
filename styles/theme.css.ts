import { createTheme, globalStyle, style } from "@vanilla-extract/css";

export const [igusTheme, vars] = createTheme({
  color: {
    white: "#fff",
    black: "#000",
    brandOrange: "#f07d00",
    brandOrangeHover: "#d26e00",
    brandGrey: "#363636",
    brandLightGrey: "#626262",
  },
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontFamily: '"Roboto", Arial, sans-serif',
  color: vars.color.brandGrey,
});

globalStyle("h1, h2, h3, h4, h5, h6, a, p, ol ul, li", {
  marginBottom: "1rem",
});

export const grid = style({
  boxSizing: "border-box",
  display: "flex",
  paddingLeft: "calc(1.875rem / 1)",
  paddingRight: "calc(1.875rem / 1)",
  flex: "0 0 auto",
  flexWrap: "wrap",
  maxWidth: "1240px",
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: "calc(1.875rem / 2)",
      paddingRight: "calc(1.875rem / 2)",
    },
  },
});

export const gridElement = style({
  width: "100%",
  padding: "1rem",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "50%",
      padding: "1rem",
    },
  },
});
