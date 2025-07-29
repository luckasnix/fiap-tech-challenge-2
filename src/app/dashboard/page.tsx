"use client";
import { DashboardMain } from "~/components/dashboard-main/dashboard-main";
import { HeaderDashboard } from "~/components/header-dashboard/header-dashboard";
import { useUserStore } from "~/stores/useUserStore";

import styles from "./page.module.css";

export default function Dashboard() {
  const username = useUserStore((state) => state.username);

  return (
    <div className={styles.dashboard}>
      <HeaderDashboard name={username ?? ""} />
      <DashboardMain />
    </div>
  );
}
