"use client";
import { useWindowWidth } from "~/hooks/useWindowWidth";
import { HomeButtons } from "~/components/home-buttons/home-buttons";
import { MenuNav } from "~/components/menu-nav/menu-nav";
import { VectorImage } from "~/components/vector-image/vector-image";
import { useAuth } from "~/contexts/auth";

import styles from "./home-header.module.css";

const navItems = [
  {
    label: "Sobre",
  },
  {
    label: "Serviços",
  },
];

export type HomeHeaderProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const HomeHeader = () => {
  const windowWidth = useWindowWidth();
  const { openSignInModal, openSignUpModal } = useAuth();

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
        {windowWidth > 360 ? (
          <HomeButtons
            onSignInButtonClick={openSignInModal}
            onSignUpButtonClick={openSignUpModal}
          />
        ) : null}
      </div>
    </header>
  );
};
