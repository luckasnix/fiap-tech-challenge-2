"use client";
import { useState } from "react";
import { useWindowWidth } from "~/hooks/useWindowWidth";
import { FinancialSummary } from "~/components/financial-summary/financial-summary";
import { SideMenu } from "~/components/side-menu/side-menu";
import { Statement } from "~/components/statement/statement";
import { TransactionModal } from "~/components/transaction-modal/transaction-modal";

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
          onNewTransactionButtonClick={openModal}
        />

        <Statement />
      </div>

      <TransactionModal open={isModalOpen} onClose={closeModal} />
    </main>
  );
};
