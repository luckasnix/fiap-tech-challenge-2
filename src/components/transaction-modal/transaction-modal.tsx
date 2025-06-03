"use client";
import { useState, useEffect, useRef, type ChangeEvent } from "react";

import { Button } from "~/components/button/button";
import { Dropdown } from "~/components/dropdown/dropdown";
import { MoneyInput } from "~/components/money-input/money-input";
import type { TransactionType } from "~/components/statement/transaction-item";
import type { DropdownOption } from "~/models/dropdown-option.model";
import useStatementStore from "~/stores/useStatementStore";
import { getMonthName, getDateShort } from "~/utils/date";

import styles from "./transaction-modal.module.css";

const dropdownOptions: DropdownOption[] = [
  { label: "Depósito", value: "deposito", selected: false },
  { label: "Saque", value: "saque", selected: false },
  { label: "Transferência", value: "transferencia", selected: false },
];

export type TransactionModalProps = Readonly<{
  open: boolean;
  onClose: () => void;
}>;

export const TransactionModal = ({ open, onClose }: TransactionModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [currentTransactionType, setCurrentTransactionType] =
    useState<TransactionType | null>(null);
  const [moneyValue, setMoneyValue] = useState("0,00");
  const addTransaction = useStatementStore(
    ({ addTransaction }) => addTransaction,
  );

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
    if (!currentTransactionType) {
      return;
    }
    const currentDate = getDateShort();
    const monthNumber = Number(currentDate.split("/")[1]);
    addTransaction({
      id: crypto.randomUUID(),
      month: getMonthName(monthNumber - 1),
      transactionType: currentTransactionType,
      date: currentDate,
      value: Number(moneyValue.replace(",", ".")) * 100,
    });
    setMoneyValue("0,00");
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
        <Dropdown
          label="Selecione o tipo de transação"
          options={dropdownOptions}
          onSelect={({ value }) => {
            setCurrentTransactionType(value);
          }}
        />
        <MoneyInput value={moneyValue} onChange={handleMoneyChange} />
        <Button
          variant="modalPrimary"
          size="large"
          onClick={handleSubmitTransaction}
        >
          Concluir transação
        </Button>
      </div>
    </dialog>
  );
};
