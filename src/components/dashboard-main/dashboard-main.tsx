"use client";

import { useState } from "react";
import { useWindowWidth } from "~/hooks/useWindowWidth";
import { FinancialSummary } from "../financial-summary/financial-summary";
import { SideMenu } from "../side-menu/side-menu";
import { Statement } from "../statement/statement";
import { TransactionModal } from "../transaction-modal/transaction-modal";
import styles from "./dashboard-main.module.css";

export const DashboardMain = () => {
  const windowWidth = useWindowWidth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles.main}>
      <div className={`${styles.dashboard} container`}>
        {windowWidth > 360 ? <SideMenu /> : null}

        <FinancialSummary
          userName="Joana"
          date={Date.now()}
          checkingAccountValue={250000}
          onNewTransactionButtonClick={openModal}
        />

        <Statement />
      </div>

      <TransactionModal open={isModalOpen} onClose={closeModal} />
    </main>
  );
};
