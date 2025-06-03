"use client";

import { useWindowWidth } from "~/hooks/useWindowWidth";
import { HomeBanner } from "../home-banner/home-banner";
import { HomeButtons } from "../home-buttons/home-buttons";
import { HomeHighlight } from "../home-highlight/home-highlight";
import styles from "./home-main.module.css";

export const HomeMain = () => {
  const windowWidth = useWindowWidth();
  const banner = {
    title:
      "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!",
    image: "banner",
    width: 660,
    height: 420,
    alt: "Home Banner",
  };

  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`}>
        <HomeBanner title={banner.title} />

        {windowWidth < 360 ? <HomeButtons /> : null}

        <HomeHighlight />
      </div>
    </main>
  );
};
