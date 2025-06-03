"use client";
import { HomeHeader } from "~/components/home-header/home-header";
import { HomeMain } from "~/components/home-main/home-main";
import { FooterHome } from "~/components/footer-home/footer-home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <HomeHeader />
      <HomeMain />
      <FooterHome />
    </div>
  );
}
