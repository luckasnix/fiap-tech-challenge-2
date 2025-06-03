import { FooterHome } from "~/components/footer-home/footer-home";
import { NotFoundMain } from "~/components/not-found-main/not-found-main";
import { HomeHeader } from "~/components/home-header/home-header";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.layout}>
      <HomeHeader />
      <NotFoundMain />
      <FooterHome />
    </div>
  );
}
