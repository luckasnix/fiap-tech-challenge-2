import { ReactNode } from "react";
import styles from "./button.module.css";

export type ButtonProps = Readonly<{
  children: ReactNode;
  onClick?: () => void;
  variant:
    | "ghost"
    | "homePrimary"
    | "homeSecondary"
    | "dashPrimary"
    | "modalPrimary";
  size?: "small" | "medium" | "large";
}>;

export const Button = ({
  children,
  onClick,
  variant,
  size = "medium",
}: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`${styles.button} ${styles[variant]} ${styles[size]}`}
  >
    {children}
  </button>
);
