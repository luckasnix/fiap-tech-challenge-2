"use client";
import { useState } from "react";
import { Button } from "../button/button";
import styles from "./header-dashboard.module.css";
import Image from "next/image";
import Link from "next/link";

export type HeaderProps = Readonly<{
  name: string;
}>;

export const HeaderDashboard = ({ name }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.menuLeft}>
          <Button variant="ghost" onClick={() => setIsModalOpen(true)}>
            <Image
              src="/icone-hamburguer.svg"
              alt="Ícone hamburguer"
              width={24}
              height={24}
            />
          </Button>
        </div>
        <div className={styles.menuRight}>
          <span className={styles.name}>{name}</span>
          <Image
            src="/icone-avatar.svg"
            alt="Avatar de uma pessoa"
            width={40}
            height={40}
          />
        </div>
      </nav>

      <div
        className={`${styles.modalMenuHidden} ${isModalOpen ? styles["isOpen"] : ""}`}
      >
        <div className={styles.closeIconWrapper}>
          <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
            <Image
              src="/icone-fechar.svg"
              alt="Ícone de fechar"
              width={14}
              height={14}
            />
          </Button>
        </div>
        <ul className={styles.ul}>
          <li>
            <Link href="#">Início</Link>
          </li>
          <li>
            <Link href="#">Transferências</Link>
          </li>
          <li>
            <Link href="#">Investimentos</Link>
          </li>
          <li>
            <Link href="#">Outros serviços</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
