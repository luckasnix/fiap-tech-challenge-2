"use client";
import { useWindowWidth } from "~/hooks/useWindowWidth";
import { HomeButtons } from "~/components/home-buttons/home-buttons";
import { MenuNav } from "~/components/menu-nav/menu-nav";
import { VectorImage } from "~/components/vector-image/vector-image";

import styles from "./home-header.module.css";

export type HomeHeaderProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const HomeHeader = () => {
  const windowWidth = useWindowWidth();
  const navItems = [{ label: "Sobre" }, { label: "Serviços" }];

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.navbar}>
          <VectorImage
            name={
              windowWidth > 720 || windowWidth < 360
                ? "image-logo"
                : "icon-logo"
            }
          />

          <MenuNav items={navItems} />
        </div>

        {windowWidth > 360 ? <HomeButtons /> : null}
      </div>
    </header>
  );
};
