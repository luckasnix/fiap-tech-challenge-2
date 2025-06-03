"use client";
import { useRouter } from "next/navigation";

import { useWindowWidth } from "~/hooks/useWindowWidth";
import { Button } from "~/components/button/button";

import styles from "./home-buttons.module.css";

export type HomeHeaderProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const HomeButtons = () => {
  const router = useRouter();
  const windowWidth = useWindowWidth();

  const goToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className={styles.buttons}>
      <Button
        variant="homePrimary"
        size={windowWidth > 720 ? "medium" : "small"}
        onClick={() => {
          goToDashboard();
        }}
      >
        {windowWidth > 720 ? "Abrir minha conta" : "Abrir conta"}
      </Button>
      <Button
        variant="homeSecondary"
        size={windowWidth > 720 ? "medium" : "small"}
        onClick={() => {
          goToDashboard();
        }}
      >
        Já tenho conta
      </Button>
    </div>
  );
};
