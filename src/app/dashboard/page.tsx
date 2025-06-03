"use client";
import { DashboardMain } from "~/components/dashboard-main/dashboard-main";
import { HeaderDashboard } from "~/components/header-dashboard/header-dashboard";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <HeaderDashboard name="Joana da Silva Oliveira" />

      <DashboardMain />
    </div>
  );
}
