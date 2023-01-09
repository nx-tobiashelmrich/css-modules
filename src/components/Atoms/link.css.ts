import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

const linkBase = style({
  padding: 12,
  border: 0,
  marginRight: 20,
  color: vars.color.white,
  cursor: "pointer",
});

export const linkStyle = styleVariants({
  primary: [
    linkBase,
    {
      ":hover": {
        color: vars.color.brandOrangeHover,
        textDecoration: "none",
      },
      color: vars.color.brandOrange,
    },
  ],
  secondary: [
    linkBase,
    {
      ":hover": {
        color: vars.color.brandLightGrey,
        textDecoration: "none",
      },
      color: vars.color.brandGrey,
    },
  ],
});
