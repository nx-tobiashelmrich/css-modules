import { MouseEventHandler } from "react";
import { buttonStyle } from "./button.css";

interface ButtonProps {
  clickHandler: MouseEventHandler;
  children: any;
  design?: string;
}

export function Button({ clickHandler, children, design }: ButtonProps) {
  return (
    <button
      className={`${design || buttonStyle.primary}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
