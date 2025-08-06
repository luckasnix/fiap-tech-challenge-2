import { cookies } from "next/headers";
import { DashboardMain } from "~/components/dashboard-main/dashboard-main";
import { HeaderDashboard } from "~/components/header-dashboard/header-dashboard";
import { SetTokenClient } from "~/components/set-token-client/set-token-client";
import { useUserStore } from "~/stores/useUserStore";
import styles from "./page.module.css";

async function getUserData(token: string) {
  return { name: "Usuário Logado" };
}

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value ?? "";
  const user = await getUserData(token);
  useUserStore.getState().setToken(token);

  return (
    <div className={styles.dashboard}>
      <SetTokenClient token={token} />
      <HeaderDashboard name={user.name ?? ""} />
      <DashboardMain />
    </div>
  );
}
