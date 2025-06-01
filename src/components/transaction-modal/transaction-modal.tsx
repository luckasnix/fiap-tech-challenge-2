"use client";
import { useState, useEffect, useRef, type ChangeEvent } from "react";

import { MoneyInput } from "~/components/money-input/money-input";

import styles from "./transaction-modal.module.css";

export type TransactionModalProps = Readonly<{
  open: boolean;
  onClose: () => void;
}>;

export const TransactionModal = ({ open, onClose }: TransactionModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [moneyValue, setMoneyValue] = useState("0,00");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  const handleMoneyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value.replace(/\D/g, "");
    const numberValue = parseFloat(raw) / 100;

    const formatted = numberValue.toFixed(2).replace(".", ",");
    setMoneyValue(formatted);
  };

  const handleSubmitTransaction = () => {
    console.log("Transação concluída"); // TODO: Implementar lógica de transação
    onClose();
  };

  return (
    <dialog className={styles.modal} ref={dialogRef}>
      <div className={styles.innerContainer}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <h2 className={styles.titleText}>Nova Transação</h2>
        <MoneyInput value={moneyValue} onChange={handleMoneyChange} />
        <button
          type="button"
          className={styles.completeTransactionButton}
          onClick={handleSubmitTransaction}
        >
          Concluir transação
        </button>
      </div>
    </dialog>
  );
};
