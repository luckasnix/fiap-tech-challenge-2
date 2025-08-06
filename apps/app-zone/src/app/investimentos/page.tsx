"use client";
import { HeaderDashboard } from "~/components/header-dashboard/header-dashboard";
import styles from "./page.module.css";
import { InvestmentMain } from "~/components/investment-main/investment-main";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <HeaderDashboard name="Joana da Silva Oliveira" />

      <InvestmentMain />
    </div>
  );
}
