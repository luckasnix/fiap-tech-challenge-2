"use client";

import { useWindowWidth } from "~/hooks/useWindowWidth";
import { Button } from "../button/button";
import styles from "./home-buttons.module.css";

export type HomeHeaderProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const HomeButtons = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.buttons}>
      <Button
        variant="homePrimary"
        size={windowWidth > 720 ? "medium" : "small"}
        onClick={() => {
          console.log("Abrir minha conta");
        }}
      >
        {windowWidth > 720 ? "Abrir minha conta" : "Abrir conta"}
      </Button>

      <Button
        variant="homeSecondary"
        size={windowWidth > 720 ? "medium" : "small"}
        onClick={() => {
          console.log("Já tenho conta");
        }}
      >
        Já tenho conta
      </Button>
    </div>
  );
};
