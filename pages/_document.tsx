import { Html, Head, Main, NextScript } from "next/document";
import { igusTheme } from "../styles/theme.css.ts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={igusTheme}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
