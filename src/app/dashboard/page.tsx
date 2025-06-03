"use client";
import { useState } from "react";

import { FinancialSummary } from "~/components/financial-summary/financial-summary";
import { SideMenu } from "~/components/side-menu/side-menu";
import { TransactionModal } from "~/components/transaction-modal/transaction-modal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <FinancialSummary
        userName="Joana"
        date={Date.now()}
        checkingAccountValue={250000}
        onNewTransactionButtonClick={openModal}
      />
      <SideMenu />
      <TransactionModal open={isModalOpen} onClose={closeModal} />
    </div>
  );
}
