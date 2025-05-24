"use client";

import { Button } from "../button/button";
import { MenuNav } from "../menu-nav/menu-nav";
import { VectorImage } from "../vector-image/vector-image";
import styles from "./home-header.module.css";

export type HomeHeaderProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const HomeHeader = () => {
  const navItems = [{ label: "Sobre" }, { label: "Serviços" }];

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.navbar}>
          <VectorImage name="image-logo" />
          <MenuNav items={navItems} />
        </div>

        <div className={styles.buttons}>
          <Button
            variant="homePrimary"
            onClick={() => {
              console.log("Abrir minha conta");
            }}
          >
            Abrir minha conta
          </Button>

          <Button
            variant="homeSecondary"
            onClick={() => {
              console.log("Abrir minha conta");
            }}
          >
            Já tenho conta
          </Button>
        </div>
      </div>
    </header>
  );
};
