import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

const buttonBase = style({
  padding: 20,
  border: 0,
  marginRight: 20,
  color: vars.color.white,
  cursor: "pointer",
  "@media": {
    "screen and (min-width: 768px)": {
      padding: 12,
    },
  },
});

export const buttonStyle = styleVariants({
  primary: [
    buttonBase,
    {
      ":hover": {
        background: vars.color.brandOrangeHover,
      },
      background: vars.color.brandOrange,
    },
  ],
  secondary: [
    buttonBase,
    {
      ":hover": {
        background: vars.color.brandLightGrey,
      },
      background: vars.color.brandGrey,
    },
  ],
});
