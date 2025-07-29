"use client";
import { useWindowWidth } from "~/hooks/useWindowWidth";
import { Button } from "~/components/button/button";

import styles from "./home-buttons.module.css";

export type HomeButtonsProps = Readonly<{
  onSignInButtonClick: () => void;
  onSignUpButtonClick: () => void;
}>;

export const HomeButtons = ({
  onSignInButtonClick,
  onSignUpButtonClick,
}: HomeButtonsProps) => {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.buttons}>
      <Button
        variant="homePrimary"
        size={windowWidth > 720 ? "medium" : "small"}
        onClick={onSignUpButtonClick}
      >
        {windowWidth > 720 ? "Abrir minha conta" : "Abrir conta"}
      </Button>
      <Button
        variant="homeSecondary"
        size={windowWidth > 720 ? "medium" : "small"}
        onClick={onSignInButtonClick}
      >
        Já tenho conta
      </Button>
    </div>
  );
};
