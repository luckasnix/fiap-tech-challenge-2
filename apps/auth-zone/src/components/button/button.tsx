import { ReactNode } from "react";
import styles from "./button.module.css";

export type ButtonProps = Readonly<{
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant:
    | "ghost"
    | "homePrimary"
    | "homeSecondary"
    | "dashPrimary"
    | "modalPrimary";
  size?: "ghost" | "small" | "medium" | "large" | "full";
}>;

export const Button = ({
  children,
  onClick,
  variant,
  type = "button",
  disabled = false,
  size = "medium",
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`${styles.button} ${styles[variant]} ${styles[size]}`}
  >
    {children}
  </button>
);
