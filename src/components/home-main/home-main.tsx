import { HomeBanner } from "../home-banner/home-banner";
import { HomeHighlight } from "../home-highlight/home-highlight";
import styles from "./home-main.module.css";

export const HomeMain = () => {
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
      <div className="container">
        <HomeBanner
          title={banner.title}
          image={banner.image}
          width={banner.width}
          height={banner.height}
          alt={banner.alt}
        />

        <HomeHighlight />
      </div>
    </main>
  );
};
