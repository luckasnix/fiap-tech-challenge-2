import { cookies } from "next/headers";
import { DashboardMain } from "~/components/dashboard-main/dashboard-main";
import { HeaderDashboard } from "~/components/header-dashboard/header-dashboard";
import styles from "./page.module.css";

async function getUserData(token: string) {
  return { name: "Usuário Logado" };
}

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value ?? "";
  const user = await getUserData(token);

  return (
    <div className={styles.dashboard}>
      <HeaderDashboard name={user.name ?? ""} />
      <DashboardMain />
    </div>
  );
}
