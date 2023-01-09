import { MouseEventHandler } from "react";
import { linkStyle } from "./link.css.ts";
interface LinksProps {
  children: any;
  link: string;
  external?: boolean;
  design?: string;
}

export function Link({ children, link, external, design }: LinksProps) {
  return (
    <a
      href={link}
      target={`${external && "_blank"}`}
      className={`${design || linkStyle.primary}`}
    >
      {children}
    </a>
  );
}
