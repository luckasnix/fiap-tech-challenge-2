"use client";
import { Button } from "~/components/button/button";
import { VectorImage } from "~/components/vector-image/vector-image";
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
          <div className={styles.iconWrapper}>
            <Button variant="ghost" size="ghost">
              <VectorImage name="icon-edit-filled" />
            </Button>
            <Button variant="ghost" size="ghost">
              <VectorImage name="icon-delete-filled" />
            </Button>
          </div>
        </header>
        <div className={styles.statementListWrapper}>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              {...transaction}
            ></TransactionItem>
          ))}
        </div>
      </div>
    </div>
  );
};
