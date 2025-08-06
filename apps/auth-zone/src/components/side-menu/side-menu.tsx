import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./side-menu.module.css";

const items = [
  { id: "inicio", label: "Início", href: "/dashboard" },
  { id: "transferencias", label: "Transferências", href: "#" },
  { id: "investimentos", label: "Investimentos", href: "/investimentos" },
  { id: "outros", label: "Outros serviços", href: "#" },
];

export const SideMenu = () => {
  const pathname = usePathname();

  const getActiveId = () => {
    if (pathname === "/investimentos") return "investimentos";
    if (pathname === "/dashboard") return "inicio";
    return "inicio";
  };

  return (
    <div className={styles.menu}>
      {items.map(({ id, label, href }) => (
        <Link key={id} href={href} className={styles.linkWrapper}>
          <div
            className={`${styles.item} ${getActiveId() === id ? styles.activated : ""}`}
          >
            {label}
          </div>
        </Link>
      ))}
    </div>
  );
};
