import { MouseEventHandler } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  clickHandler: MouseEventHandler;
  children: any;
  design?: string;
}

export function Button({ clickHandler, children, design }: ButtonProps) {
  return (
    <button
      className={`${design || `${styles.buttonBase}`}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
