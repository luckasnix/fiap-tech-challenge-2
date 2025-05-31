import { formatCurrencyBRL } from "~/utils/currency";

import styles from "./transaction-item.module.css";

export type TransactionProps = Readonly<{
  id?: number;
  month: string;
  typeTransaction: string;
  date: string;
  value: number;
}>;

export const TransactionItem = ({
  month,
  typeTransaction,
  date,
  value,
}: TransactionProps) => (
  <div className={styles.transactionItem}>
    <p className={styles.month}>{month}</p>
    <div className={styles.wrapperTypeDate}>
      <span className={styles.type}>{typeTransaction}</span>
      <span className={styles.date}>{date}</span>
    </div>
    <p className={styles.value}>{formatCurrencyBRL(value)}</p>
  </div>
);
