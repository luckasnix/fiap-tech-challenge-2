import { formatCurrencyBRL } from "~/utils/currency";

import styles from "./statement-item.module.css";

export type StatementItemProps = Readonly<{
  id?: number;
  month: string;
  typeTransaction: string;
  date: string;
  value: number;
}>;

export const StatementItem = ({
  month,
  typeTransaction,
  date,
  value,
}: StatementItemProps) => (
  <div className={styles.statementItem}>
    <p className={styles.month}>{month}</p>
    <div className={styles.wrapperTypeDate}>
      <span className={styles.type}>{typeTransaction}</span>
      <span className={styles.date}>{date}</span>
    </div>
    <p className={styles.value}>{formatCurrencyBRL(value)}</p>
  </div>
);
