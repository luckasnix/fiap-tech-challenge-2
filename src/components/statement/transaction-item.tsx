import { formatCurrencyBRL } from "~/utils/currency";

import styles from "./transaction-item.module.css";

export type TransactionType = "deposito" | "saque" | "transferencia";

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
  month,
  transactionType,
  date,
  value,
}: TransactionProps) => (
  <div className={styles.transactionItem}>
    <p className={styles.month}>{month}</p>
    <div className={styles.wrapperTypeDate}>
      <span className={styles.type}>
        {transactionTypesMap[transactionType]}
      </span>
      <span className={styles.date}>{date}</span>
    </div>
    <p className={styles.value}>{formatCurrencyBRL(value)}</p>
  </div>
);
