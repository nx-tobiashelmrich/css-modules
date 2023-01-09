import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const headlineText = style({});

export const headlineVariant = styleVariants({
  primary: { color: vars.color.brandGrey },
  secondary: { color: vars.color.brandOrange },
});
