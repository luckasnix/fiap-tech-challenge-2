"use client";
import useStatementStore from "~/stores/useStatementStore";

import styles from "./statement.module.css";
import { TransactionItem } from "./transaction-item";

export const Statement = () => {
  const transactions = useStatementStore(({ transactions }) => transactions);

  return (
    <div className={styles.statement}>
      <div className={styles.statementWrapper}>
        <header className={styles.header}>
          <span>Extrato</span>
        </header>
        <div className={styles.statementListWrapper}>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};
