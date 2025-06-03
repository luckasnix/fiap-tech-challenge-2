"use client";
import { useState } from "react";

import { FinancialSummary } from "~/components/financial-summary/financial-summary";
import { SideMenu } from "~/components/side-menu/side-menu";
import { Statement } from "~/components/statement/statement";
import { TransactionModal } from "~/components/transaction-modal/transaction-modal";

import styles from "./page.module.css";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.layout}>
      <SideMenu />
      <FinancialSummary
        userName="Joana"
        date={Date.now()}
        checkingAccountValue={250000}
        onNewTransactionButtonClick={openModal}
      />
      <Statement />
      <TransactionModal open={isModalOpen} onClose={closeModal} />
    </div>
  );
}
