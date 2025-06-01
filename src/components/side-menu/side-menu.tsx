import { useState } from "react";
import styles from "./side-menu.module.css";

const items = [
  { id: "inicio", label: "Início" },
  { id: "transferencias", label: "Transferências" },
  { id: "investimentos", label: "Investimentos" },
  { id: "outros", label: "Outros serviços" },
];

export const SideMenu = () => {
  const [active, setActive] = useState("inicio");

  return (
    <div className={styles.menu}>
      {items.map(({ id, label }) => (
        <div
          key={id}
          onClick={() => setActive(id)}
          className={`${styles.item} ${active === id ? styles.activated : ""}`}
        >
          {label}
        </div>
      ))}
    </div>
  );
};
