"use client";
import { useWindowWidth } from "~/hooks/useWindowWidth";
import { HomeBanner } from "~/components/home-banner/home-banner";
import { HomeButtons } from "~/components/home-buttons/home-buttons";
import { HomeHighlight } from "~/components/home-highlight/home-highlight";
import { useAuth } from "~/contexts/auth";

import styles from "./home-main.module.css";

const banner = {
  title:
    "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!",
  image: "banner",
  width: 660,
  height: 420,
  alt: "Home Banner",
};

export const HomeMain = () => {
  const windowWidth = useWindowWidth();
  const { openSignInModal, openSignUpModal } = useAuth();

  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`}>
        <HomeBanner title={banner.title} />
        {windowWidth < 360 ? (
          <HomeButtons
            onSignInButtonClick={openSignInModal}
            onSignUpButtonClick={openSignUpModal}
          />
        ) : null}
        <HomeHighlight />
      </div>
    </main>
  );
};
