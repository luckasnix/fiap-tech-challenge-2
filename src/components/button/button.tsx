import { ReactNode } from "react";
import styles from "./button.module.css";

export type ButtonProps = Readonly<{
  children: ReactNode;
  onClick?: () => void;
  variant: "ghost" | "homePrimary" | "homeSecondary";
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
