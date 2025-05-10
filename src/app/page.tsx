import { FooterHome } from "~/components/footer-home/footer-home";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.title}>FIAP - 1º Tech Challenge</h1>
      </div>
      <FooterHome />
    </>
  );
}
