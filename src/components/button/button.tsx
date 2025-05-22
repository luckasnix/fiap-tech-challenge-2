import styles from "./button.module.css";
import { ReactNode } from "react";

export type ButtonProps = Readonly<{
  children: ReactNode;
  onClick?: () => void;
  variant: "ghost";
}>;

export const Button = ({ children, onClick, variant }: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`${styles.button} ${styles[variant]}`}
  >
    {children}
  </button>
);
