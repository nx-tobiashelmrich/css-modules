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
      className={`${styles.buttonBase} ${design || `${styles.buttonPrimary}`}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
