"use client";
import { Button } from "~/components/button/button";
import { VectorImage } from "~/components/vector-image/vector-image";
import useStatementStore from "~/stores/useStatementStore";
import { formatCurrencyBRL } from "~/utils/currency";

import styles from "./transaction-item.module.css";

export type TransactionType = "deposito" | "saque" | "transferencia";

export const positiveTransactionTypes: TransactionType[] = ["deposito"];

export const negativeTransactionTypes: TransactionType[] = [
  "saque",
  "transferencia",
];

export const transactionTypesMap: Record<TransactionType, string> = {
  deposito: "Depósito",
  saque: "Saque",
  transferencia: "Transferência",
};

export type TransactionProps = Readonly<{
  id: string;
  month: string;
  transactionType: TransactionType;
  date: string;
  value: number;
}>;

export const TransactionItem = ({
  id,
  month,
  transactionType,
  date,
  value,
}: TransactionProps) => {
  const removeTransaction = useStatementStore(
    ({ removeTransaction }) => removeTransaction,
  );
  const isNegativeTransaction =
    negativeTransactionTypes.includes(transactionType);

  return (
    <div className={styles.transactionItem}>
      <p className={styles.month}>{month}</p>
      <div className={styles.wrapperTypeDate}>
        <span className={styles.type}>
          {transactionTypesMap[transactionType]}
        </span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.bottomWrapper}>
        <p
          className={styles.value}
        >{`${isNegativeTransaction ? "-" : ""} ${formatCurrencyBRL(value)}`}</p>
        <div className={styles.iconWrapper}>
          <Button variant="ghost" size="ghost">
            <VectorImage name="icon-edit-filled" />
          </Button>
          <Button
            variant="ghost"
            size="ghost"
            onClick={() => removeTransaction(id)}
          >
            <VectorImage name="icon-delete-filled" />
          </Button>
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  );
};
